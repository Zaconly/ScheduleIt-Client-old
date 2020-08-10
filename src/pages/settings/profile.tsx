import { Divider, Typography } from "@material-ui/core"
import { GetServerSideProps } from "next"

import { OwnHead as Head } from "../../components/custom"
import { SettingsLayout } from "../../components/layouts"
import { useStyles } from "../../styles/settings"
import apolloQuerySsr from "../../utils/apolloQuerySsr"

const Profile = () => {
  const classes = useStyles()

  return (
    <>
      <Head title="Profile" />
      <Typography variant="h5">Profile</Typography>
      <Divider className={classes.divider} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return apolloQuerySsr(req)
}

Profile.Layout = SettingsLayout

export default Profile
