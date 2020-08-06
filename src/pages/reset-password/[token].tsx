import Alert from "@material-ui/lab/Alert"
import { useRouter } from "next/router"

import { ResetPasswordForm } from "../../components/form"
import Layout from "../../components/layout"

const ResetPassword = () => {
  const router = useRouter()
  const token = router.query.token as string | undefined

  return (
    <Layout title="Reset Password" mode="clean">
      {token ? (
        <ResetPasswordForm token={token} />
      ) : (
        <Alert severity="error">
          An invalid token was provided in the URL, please use the link send by email to reset your
          password.
        </Alert>
      )}
    </Layout>
  )
}

export default ResetPassword
