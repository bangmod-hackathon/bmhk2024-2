import { Upload as AntdUpload, GetProp, UploadProps } from 'antd'
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
import { MdOutlinePreview } from 'react-icons/md'
import { TbCloudUpload } from 'react-icons/tb'

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0]

interface UploadPropsForm extends UploadProps {
  title?: string
  required?: boolean
  description?: string
  imageUpload?: boolean
  file: File | undefined
  setFile: React.Dispatch<React.SetStateAction<File | undefined>>
  errorUploadMessage: string
  setErrorUploadMessage: React.Dispatch<React.SetStateAction<string>>
  fileURL: string
  isLatest: boolean
  setIsLatest: React.Dispatch<React.SetStateAction<boolean>>
  isLoading: boolean
}

const Upload: React.FC<UploadPropsForm> = ({ imageUpload = false, required = false, ...props }: UploadPropsForm) => {
  const beforeUpload = (file: FileType) => {
    const maxFileSize = 10
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
    const isPdf = file.type === 'application/pdf'
    const fileSize = file.size / 1024 / 1024 < maxFileSize
    if (!fileSize) {
      props.setErrorUploadMessage(ERROR_UPLOAD_FILESIZE)
    } else if (!isJpgOrPng && imageUpload) {
      props.setErrorUploadMessage(ERROR_UPLOAD_FILETYPE_IMAGE)
    } else if (!isPdf && !imageUpload) {
      props.setErrorUploadMessage(ERROR_UPLOAD_FILETYPE_PDF)
    } else {
      props.setErrorUploadMessage('')
    }
    props.setFile(file)
    props.setIsLatest(false)
    return true
  }

  const uploadButton = (
    <button
      className={`flex h-[63px] w-full flex-col items-center justify-center rounded-[10px] bg-white px-[9px] py-[8px] text-text_color-200 ${props.errorUploadMessage === '' ? '' : 'border border-danger'}`}
    >
      {props.children}
    </button>
  )

  const previewUpload = (
    <div
      className={`flex h-[63px] w-full flex-row items-center justify-between rounded-[10px] bg-white px-[9px] py-[8px] font-normal text-primary-400 ${props.errorUploadMessage === '' ? '' : 'border border-danger'}`}
    >
      <div className="flex flex-row items-start overflow-hidden">
        <BiSolidFileBlank className="size-12 text-text_color-300" />
        <div className="flex flex-col">
          <p className="text-lg font-normal ">{props.file?.name && truncateFilename(props.file?.name)}</p>
          <div className="flex flex-row items-center gap-4 text-sm">
            <div>
              {props.file?.size !== 0 && !props.isLatest ? (
                <div className="flex flex-row items-center gap-1">
                  <TbCloudUpload className="size-5" />
                  Waiting for upload
                </div>
              ) : (
                <button
                  onClick={() => {
                    window.open(props.fileURL, '_blank')
                  }}
                  className="underline flex flex-row items-center gap-1"
                >
                  <MdOutlinePreview className="size-5" />
                  Preview
                </button>
              )}
            </div>
            <p></p>
            {props.errorUploadMessage && (
              <div className="flex flex-row items-center text-danger">
                <IoIosWarning className="size-4" />
                <p>Upload failed</p>
              </div>
            )}
          </div>
        </div>
      </div>
      {props.errorUploadMessage === '' ? (
        <ImBin
          className={`size-6 ${props.isLoading ? 'cursor-not-allowed' : 'cursor-pointer'} text-[#C7C7C7]`}
          onClick={() => {
            if (!props.isLoading) {
              props.setErrorUploadMessage('')
              props.setFile(undefined)
            }
          }}
        />
      ) : (
        <RiRestartLine
          className="size-6 cursor-pointer text-[#C7C7C7]"
          onClick={() => {
            props.setErrorUploadMessage('')
            props.setFile(undefined)
          }}
        />
      )}
    </div>
  )

  return (
    <div className="grid grid-cols-1 items-center gap-4 lg:grid-cols-2">
      <label className="font-body text-lg text-text_color-400">
        {props.title} {required && <span className="text-primary_yellow-100">*</span>}
      </label>
      <div className=" col-span-1 flex flex-col justify-center gap-[10px]">
        <AntdUpload
          {...props}
          showUploadList={false}
          beforeUpload={beforeUpload}
          accept={imageUpload ? 'image/jpeg, image/png' : 'application/pdf'}
        >
          {props.file ? null : uploadButton}
        </AntdUpload>
        {props.file ? previewUpload : null}
        <p className="text-sm text-white">
          {props.errorUploadMessage === '' ? (
            <>{props.description}</>
          ) : (
            <span className="text-danger">{props.errorUploadMessage}</span>
          )}
        </p>
      </div>
    </div>
  )
}

export default Upload
