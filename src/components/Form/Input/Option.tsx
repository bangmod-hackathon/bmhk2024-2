interface Props {
    title: string;
    value: string | number;
}

const Option = ({ ...props }: Props) => {
  return (
    <option value={props.value}>{props.title}</option>
  )
}

export default Option
