import { Form, Typography } from 'antd'
import React, { useState } from 'react'
import { IoAddSharp } from 'react-icons/io5'
import Upload from './Upload'
import { ERROR_UPLOAD_NULL } from '../../constants/errorMessage'

interface Props {
  fileIDCardURL: string
  fileIDCard: File | undefined
  setFileIDCard: React.Dispatch<React.SetStateAction<File | undefined>>
  isLatestIdcard: boolean
  setIsLatestIdcard: React.Dispatch<React.SetStateAction<boolean>>

  fileTeacherCertURL: string
  fileTeacherCert: File | undefined
  setFileTeacherCert: React.Dispatch<React.SetStateAction<File | undefined>>
  isLatestTeacherCert: boolean
  setIsLatestTeacherCert: React.Dispatch<React.SetStateAction<boolean>>
}

const TeacherDocsForm: React.FC<Props> = (prop) => {
  const { Text } = Typography

  const [uploadMsgIDCard, setUploadMsgIDCard] = useState<string>('')
  const [uploadMsgTeacherCert, setUploadMsgTeacherCert] = useState<string>('')

  return (
    <div>
      <div className="rounded-t-md bg-primary-200 p-3">
        <Text className="font-normal text-text_color-100 text-lg">เอกสาร</Text>
      </div>
      <div className="rounded-b-md bg-[#0C384E] bg-opacity-50 py-4 pl-8 pr-4 space-y-[30px]">
        <Form.Item
          name={'advisorFileIDCardUploadFile'}
          rules={[
            () => ({
              validator() {
                if (prop.fileIDCard === null || prop.fileIDCard === undefined) {
                  setUploadMsgIDCard(ERROR_UPLOAD_NULL)
                  return Promise.reject(new Error())
                } else if (uploadMsgIDCard !== '') {
                  return Promise.reject(new Error())
                }
                return Promise.resolve()
              }
            })
          ]}
        >
          <Upload
            title="1. สำเนาบัตรประจำตัวประชาชน หรือหนังสือเดินทาง (กรณีชาวต่างชาติ) ของอาจารย์ที่ปรึกษาพร้อมเซ็นสำเนาถูกต้องเฉพาะด้านหน้า"
            description="อัปโหลดเอกสารไม่เกิน 10 MB (PDF เท่านั้น)"
            file={prop.fileIDCard}
            setFile={prop.setFileIDCard}
            required
            errorUploadMessage={uploadMsgIDCard}
            setErrorUploadMessage={setUploadMsgIDCard}
            fileURL={prop.fileIDCardURL}
            isLatest={prop.isLatestIdcard}
            setIsLatest={prop.setIsLatestIdcard}
          >
            <p className="flex flex-row gap-x-2">
              เพิ่มไฟล์
              <span className="content-center">
                <IoAddSharp />
              </span>
            </p>
          </Upload>
        </Form.Item>
        <Form.Item
          name={'advisorFileTeacherCertUploadFile'}
          rules={[
            () => ({
              validator() {
                if (prop.fileTeacherCert === null || prop.fileTeacherCert === undefined) {
                  setUploadMsgTeacherCert(ERROR_UPLOAD_NULL)
                  return Promise.reject(new Error())
                } else if (uploadMsgTeacherCert !== '') {
                  return Promise.reject(new Error())
                }
                return Promise.resolve()
              }
            })
          ]}
        >
          <Upload
            title="2. เอกสาร หรือหนังสือยืนยันสถานภาพการเป็นอาจารย์ประจำสถานศึกษา (บัตรประจำตัวครูอาจารย์,
                บัตรข้าราชการครูและบุคลากรทางการศึกษา)"
            description="อัปโหลดเอกสารไม่เกิน 10 MB (PDF เท่านั้น)"
            file={prop.fileTeacherCert}
            setFile={prop.setFileTeacherCert}
            required
            errorUploadMessage={uploadMsgTeacherCert}
            setErrorUploadMessage={setUploadMsgTeacherCert}
            fileURL={prop.fileTeacherCertURL}
            isLatest={prop.isLatestTeacherCert}
            setIsLatest={prop.setIsLatestTeacherCert}
          >
            <p className="flex flex-row gap-x-2">
              เพิ่มไฟล์
              <span className="content-center">
                <IoAddSharp />
              </span>
            </p>
          </Upload>
        </Form.Item>
      </div>
    </div>
  )
}

export default TeacherDocsForm
