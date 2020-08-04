import { AppBar, Badge, IconButton, Toolbar, Typography } from "@material-ui/core"
import { Notifications as NotificationsIcon, Portrait as PortraitIcon } from "@material-ui/icons"
import Head from "next/head"
import { ReactNode, useRef, useState } from "react"

import { useIsLoggedIn } from "../../utils/customHooks"
import { Login } from "../auth"
import { FlatButton, OwnMenu } from "../custom"
import HeaderMenuItems from "./HeaderMenuItems"
import { useStyles } from "./style"

interface Props {
  children: ReactNode
  title?: string
  home?: boolean
}

const Layout = ({ children, title, home = false }: Props) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const anchorRef = useRef<HTMLButtonElement>(null)
  const isLoggedIn = useIsLoggedIn()

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen)
  }

  return (
    <>
      <Head>
        <title>{title ? `${title} - ScheduleIt` : "ScheduleIt"}</title>
      </Head>
      <AppBar position="static" color="inherit" elevation={0}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            ScheduleIt
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <div className={classes.rightSection}>
              {isLoggedIn ? (
                <IconButton
                  aria-label="show 17 new notifications"
                  color="inherit"
                  className={classes.iconPadding}
                >
                  <Badge badgeContent={17} color="primary">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
              ) : (
                <>
                  <Login className={classes.navButton} />
                  <FlatButton variant="contained" className={classes.navButton} color="primary">
                    Sign Up
                  </FlatButton>
                </>
              )}
              <IconButton
                ref={anchorRef}
                edge="end"
                aria-controls={open ? "menu-list-grow" : undefined}
                aria-haspopup="true"
                color="inherit"
                className={classes.iconPadding}
                onClick={handleToggle}
              >
                <PortraitIcon />
              </IconButton>
              <OwnMenu
                open={open}
                setOpen={setOpen}
                anchorRef={anchorRef}
                style={{ minWidth: 200 }}
              >
                <HeaderMenuItems setOpen={setOpen} />
              </OwnMenu>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      {children}
    </>
  )
}

export default Layout
