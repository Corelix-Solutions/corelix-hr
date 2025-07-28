import { Request, Response } from 'express'

import * as fs from 'fs/promises'
import { jsPDF } from 'jspdf'
import { DateTime } from 'luxon'
import envVars from '../../envVars'

const currencyFormatter = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 2,
})

export default async function DownloadEmployeePayslip(
  req: Request,
  res: Response,
) {
  try {
    const storageRoot = envVars!.FILE_STORAGE_PATH_ROOT
    const currentDateTime = DateTime.now().toFormat('yyyy-MM-dd-hh-mm-ss')
    const fileName = `${currentDateTime}-payslip.pdf`
    const filePath = `${storageRoot}${fileName}`

    try {
      await fs.access(storageRoot)
    } catch (error) {
      await fs.mkdir(storageRoot, { recursive: true })
    }

    // Default export is a4 paper, portrait, using millimeters for units
    const doc = new jsPDF({
      orientation: 'portrait',
      putOnlyUsedFonts: true,
      format: 'letter',
    })

    // TODO: Obtain this object from database
    const payslipInfo = {
      payDate: DateTime.fromJSDate(new Date()).plus({ days: 15 }).toJSDate(),
      payPeriodStart: new Date(),
      payPeriodEnd: DateTime.fromJSDate(new Date())
        .plus({ days: 15 })
        .toJSDate(),
      company: {
        name: 'CompanyName',
        address: 'Company Building',
      },
      employee: {
        fullName: {
          firstName: 'John',
          middleName: 'J',
          lastName: 'Smith',
        },
      },
      department: {
        name: 'DepartmentName',
        position: {
          name: 'Name',
        },
      },
      earnings: [
        {
          name: 'Basic Pay',
          amount: 100,
        },
        {
          name: 'Paid time off',
          amount: 100,
        },
        {
          name: 'Allowance',
          amount: 100,
        },
        {
          name: 'Overtime Pay',
          amount: 100,
        },
      ],
      deductions: [
        {
          name: 'PAG-IBIG Tax',
          amount: 100,
        },
        {
          name: 'SSS',
          amount: 100,
        },
        {
          name: 'PhilHealth',
          amount: 100,
        },
      ],
    }

    const normalFontSize = doc.getFontSize()

    DrawCompanyInformation(doc, 70, 15, normalFontSize, payslipInfo.company)

    doc.setFontSize(normalFontSize).setFont('helvetica', 'normal')

    DrawPayslipInfoOverview(doc, 10, 30, payslipInfo)

    DrawPayslipBreakdown(
      doc,
      10,
      75,
      payslipInfo.earnings,
      payslipInfo.deductions,
    )

    DrawGrossAndNetPay(
      doc,
      10,
      140,
      payslipInfo.earnings,
      payslipInfo.deductions,
    )

    await fs.writeFile(filePath, doc.output(), {
      flag: 'a+',
    })

    res.download(filePath)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
}

function DrawPayslipInfoOverview(
  doc: jsPDF,
  x: number,
  y: number,
  payslipInfo: {
    payDate: Date
    payPeriodStart: Date
    payPeriodEnd: Date
    employee: {
      fullName: { firstName: string; middleName: string; lastName: string }
    }
    department: { name: string; position: { name: string } }
  },
) {
  doc.table(
    x,
    y,
    [
      {
        col1: 'Employee Name',
        col2: `${payslipInfo.employee.fullName.firstName} ${payslipInfo.employee.fullName.lastName}`,
        col3: 'Pay period',
        col4: `${payslipInfo.payPeriodStart.toDateString()} - ${payslipInfo.payPeriodEnd.toDateString()}`,
      },
      {
        col1: 'Department',
        col2: `${payslipInfo.department.name}`,
        col3: 'Pay date',
        col4: `${payslipInfo.payDate.toDateString()}`,
      },
      {
        col1: 'Position',
        col2: `${payslipInfo.department.position.name}`,
        col3: ' ',
        col4: ' ',
      },
    ],
    [
      { name: 'col1', prompt: ' ', align: 'left', padding: 1, width: 65 },
      { name: 'col2', prompt: ' ', align: 'right', padding: 1, width: 65 },
      { name: 'col3', prompt: ' ', align: 'left', padding: 1, width: 65 },
      { name: 'col4', prompt: ' ', align: 'right', padding: 1, width: 65 },
    ],
    {
      printHeaders: false,
    },
  )
}

function DrawCompanyInformation(
  doc: jsPDF,
  x: number,
  y: number,
  fontSize: number,
  companyInfo: {
    name: string
    address: string
  },
) {
  doc
    .setFont('helvetica', 'bold')
    .setFontSize(fontSize + 10)
    .text(companyInfo.name, x, y)
  doc
    .setFont('helvetica', 'normal')
    .setFontSize(fontSize - 2)
    .text(companyInfo.address, x + 15, y + 8)
}

function DrawPayslipBreakdown(
  doc: jsPDF,
  x: number,
  y: number,
  earnings: { name: string; amount: number }[],
  deductions: { name: string; amount: number }[],
) {
  const tableRowCount = Math.max(earnings.length, deductions.length)
  const tableRows = Array.from(Array(tableRowCount).keys()).map((index) => ({
    Earnings: earnings[index]?.name ?? ' ',
    EarningAmount: earnings[index]?.amount
      ? `${currencyFormatter.format(earnings[index].amount)}`
      : ' ',
    Deductions: deductions[index]?.name ?? ' ',
    DeductionAmount: deductions[index]?.amount
      ? `${currencyFormatter.format(deductions[index].amount)}`
      : ' ',
  }))

  doc.setFont('helvetica', 'normal', 'normal').table(
    x,
    y,
    tableRows,
    [
      {
        name: 'Earnings',
        prompt: 'Earnings',
        align: 'center',
        padding: 1,
        width: 70,
      },
      {
        name: 'EarningAmount',
        prompt: 'Amount',
        align: 'center',
        padding: 1,
        width: 60,
      },
      {
        name: 'Deductions',
        prompt: 'Deductions',
        align: 'center',
        padding: 1,
        width: 70,
      },
      {
        name: 'DeductionAmount',
        prompt: 'Amount',
        align: 'center',
        padding: 1,
        width: 60,
      },
    ],
    {},
  )
}

function DrawGrossAndNetPay(
  doc: jsPDF,
  x: number,
  y: number,
  earnings: { name: string; amount: number }[],
  deductions: { name: string; amount: number }[],
) {
  const grossPay = earnings
    .map((earning) => earning.amount)
    .reduce((prev, curr) => prev + curr)
  const totalDeductions = deductions
    .map((deduction) => deduction.amount)
    .reduce((prev, curr) => prev + curr)
  const netPay = grossPay - totalDeductions

  doc.table(
    x,
    y,
    [
      {
        col1: 'Gross Pay',
        col2: `${currencyFormatter.format(grossPay)}`,
        col3: 'Net Pay',
        col4: `${currencyFormatter.format(netPay)}`,
      },
    ],
    [
      { name: 'col1', prompt: ' ', align: 'left', padding: 1, width: 65 },
      { name: 'col2', prompt: ' ', align: 'right', padding: 1, width: 65 },
      { name: 'col3', prompt: ' ', align: 'left', padding: 1, width: 65 },
      { name: 'col4', prompt: ' ', align: 'right', padding: 1, width: 65 },
    ],
    {
      printHeaders: false,
    },
  )
}
