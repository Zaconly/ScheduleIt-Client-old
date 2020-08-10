import { TextField, TextFieldProps } from "@material-ui/core"

const OwnTextField = ({ name, ...rest }: TextFieldProps) => (
  <TextField id={name} name={name} variant="outlined" fullWidth margin="normal" {...rest} />
)

export default OwnTextField
