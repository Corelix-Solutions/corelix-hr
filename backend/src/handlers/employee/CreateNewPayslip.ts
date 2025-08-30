import { Request, Response } from 'express'
import { DateTime } from 'luxon'
import * as z from 'zod'
import { prisma } from '../../PrismaSingleton'
import { IdValidator } from '../../validators/UtilityValidators'

export async function CreateNewPayslip(req: Request, res: Response) {
  const body = z
    .object({
      ...IdValidator.pick({ employeeId: true }).shape,
      payPeriodStart: z.coerce.date(),
      payPeriodEnd: z.coerce.date(),
    })
    .parse(req.body)

  const employee = await prisma.employee.findFirst({
    where: { id: body.employeeId },
    include: {
      positions: {
        orderBy: { dateStarted: 'desc' },
        where: {
          AND: {
            // TODO: Find a way to clamp dateEnded to accept the payperiodend (less-than-or-equal) or null
            dateEnded: { equals: null },
            dateStarted: { gte: body.payPeriodStart },
          },
        },
        include: { position: true },
      },
      attendances: {
        where: {
          AND: {
            timeIn: { gte: body.payPeriodStart },
            timeOut: { lte: body.payPeriodEnd },
          },
        },
      },
      leaveRequests: {
        where: {
          AND: {
            status: { equals: 'Approved' },
            reason: { equals: 'Vacation' },
          },
        },
      },
    },
  })

  if (!employee) {
    res.status(404).json({
      message: `Cannot generate payslip for Employee ${body.employeeId}. Employee not found.`,
    })
    return
  }

  const earnings = employee.positions.map((currPosition) => {
    const LUNCH_TIME_MINS = 60

    const attendancesDuringPosition = employee.attendances.filter(
      (attendance) => {
        // Exclude attendances that happened on weekends
        if (DateTime.fromJSDate(attendance.timeIn).isWeekend) return false

        // Exclude attendances that happened before the position
        if (currPosition.dateStarted.getTime() > attendance.timeIn.getTime())
          return false

        // Exclude attendances that aren't finished yet
        if (!attendance.timeOut) return false

        // If the user changed positions in the middle of a pay period,
        // exclude attendances that don't fit the period of that position
        if (
          currPosition.dateEnded &&
          currPosition.dateEnded.getTime() < attendance.timeOut.getTime()
        )
          return false

        return true
      },
    )

    // Basic Pay
    const basicPayPerMinute = currPosition.hourlyBasicPay / 60
    const actualAttendedMins = attendancesDuringPosition
      .map((attendance) => {
        // All of this stuff is to get the smallest minute duration between two datetime ranges
        // The outer range are the required time in and time out
        // The inner range are the actual time in and time out based on attendance
        const actualTimeInDt = DateTime.fromJSDate(attendance.timeIn)
        const actualTimeOutDt = DateTime.fromJSDate(attendance.timeOut!)

        const requiredTimeInDt = DateTime.fromObject({
          day: actualTimeInDt.day,
          month: actualTimeInDt.month,
          year: actualTimeInDt.year,
          hour: currPosition.startWorkHour,
          minute: currPosition.startWorkMinute,
        })
        const requiredTimeOutDt = DateTime.fromObject({
          day: actualTimeOutDt.day,
          month: actualTimeOutDt.month,
          year: actualTimeOutDt.year,
          hour: currPosition.endWorkHour,
          minute: currPosition.endWorkMinute,
        })

        const payStartTime = DateTime.max(requiredTimeInDt, actualTimeInDt)
        const payEndTime = DateTime.min(requiredTimeOutDt, actualTimeOutDt)

        if (payStartTime.hour < 12 && payEndTime.hour > 13) {
          return (
            payStartTime.diff(payEndTime, ['minutes']).minutes - LUNCH_TIME_MINS
          )
        }

        return payStartTime.diff(payEndTime, ['minutes']).minutes
      })
      .reduce((minute, current) => minute + current)

    const basicPayForPeriod = actualAttendedMins * basicPayPerMinute

    // Leaves
    const leavePayPerMinute = currPosition.hourlyLeavePay / 60
    const leaveDays: { startDt: DateTime; endDt: DateTime }[] = []

    // Convert the leave periods into days for easier calculations
    employee.leaveRequests.forEach((leave) => {
      const leavePeriodStartDateDt = DateTime.fromJSDate(leave.startDate)
      let leavePeriodCurrentDateDt = leavePeriodStartDateDt
      const leavePeriodEndDateDt = DateTime.fromJSDate(leave.endDate)

      do {
        leaveDays.push({
          startDt: DateTime.fromObject({
            year: leavePeriodCurrentDateDt.year,
            month: leavePeriodCurrentDateDt.month,
            day: leavePeriodCurrentDateDt.day,
            hour: currPosition.startWorkHour,
            minute: currPosition.startWorkMinute,
          }),
          endDt: DateTime.fromObject({
            year: leavePeriodCurrentDateDt.year,
            month: leavePeriodCurrentDateDt.month,
            day: leavePeriodCurrentDateDt.day,
            hour: currPosition.endWorkHour,
            minute: currPosition.endWorkMinute,
          }),
        })
        leavePeriodCurrentDateDt = leavePeriodCurrentDateDt.plus({ days: 1 })
      } while (!leavePeriodStartDateDt.hasSame(leavePeriodEndDateDt, 'day'))
    })

    const actualLeaveMins = leaveDays
      .map((leaveDay) => {
        if (leaveDay.startDt.hour < 12 && leaveDay.endDt.hour > 13) {
          return (
            leaveDay.startDt.diff(leaveDay.endDt, ['minutes']).minutes -
            LUNCH_TIME_MINS
          )
        }

        return leaveDay.startDt.diff(leaveDay.endDt, ['minutes']).minutes
      })
      .reduce((minute, current) => minute + current)

    const leavePayForPeriod = actualLeaveMins * leavePayPerMinute

    return {
      position: {
        name: currPosition.position.name,
        dateStart: currPosition.dateStarted,
        dateEnd: currPosition.dateEnded,
      },
      basicPayForPeriod,
      leavePayForPeriod,
    }
  })
}
