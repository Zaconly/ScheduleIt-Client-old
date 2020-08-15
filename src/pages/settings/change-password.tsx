import { Divider, Typography } from "@material-ui/core"
import { GetServerSideProps } from "next"

import { OwnHead as Head } from "../../components/custom"
import ChangePasswordForm from "../../components/form/ChangePasswordForm"
import { SettingsLayout } from "../../components/layouts"
import { useStyles } from "../../styles/settings"
import apolloQuerySsr from "../../utils/apolloQuerySsr"

const ChangePassword = () => {
  const classes = useStyles()

  return (
    <>
      <Head title="Change Password" />
      <Typography variant="h5">Change Password</Typography>
      <Divider className={classes.divider} />
      <ChangePasswordForm />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return apolloQuerySsr(req)
}

ChangePassword.Layout = SettingsLayout

export default ChangePassword
