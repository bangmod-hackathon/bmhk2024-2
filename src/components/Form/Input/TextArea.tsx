import { Input as AntdInput } from 'antd'
import type { TextAreaProps } from 'antd/es/input'

const Textarea: React.FC<TextAreaProps> = ({ ...props }: TextAreaProps) => {
  return (
    <AntdInput.TextArea
      {...props}
      placeholder={props.placeholder}
      style={{ resize: 'none' }}
      className={`rounded-[10px] bg-white px-3 py-2 border-2 border-white text-primary-200 focus:shadow-[0_4px_6px_0px_rgba(138,213,244,0.25)] focus:outline-none focus:ring-2 focus:ring-[#8AD5F4] focus:border-white focus:text-primary-200 transition-all placeholder:text-[#999999]`}
    />
  )
}

export default Textarea
