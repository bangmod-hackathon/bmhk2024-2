const classRegular =
  'rounded-[5px] bg-[#8AD5F4] px-4 py-2 font-body font-normal text-primary-100 transition-colors duration-300 hover:bg-secondary_blue-100 hover:text-primary-300'
const classDisabled = 'cursor-not-allowed rounded-[5px] bg-[#D1F2FF] px-4 py-2 font-body font-normal text-primary-400'
const ButtonSecondary: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element => {
  return (
    <button {...props} className={props.disabled ? classDisabled : classRegular}>
      {props.children}
    </button>
  )
}

export default ButtonSecondary
