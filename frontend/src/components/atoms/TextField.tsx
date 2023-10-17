interface TextFieldProps {
  text: string
  action: () => void
}

const TextField = (props: TextFieldProps) => {
  const actionHandle = () => {
    props.action()
  }
  return (
    <>
      <p onClick={actionHandle}></p>
    </>
  )
}
