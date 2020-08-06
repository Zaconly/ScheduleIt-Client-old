import { Container, Typography } from "@material-ui/core"
import Alert from "@material-ui/lab/Alert"
import { useRouter } from "next/router"

import { OwnHead as Head } from "../../components/custom"
import { ResetPasswordForm } from "../../components/form"

const ResetPassword = () => {
  const router = useRouter()
  const token = router.query.token as string | undefined

  return (
    <>
      <Head title="Reset Password" />
      <Container maxWidth="sm" style={{ marginTop: 100 }}>
        <Typography variant="h4">Reset your password</Typography>
        {token ? (
          <ResetPasswordForm token={token} />
        ) : (
          <Alert severity="error">
            An invalid token was provided in the URL, please use the link send by email to reset
            your password.
          </Alert>
        )}
      </Container>
    </>
  )
}

ResetPassword.mainLayoutMode = "clean"

export default ResetPassword
