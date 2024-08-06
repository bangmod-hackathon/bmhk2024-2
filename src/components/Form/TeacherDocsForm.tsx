import { Form, Typography } from 'antd'
import React from 'react'
import { IoAddSharp } from 'react-icons/io5'
import { customizeRequiredMark } from '../../lib/antdForm'
import Upload from './Upload'

interface Props {
  fileIDCard: File | undefined
  setFileIDCard: React.Dispatch<React.SetStateAction<File | undefined>>
  fileTeacherCert: File | undefined
  setFileTeacherCert: React.Dispatch<React.SetStateAction<File | undefined>>
}

const TeacherDocsForm: React.FC<Props> = (prop) => {
  const { Text } = Typography
  const [form] = Form.useForm()

  return (
    <Form form={form} layout="vertical" requiredMark={customizeRequiredMark} scrollToFirstError>
      <div>
        <div className="rounded-t-md bg-primary-200 p-3">
          <Text className="font-normal text-text_color-100 text-lg">เอกสาร</Text>
        </div>
        <div className="rounded-b-md bg-[#0C384E] bg-opacity-50 py-4 pl-8 pr-4 space-y-[30px]">
          <Upload
            title="1. สำเนาบัตรประชาชนอาจารย์ที่ปรึกษาพร้อมเซ็นสำเนาถูกต้องหรือบัตรประจำตัวคนที่ไม่ได้ถือสัญชาติไทยเฉพาะด้านหน้า"
            description="อัปโหลดเอกสารไม่เกิน 10 MB ( PDF เท่านั้น )"
            file={prop.fileIDCard}
            setFile={prop.setFileIDCard}
            required
          >
            <p className="flex flex-row gap-x-2">
              เพิ่มไฟล์
              <span className="content-center">
                <IoAddSharp />
              </span>
            </p>
          </Upload>
          <Upload
            title="2. เอกสารหรือหนังสือยืนยันสถานภาพการเป็นอาจารย์ประจำ สถาบันการศึกษา (บัตรประจำตัวครูอาจารย์, บัตรข้าราชการครูและบุคลากรทางการศึกษา)"
            description="อัปโหลดเอกสารไม่เกิน 10 MB ( PDF เท่านั้น )"
            file={prop.fileTeacherCert}
            setFile={prop.setFileTeacherCert}
            required
          >
            <p className="flex flex-row gap-x-2">
              เพิ่มไฟล์
              <span className="content-center">
                <IoAddSharp />
              </span>
            </p>
          </Upload>
        </div>
      </div>
    </Form>
  )
}

export default TeacherDocsForm
