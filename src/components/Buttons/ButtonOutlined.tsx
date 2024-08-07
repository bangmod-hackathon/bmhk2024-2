const classRegular =
  'rounded-[5px] bg-transparent border border-[#FFF0BF] px-4 py-2 font-body font-normal text-primary_yellow-100 transition-colors duration-300 hover:text-[#FFF0BF]'
const classDisabled =
  'cursor-not-allowed rounded-[5px] border border-[#BAB39D] px-4 py-2 font-body font-normal text-[#9D9477]'
const ButtonOutlined: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element => {
  return (
    <button {...props} className={props.disabled ? classDisabled : classRegular}>
      {props.children}
    </button>
  )
}

export default ButtonOutlined
