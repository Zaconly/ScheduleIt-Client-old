import { Container, Paper, Tab, Tabs } from "@material-ui/core"
import { NextRouter, withRouter } from "next/router"
import { ReactNode } from "react"

import { useStyles } from "./style"

interface Props {
  children?: ReactNode
  router: NextRouter
}

type TabType = "/settings/profile" | "/settings/change-password"

const SettingsLayout = ({ children, router }: Props) => {
  const classes = useStyles()
  const value = router.pathname === "/settings" ? "/settings/profile" : router.pathname

  const handleChange = (event: React.ChangeEvent<unknown>, newValue: TabType) => {
    router.push(newValue)
  }

  return (
    <Container maxWidth="md" className={classes.settingsWrapper}>
      <Paper className={classes.tabsWrapper}>
        <Tabs orientation="vertical" value={value} onChange={handleChange} indicatorColor="primary">
          <Tab
            label="Profile"
            value="/settings/profile"
            className={classes.tab}
            classes={{ wrapper: classes.tabWrapper }}
          />
          <Tab
            label="Change Password"
            value="/settings/change-password"
            className={classes.tab}
            classes={{ wrapper: classes.tabWrapper }}
          />
        </Tabs>
      </Paper>
      <Paper className={classes.contentWrapper}>{children}</Paper>
    </Container>
  )
}

export default withRouter(SettingsLayout)
