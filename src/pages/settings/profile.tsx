import { Divider, Typography } from "@material-ui/core"

import { OwnHead as Head } from "../../components/custom"
import { SettingsLayout } from "../../components/layouts"
import { useStyles } from "../../styles/settings"

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

Profile.Layout = SettingsLayout

export default Profile
