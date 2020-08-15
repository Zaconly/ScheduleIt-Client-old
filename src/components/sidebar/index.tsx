import { Box, Drawer, Typography } from "@material-ui/core"
import DashboardIcon from "@material-ui/icons/Dashboard"

import SidebarItems from "./SidebarItems"
import { useStyles } from "./style"

const Sidebar = () => {
  const classes = useStyles()

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <Box marginX={1} marginY={1}>
        <Box display="flex" alignItems="center">
          <DashboardIcon color="action" className={classes.dashboardIcon} />
          <Typography variant="button" color="textSecondary" style={{ fontSize: 13 }}>
            Personnal Boards
          </Typography>
        </Box>
        <SidebarItems />
      </Box>
    </Drawer>
  )
}

export default Sidebar
