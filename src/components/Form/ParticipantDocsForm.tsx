import { Form, Typography } from 'antd'
import React, { useState } from 'react'
import { IoAddSharp } from 'react-icons/io5'
import Upload from './Upload'
import { ERROR_UPLOAD_NULL } from '../../constants/errorMessage'

interface Props {
  fileParticipantPhotoURL: string
  fileParticipantPhoto: File | undefined
  setFileParticipantPhoto: React.Dispatch<React.SetStateAction<File | undefined>>
  isLatestParticipantPhoto: boolean
  setIsLatestParticipantPhoto: React.Dispatch<React.SetStateAction<boolean>>

  fileParticipantIDCardURL: string
  fileParticipantIDCard: File | undefined
  setFileParticipantIDCard: React.Dispatch<React.SetStateAction<File | undefined>>
  isLatestParticipantIDCard: boolean
  setIsLatestParticipantIDCard: React.Dispatch<React.SetStateAction<boolean>>

  fileParticipantPorPor7URL: string
  fileParticipantPorPor7: File | undefined
  setFileParticipantPorPor7: React.Dispatch<React.SetStateAction<File | undefined>>
  isLatestParticipantPorPor7: boolean
  setIsLatestParticipantPorPor7: React.Dispatch<React.SetStateAction<boolean>>
}

const ParticipantDocsForm: React.FC<Props> = (props) => {
  const { Text } = Typography

  const [uploadMsgPhoto, setUploadMsgPhoto] = useState<string>('')
  const [uploadMsgIDCard, setUploadMsgIDCard] = useState<string>('')
  const [uploadMsgPorPor7, setUploadMsgPorPor7] = useState<string>('')

  return (
    <React.Fragment>
      <div>
        <div className="rounded-t-md bg-primary-200 p-3">
          <Text className="font-normal text-text_color-100 text-lg">เอกสาร</Text>
        </div>
        <div className="rounded-b-md bg-[#0C384E] bg-opacity-50 p-4 space-y-[30px]">
          <Form.Item
            name={'participantFilePhotoUpload'}
            rules={[
              () => ({
                validator() {
                  if (props.fileParticipantPhoto === null || props.fileParticipantPhoto === undefined) {
                    setUploadMsgPhoto(ERROR_UPLOAD_NULL)
                    return Promise.reject(new Error())
                  } else if (uploadMsgPhoto !== '') {
                    return Promise.reject(new Error())
                  }
                  return Promise.resolve()
                }
              })
            ]}
          >
            <Upload
              title="1. รูปถ่ายนักเรียนขนาด 1.5 นิ้ว"
              description="อัปโหลดเอกสารไม่เกิน 10 MB (JPEG/PNG เท่านั้น)"
              file={props.fileParticipantPhoto}
              setFile={props.setFileParticipantPhoto}
              required
              imageUpload
              errorUploadMessage={uploadMsgPhoto}
              setErrorUploadMessage={setUploadMsgPhoto}
              fileURL={props.fileParticipantPhotoURL}
              isLatest={props.isLatestParticipantPhoto}
              setIsLatest={props.setIsLatestParticipantPhoto}
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
            name={'parentFileIDCardUploadFile'}
            rules={[
              () => ({
                validator() {
                  if (props.fileParticipantIDCard === null || props.fileParticipantIDCard === undefined) {
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
              title="2. สำเนาบัตรประจำตัวประชาชน หรือหนังสือเดินทาง (กรณีชาวต่างชาติ) ของผู้เข้าแข่งขันพร้อมเซ็นสำเนาถูกต้อง เฉพาะด้านหน้า"
              description="อัปโหลดเอกสารไม่เกิน 10 MB (PDF เท่านั้น)"
              file={props.fileParticipantIDCard}
              setFile={props.setFileParticipantIDCard}
              required
              errorUploadMessage={uploadMsgIDCard}
              setErrorUploadMessage={setUploadMsgIDCard}
              fileURL={props.fileParticipantIDCardURL}
              isLatest={props.isLatestParticipantIDCard}
              setIsLatest={props.setIsLatestParticipantIDCard}
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
            name={'parentFilePorPor7UploadFile'}
            rules={[
              () => ({
                validator() {
                  if (props.fileParticipantPorPor7 === null || props.fileParticipantPorPor7 === undefined) {
                    setUploadMsgPorPor7(ERROR_UPLOAD_NULL)
                    return Promise.reject(new Error())
                  } else if (uploadMsgPorPor7 !== '') {
                    return Promise.reject(new Error())
                  }
                  return Promise.resolve()
                }
              })
            ]}
          >
            <Upload
              title="3. ปพ.7 ฉบับจริงของผู้เข้าแข่งขัน"
              description="อัปโหลดเอกสารไม่เกิน 10 MB (PDF เท่านั้น)"
              file={props.fileParticipantPorPor7}
              setFile={props.setFileParticipantPorPor7}
              required
              errorUploadMessage={uploadMsgPorPor7}
              setErrorUploadMessage={setUploadMsgPorPor7}
              fileURL={props.fileParticipantPorPor7URL}
              isLatest={props.isLatestParticipantPorPor7}
              setIsLatest={props.setIsLatestParticipantPorPor7}
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
    </React.Fragment>
  )
}

export default ParticipantDocsForm
