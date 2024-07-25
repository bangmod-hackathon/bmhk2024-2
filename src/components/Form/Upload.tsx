import { Upload as AntdUpload, GetProp, UploadProps } from 'antd'
import { useState } from 'react'
import { BiSolidFileBlank } from 'react-icons/bi'
import { ImBin } from 'react-icons/im'
import { IoIosWarning } from 'react-icons/io'
import { RiRestartLine } from 'react-icons/ri'
import {
  ERROR_UPLOAD_FILESIZE,
  ERROR_UPLOAD_FILETYPE_IMAGE,
  ERROR_UPLOAD_FILETYPE_PDF
} from '../../constants/errorMessage'
import { truncateFilename } from '../../utils/utils'
type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0]

interface UploadPropsForm extends UploadProps {
  title?: string
  required?: boolean
  description?: string
  imageUpload?: boolean
  file: File | undefined
  setFile: React.Dispatch<React.SetStateAction<File | undefined>>
}

const Upload: React.FC<UploadPropsForm> = ({ imageUpload = false, required = false, ...props }: UploadPropsForm) => {
  const [errorUploadMessage, setErrorUploadMessage] = useState<string>('')

  const beforeUpload = (file: FileType) => {
    const maxFileSize = 10
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
    const isPdf = file.type === 'application/pdf'
    const fileSize = file.size / 1024 / 1024 < maxFileSize
    if (!fileSize) {
      setErrorUploadMessage(ERROR_UPLOAD_FILESIZE)
    } else if (!isJpgOrPng && imageUpload) {
      setErrorUploadMessage(ERROR_UPLOAD_FILETYPE_IMAGE)
    } else if (!isPdf && !imageUpload) {
      setErrorUploadMessage(ERROR_UPLOAD_FILETYPE_PDF)
    } else {
      setErrorUploadMessage('')
    }
    props.setFile(file)
    return true
  }

  const uploadButton = (
    <button className="text-text_color-200 flex h-[63px] w-full flex-col items-center justify-center rounded-[10px] bg-white px-[9px] py-[8px]">
      {props.children}
    </button>
  )

  const previewUpload = (
    <div
      className={`text-primary-400 flex h-[63px] w-full flex-row items-center justify-between rounded-[10px] bg-white px-[9px] py-[8px] font-normal ${errorUploadMessage === '' ? '' : 'border-danger border'}`}
    >
      <div className="flex flex-row items-start overflow-hidden">
        <BiSolidFileBlank className="text-text_color-300 size-12" />
        <div className="flex flex-col">
          <p className="text-lg font-normal ">{props.file?.name && truncateFilename(props.file?.name)}</p>
          <div className="flex flex-row items-center gap-4 text-sm">
            <p>{props.file && Math.round((props.file.size / (1024 * 1024) + Number.EPSILON) * 100) / 100} MB</p>
            {errorUploadMessage && (
              <div className="text-danger flex flex-row items-center">
                <IoIosWarning className="size-4" />
                <p>Upload failed</p>
              </div>
            )}
          </div>
        </div>
      </div>
      {errorUploadMessage === '' ? (
        <ImBin
          className="size-6 cursor-pointer text-[#C7C7C7]"
          onClick={() => {
            setErrorUploadMessage('')
            props.setFile(undefined)
          }}
        />
      ) : (
        <RiRestartLine
          className="size-6 cursor-pointer text-[#C7C7C7]"
          onClick={() => {
            setErrorUploadMessage('')
            props.setFile(undefined)
          }}
        />
      )}
    </div>
  )

  return (
    <div className="my-5 grid grid-cols-1 items-center gap-4 lg:grid-cols-2">
      <label className="font-body text-text_color-100 text-lg">
        {props.title} {required && <span className="text-primary_yellow-100">*</span>}
      </label>
      <div className=" col-span-1 flex flex-col justify-center gap-[10px]">
        <AntdUpload {...props} showUploadList={false} beforeUpload={beforeUpload}>
          {props.file ? null : uploadButton}
        </AntdUpload>
        {props.file ? previewUpload : null}
        <p className="text-sm text-white">
          {errorUploadMessage === '' ? <p>{props.description}</p> : <p className="text-danger">{errorUploadMessage}</p>}
        </p>
      </div>
    </div>
  )
}

export default Upload
