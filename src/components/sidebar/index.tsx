import { Drawer } from "@material-ui/core"

import { useMeState } from "../../utils/hooks"
import SidebarItems from "./SidebarItems"
import { useStyles } from "./style"

const Sidebar = () => {
  const classes = useStyles()
  const { isLoggedIn, boards } = useMeState()

  if (!isLoggedIn) return null

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <div className={classes.drawerContainer}>
        <SidebarItems boards={boards} />
      </div>
    </Drawer>
  )
}

export default Sidebar
