import { Request, Response } from 'express'

import * as fs from 'fs/promises'
import { jsPDF } from 'jspdf'
import { DateTime } from 'luxon'
import envVars from '../../envVars'

export default async function DownloadEmployeePayslip(
  req: Request,
  res: Response,
) {
  try {
    const storageRoot = envVars!.FILE_STORAGE_PATH_ROOT + '/'
    const currentDateTime = DateTime.now().toFormat('yyyy-MM-dd-hh-mm')
    const fileName = `${currentDateTime}-payslip.pdf`
    const filePath = `${storageRoot}${fileName}`

    try {
      await fs.access(storageRoot)
    } catch (error) {
      await fs.mkdir(storageRoot, { recursive: true })
    }

    // Default export is a4 paper, portrait, using millimeters for units
    const doc = new jsPDF()
    doc.text('Hello world!', 10, 10)

    await fs.writeFile(filePath, doc.output(), {
      flag: 'a+',
    })
    res.download(filePath)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
}
