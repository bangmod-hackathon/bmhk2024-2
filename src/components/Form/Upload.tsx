import { Upload as AntdUpload, UploadProps } from 'antd'

interface UploadPropsForm extends UploadProps {
  title?: string
  required?: boolean
  description?: string
}

const Upload: React.FC<UploadPropsForm> = ({ required = false, ...props }: UploadPropsForm) => {
  return (
    <div className="my-5 grid grid-cols-1 items-center gap-4 lg:grid-cols-2">
      <label className="font-body text-lg text-text_color-100">
        {props.title} {required && <span className="text-primary_yellow-100">*</span>}
      </label>
      <div className="col-span-1 flex flex-col justify-center gap-[10px]">
        <AntdUpload {...props}>
          <button className="flex h-[63px] w-full flex-col items-center justify-center rounded-[10px] bg-white px-[7px] py-[6px] text-text_color-200">
            {props.children}
          </button>
        </AntdUpload>
        <p className="text-sm text-white">{props.description}</p>
      </div>
    </div>
  )
}

export default Upload
