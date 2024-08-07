import { Input as AntdInput, InputProps } from 'antd'

const Input: React.FC<InputProps> = ({ size = 'large', ...props }: InputProps) => {
  return (
    <AntdInput
      {...props}
      size={size}
      placeholder={props.placeholder}
      className={`rounded-[10px] w-full h-full bg-white border-2 border-white text-primary-200 focus:shadow-[0_4px_6px_0px_rgba(138,213,244,0.25)] focus:outline-none focus:ring-2 focus:ring-[#8AD5F4] focus:border-white focus:text-primary-200 transition-all placeholder:text-[#999999]`}
    />
  )
}

export default Input
