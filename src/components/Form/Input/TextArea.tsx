interface Props {
  title: string
  required: boolean
  placeholder: string
  error?: boolean
  errorMessage?: string
}

const TextArea: React.FC<Props> = ({ ...props }: Props) => {
  return (
    <div className="flex flex-col">
      <label className="font-body text-text_color-100">
        {props.title} {props.required && <span className="text-primary_yellow-100">*</span>}
      </label>
      <textarea
        placeholder={props.placeholder}
        className={`rounded-[5px] bg-white px-3 py-2 ${props.error ? 'border-2 border-red-500 text-red-500' : 'border-2 border-white text-primary-100'} focus:shadow-[0_4px_6px_0px_rgba(138,213,244,0.25)] focus:outline-none focus:ring-2 focus:ring-[#8AD5F4] transition-all`}
      />
      {props.error && <label className="font-body text-red-500 text-xs">icon {props.errorMessage}</label>}
    </div>
  )
}

export default TextArea
