import { AppBar, Badge, IconButton, Toolbar, Typography } from "@material-ui/core"
import {
  AccountCircle,
  Mail as MailIcon,
  Notifications as NotificationsIcon
} from "@material-ui/icons"
import Head from "next/head"
import { ReactNode } from "react"

import { useStyles } from "./style"

interface Props {
  children: ReactNode
  title?: string
  home?: boolean
}

const Layout = ({ children, title, home = false }: Props) => {
  const classes = useStyles()

  return (
    <>
      <Head>
        <title>{title ? `${title} - ScheduleIt` : "ScheduleIt"}</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            ScheduleIt
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {children}
    </>
  )
}

export default Layout
