import { AppBar, Badge, Button, IconButton, Toolbar, Tooltip, Typography } from "@material-ui/core"
import {
  Notifications as NotificationsIcon,
  PersonOutline as AccountIcon,
  Store as StoreIcon
} from "@material-ui/icons"
import clsx from "clsx"
import Link from "next/link"
import { useRef, useState } from "react"

import { useMeState, useModal } from "../../utils/hooks"
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
  const { onOpen } = useModal({ id: "AuthModal" })
  const { isLoggedIn } = useMeState()

  const handleToggle = () => {
    setOpenMenu(prevOpen => !prevOpen)
  }

  const handleOpenAuthModal = (type: "login" | "register") => {
    onOpen({ currentTab: type })
  }

  const handleNavigation = () => {
    onOpen({ id: "StoreModal", route: "/store" })
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
                  <>
                    <IconButton
                      aria-label="show 17 new notifications"
                      className={classes.iconPadding}
                    >
                      <Badge badgeContent={17} color="primary">
                        <NotificationsIcon color="action" />
                      </Badge>
                    </IconButton>
                    <Tooltip title="Store" enterDelay={500} leaveDelay={200}>
                      <IconButton
                        aria-label="open store"
                        component="a"
                        className={classes.iconPadding}
                        onClick={handleNavigation}
                      >
                        <StoreIcon color="action" />
                      </IconButton>
                    </Tooltip>
                  </>
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
                  className={clsx(
                    classes.avatarSize,
                    isLoggedIn ? classes.avatarAuth : classes.avatarAnon
                  )}
                  onClick={handleToggle}
                >
                  <AccountIcon className={classes.avatarSize} />
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
