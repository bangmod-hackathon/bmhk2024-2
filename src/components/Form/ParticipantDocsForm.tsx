import { Typography } from 'antd'
import React, { useState } from 'react'
import { IoAddSharp } from 'react-icons/io5'
import Upload from './Upload'

const ParticipantDocsForm: React.FC = () => {
  const { Text } = Typography
  const [file, setFile] = useState<File | undefined>(undefined)

  return (
    <>
      <div>
        <div className="rounded-t-md bg-primary-200 p-3">
          <Text className="font-normal text-text_color-100 text-lg">เอกสาร</Text>
        </div>
        <div className="rounded-b-md bg-[#0C384E] bg-opacity-50 p-4 space-y-[30px]">
          <Upload
            title="1. รูปถ่ายนักเรียนขนาด 1.5 นิ้ว"
            description="อัปโหลดเอกสารไม่เกิน 10 MB ( JPEG/PNG เท่านั้น )"
            file={file}
            setFile={setFile}
            required
            imageUpload
          >
            <p className="flex flex-row gap-x-2">
              เพิ่มไฟล์
              <span className="content-center">
                <IoAddSharp />
              </span>
            </p>
          </Upload>
          <Upload
            title="2. สำเนาบัตรประชาชนผู้เข้าแข่งขันพร้อมเซ็นสำเนาถูกต้อง  หรือบัตรประจำตัวคนซึ่งไม่ได้ถือสัญชาติไทย เฉพาะด้านหน้า"
            description="อัปโหลดเอกสารไม่เกิน 10 MB ( PDF เท่านั้น )"
            file={file}
            setFile={setFile}
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
            title="3. ปพ.7 ฉบับจริงของผู้เข้าแข่งขัน"
            description="อัปโหลดเอกสารไม่เกิน 10 MB ( PDF เท่านั้น )"
            file={file}
            setFile={setFile}
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
    </>
  )
}

export default ParticipantDocsForm
