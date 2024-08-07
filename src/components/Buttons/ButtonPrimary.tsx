const classRegular =
  'rounded-[5px] bg-primary_yellow-100 px-4 py-2 font-body font-normal text-primary-200 transition-colors duration-300 hover:bg-primary_yellow-300 hover:text-primary-300'
const classDisabled = 'cursor-not-allowed rounded-[5px] bg-[#FFF0BF] px-4 py-2 font-body font-normal text-[#A5A6A7]'
const ButtonPrimary: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element => {
  return (
    <button {...props} className={props.disabled ? classDisabled : classRegular}>
      {props.children}
    </button>
  )
}

export default ButtonPrimary
