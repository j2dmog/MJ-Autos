


const Input = ({className,type, ...props}) => {
  return (
    <input className={className} type={type} Value={props.Value} Placeholder={props.Placeholder} />
  )
}

export default Input