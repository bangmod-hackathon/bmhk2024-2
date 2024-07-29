import * as React from 'react';

interface Props {
    title: string;
    required: boolean;
    children: React.ReactNode
}

const Select = ({ ...props }: Props) => {
  return (
    <div className="flex flex-col">
      <label className="font-body text-text_color-100">
        {props.title} {props.required && <span className="text-primary_yellow-100">*</span>}
      </label>
      <select 
        className="px-3 py-2 rounded-[5px] border-2 border-white  text-[#999999] focus:text-primary-100 focus:shadow-[0_4px_6px_0px_rgba(138,213,244,0.25)] focus:outline-none focus:ring-2 focus:ring-[#8AD5F4] transition-all"
      >
        {props.children}
      </select>
    </div>
  )
}

export default Select
