import { Select as AntdSelect } from 'antd'
import type { SelectProps } from 'antd/es/select'
import React from 'react'

interface Option {
  value: string
  title: string
}

interface Props extends SelectProps {
  options: Option[]
}

const Select: React.FC<Props> = ({ options, size = 'large', ...props }) => {
  return (
    <AntdSelect
      {...props}
      size={size}
      className="w-full h-full rounded-[10px] text-primary-100 focus:shadow-[0_4px_6px_0px_rgba(138,213,244,0.25)] focus:outline-none transition-all"
    >
      {options.map((option, i) => (
        <AntdSelect.Option
          key={i}
          className="bg-white hover:bg-primary_yellow-300 text-primary-200 px-2 py-3 rounded-none"
          value={option.value}
        >
          {option.title}
        </AntdSelect.Option>
      ))}
    </AntdSelect>
  )
}

export default Select
