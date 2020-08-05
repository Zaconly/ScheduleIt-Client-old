import {
  Collapse,
  DialogActions,
  DialogContent,
  IconButton,
  TextField,
  Typography
} from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close"
import Alert from "@material-ui/lab/Alert"
import { useState } from "react"
import { useForm } from "react-hook-form"

import { MeDocument, useLoginMutation } from "../../generated/graphql"
import { LoadingButton } from "../custom"
import { useStyles } from "./style"

interface LoginInputs {
  identifier: string
  password: string
}

interface Props {
  handleClose: () => void
}

const LoginForm = ({ handleClose }: Props) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const { register, handleSubmit, errors, formState } = useForm<LoginInputs>({
    mode: "onChange"
  })

  const [loginMutation, { loading, error }] = useLoginMutation()

  const onSubmit = (formData: LoginInputs) => {
    loginMutation({
      variables: {
        input: { ...formData }
      },
      update(store, { data }) {
        if (data) {
          store.writeQuery({
            query: MeDocument,
            data: { me: { ...data.login } }
          })
        }
      }
    })
      .then(() => {
        handleClose()
      })
      .catch(() => {
        setOpen(true)
      })
  }

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <DialogContent classes={{ root: classes.dialogContentRoot }}>
        <Collapse in={open}>
          <Alert
            severity="error"
            variant="filled"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false)
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            {error?.message}
          </Alert>
        </Collapse>

        <TextField
          autoFocus
          id="identifier"
          name="identifier"
          label="E-Mail or Username"
          type="text"
          variant="outlined"
          error={!!errors.identifier}
          helperText={!!errors.identifier && errors.identifier.message}
          fullWidth
          margin="normal"
          inputRef={register({ required: true })}
        />
        <TextField
          id="password"
          name="password"
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          inputRef={register({ required: true })}
        />
        <Typography color="primary" variant="caption">
          Forgot your password?
        </Typography>
      </DialogContent>
      <DialogActions className={classes.dialogAction}>
        <LoadingButton
          color="primary"
          variant="contained"
          type="submit"
          fullWidth
          disabled={loading || !formState.isValid}
          loading={loading}
        >
          Log In
        </LoadingButton>
      </DialogActions>
    </form>
  )
}

export default LoginForm
