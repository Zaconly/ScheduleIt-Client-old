import { DialogActions, DialogContent, TextField } from "@material-ui/core"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"

import { useForgotPasswordMutation } from "../../generated/graphql"
import { LoadingButton, OwnAlert } from "../custom"
import { useStyles } from "./style"

interface ForgotPasswordInputs {
  email: string
}

const ForgotPasswordForm = () => {
  const classes = useStyles()
  const [init, setInit] = useState(false)
  const [success, setSuccess] = useState(false)
  const [errorMsg, setErrorMsg] = useState(false)
  const { register, handleSubmit, errors, formState } = useForm<ForgotPasswordInputs>({
    mode: "onChange"
  })

  useEffect(() => {
    setInit(true)
  }, [init])

  const [forgotPasswordMutation, { loading, error }] = useForgotPasswordMutation()

  const onSubmit = ({ email }: ForgotPasswordInputs) => {
    forgotPasswordMutation({ variables: { email } })
      .then(() => {
        setSuccess(true)
      })
      .catch(() => {
        setErrorMsg(true)
      })
  }

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <DialogContent classes={{ root: classes.dialogContentRoot }}>
        <OwnAlert open={success} severity="success">
          An Email containing a link to reset your password has been sent.
        </OwnAlert>
        <OwnAlert open={errorMsg} severity="error" closeButton>
          {error?.message}
        </OwnAlert>

        <TextField
          autoFocus
          id="email"
          name="email"
          label="E-Mail"
          type="email"
          variant="outlined"
          error={!!errors.email && !!errors.email.message}
          helperText={
            (!!errors.email && errors.email.message) ||
            "We will send you an email containing a link to reset your password."
          }
          fullWidth
          margin="normal"
          inputRef={register({
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "*Email address must be valid."
            }
          })}
        />
      </DialogContent>
      <DialogActions className={classes.dialogAction}>
        <LoadingButton
          color="primary"
          variant="contained"
          type="submit"
          fullWidth
          disabled={!init || success || loading || !formState.isValid}
          loading={loading}
        >
          Continue
        </LoadingButton>
      </DialogActions>
    </form>
  )
}

export default ForgotPasswordForm
