interface Option {
  title: string
  value: string | number
}

interface Props {
  title: string
  required: boolean
  options: Option[]
}

const Select = ({ ...props }: Props) => {
  return (
    <div className="flex flex-col">
      <label className="font-body text-text_color-100">
        {props.title} {props.required && <span className="text-primary_yellow-100">*</span>}
      </label>
      <select className="px-3 py-2 rounded-[5px] border-2 border-white  text-[#999999] focus:text-primary-100 focus:shadow-[0_4px_6px_0px_rgba(138,213,244,0.25)] focus:outline-none focus:ring-2 focus:ring-[#8AD5F4] transition-all">
        {props.options.map((option, i) => (
          <option
            key={i}
            className="bg-white hover:bg-primary_yellow-300 text-primary-200 px-2 py-3"
            value={option.value}
          >
            {option.title}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select
