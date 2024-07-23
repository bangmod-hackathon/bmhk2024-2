import { Input as AntdInput, InputProps } from 'antd'

const Input: React.FC<InputProps> = ({ ...props }: InputProps) => {
  return (
    <div className="flex flex-col">
      <label className="font-body text-text_color-100">
        {props.title} {props.required && <span className="text-primary_yellow-100">*</span>}
      </label>
      <AntdInput
        {...props}
        className="rounded-[5px] bg-white px-3 py-2 text-primary_yellow-100 focus:text-primary-100 focus:shadow-[0_4px_6px_0px_rgba(138,213,244,0.25)] focus:outline-none focus:ring-2 focus:ring-[#8AD5F4]"
      />
    </div>
  )
}

export default Input
