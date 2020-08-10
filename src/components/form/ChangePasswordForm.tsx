import { Box } from "@material-ui/core"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"

import { useChangePasswordMutation } from "../../generated/graphql"
import { LoadingButton, OwnAlert, OwnTextField } from "../custom"

interface ChangePasswordInputs {
  oldPassword: string
  newPassword: string
  confirmNewPassword: string
}

const ChangePasswordForm = () => {
  const { register, handleSubmit, getValues, errors, formState } = useForm<ChangePasswordInputs>({
    mode: "onChange"
  })
  const [init, setInit] = useState(false)
  const [success, setSuccess] = useState(false)
  const [errorMsg, setErrorMsg] = useState(false)

  useEffect(() => {
    setInit(true)
  }, [init])

  const [changePasswordMutation, { loading, error }] = useChangePasswordMutation()

  const onSubmit = ({ oldPassword, newPassword }: ChangePasswordInputs) => {
    changePasswordMutation({
      variables: {
        oldPassword,
        newPassword
      }
    })
      .then(() => {
        setSuccess(true)
        setErrorMsg(false)
      })
      .catch(() => {
        setSuccess(false)
        setErrorMsg(true)
      })
  }

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <OwnAlert open={success} severity="success" style={{ margin: "10px 0" }}>
        Your password has been successfully changed.
      </OwnAlert>
      <OwnAlert open={errorMsg} severity="error" style={{ margin: "10px 0" }}>
        {error?.message}
      </OwnAlert>

      <OwnTextField
        name="oldPassword"
        label="Current Password"
        type="password"
        error={!!errors.oldPassword && !!errors.oldPassword.message}
        helperText={!!errors.oldPassword && errors.oldPassword.message}
        inputRef={register({ required: true })}
      />
      <OwnTextField
        name="newPassword"
        label="Password"
        type="password"
        error={!!errors.newPassword && !!errors.newPassword.message}
        helperText={!!errors.newPassword && errors.newPassword.message}
        inputRef={register({
          required: true,
          minLength: {
            value: 4,
            message: "*New Password must be at least 4 characters long."
          },
          maxLength: {
            value: 60,
            message: "*New Password must be less than 60 characters long."
          }
        })}
      />
      <OwnTextField
        name="confirmNewPassword"
        label="Confirm Password"
        type="password"
        error={!!errors.confirmNewPassword && !!errors.confirmNewPassword.message}
        helperText={!!errors.confirmNewPassword && errors.confirmNewPassword.message}
        inputRef={register({
          required: true,
          validate: {
            matchesPreviousPassword: (value: string) => {
              const { newPassword } = getValues()
              return newPassword === value || "*Passwords must be identical."
            }
          }
        })}
      />
      <Box marginTop={2}>
        <LoadingButton
          color="primary"
          variant="contained"
          type="submit"
          fullWidth
          disabled={!init || success || loading || !formState.isValid}
          loading={loading}
        >
          Confirm
        </LoadingButton>
      </Box>
    </form>
  )
}

export default ChangePasswordForm
