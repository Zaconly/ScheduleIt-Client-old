import {
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  MenuItem,
  Switch,
  Typography,
  useMediaQuery
} from "@material-ui/core"
import { Brightness6 as ThemeIcon, ExitToApp as LogoutIcon } from "@material-ui/icons"
import { Dispatch, SetStateAction } from "react"

import { darkThemeVar } from "../../apollo"
import { MeDocument, useHasDarkThemeQuery, useLogoutMutation } from "../../generated/graphql"
import { useIsLoggedIn } from "../../utils/customHooks"
import { useStyles } from "./style"

interface Props {
  setOpen: Dispatch<SetStateAction<boolean>>
}

const HeaderMenuItems = ({ setOpen }: Props) => {
  const classes = useStyles()
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")
  const { data } = useHasDarkThemeQuery()
  const isLoggedIn = useIsLoggedIn()
  const [logout, { client }] = useLogoutMutation()

  const handleLogout = () => {
    logout().then(() => {
      client.writeQuery({
        query: MeDocument,
        data: { me: null }
      })
    })
    handleClose()
  }

  const handleToggleDarkTheme = () => {
    localStorage.setItem("darkTheme", JSON.stringify(!data?.hasDarkTheme))
    darkThemeVar(!data?.hasDarkTheme)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <ListItem>
        <ListItemIcon classes={{ root: classes.iconWidth }}>
          <ThemeIcon fontSize="small" />
        </ListItemIcon>
        <Typography id="switch-label-dark-theme" variant="inherit" className={classes.menuText}>
          Dark Theme
        </Typography>
        <ListItemSecondaryAction>
          <Switch
            color="primary"
            edge="end"
            onChange={handleToggleDarkTheme}
            checked={data?.hasDarkTheme !== null ? data?.hasDarkTheme : prefersDarkMode}
            inputProps={{ "aria-labelledby": "switch-label-dark-theme" }}
          />
        </ListItemSecondaryAction>
      </ListItem>
      {isLoggedIn && (
        <MenuItem onClick={handleLogout}>
          <ListItemIcon classes={{ root: classes.iconWidth }}>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit" className={classes.menuText}>
            Log Out
          </Typography>
        </MenuItem>
      )}
    </>
  )
}

export default HeaderMenuItems
