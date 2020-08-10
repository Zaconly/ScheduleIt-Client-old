import { AppBar, Badge, Button, IconButton, Toolbar, Typography } from "@material-ui/core"
import {
  Notifications as NotificationsIcon,
  PersonOutline as AccountIcon
} from "@material-ui/icons"
import Link from "next/link"
import { useRef, useState } from "react"

import { modalContextVar } from "../../apollo"
import { useMeState } from "../../utils/hooks"
import { AuthModal } from "../auth"
import { OwnMenu } from "../custom"
import HeaderMenuItems from "./HeaderMenuItems"
import { useStyles } from "./style"

interface Props {
  mode: "classic" | "home" | "clean"
}

const Header = ({ mode }: Props) => {
  const classes = useStyles()
  const [openMenu, setOpenMenu] = useState(false)
  const anchorRef = useRef<HTMLButtonElement>(null)
  const { isLoggedIn } = useMeState()

  const handleToggle = () => {
    setOpenMenu(prevOpen => !prevOpen)
  }

  const handleOpenAuthModal = (type: "login" | "register") => {
    modalContextVar({
      id: "AuthModal",
      isOpen: true,
      currentTab: type
    })
  }

  return (
    <AppBar position="relative" color="inherit" elevation={0} className={classes.appBar}>
      <Toolbar>
        <Link href="/" passHref>
          <Typography component="a" className={classes.title} variant="h6" noWrap>
            ScheduleIt
          </Typography>
        </Link>
        {mode !== "clean" && (
          <>
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
                    <Button
                      variant="contained"
                      className={classes.navButton}
                      disableElevation
                      onClick={() => handleOpenAuthModal("login")}
                    >
                      Log In
                    </Button>
                    <Button
                      variant="contained"
                      className={classes.navButton}
                      color="primary"
                      disableElevation
                      onClick={() => handleOpenAuthModal("register")}
                    >
                      Sign Up
                    </Button>
                    <AuthModal />
                  </>
                )}
                <IconButton
                  ref={anchorRef}
                  edge="end"
                  aria-controls={openMenu ? "menu-list-grow" : undefined}
                  aria-haspopup="true"
                  color="secondary"
                  className={isLoggedIn ? classes.avatarAuth : classes.avatarAnon}
                  onClick={handleToggle}
                >
                  <AccountIcon />
                </IconButton>
                <OwnMenu
                  open={openMenu}
                  setOpen={setOpenMenu}
                  anchorRef={anchorRef}
                  style={{ minWidth: 200 }}
                >
                  <HeaderMenuItems setOpen={setOpenMenu} />
                </OwnMenu>
              </div>
            </div>
          </>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Header
