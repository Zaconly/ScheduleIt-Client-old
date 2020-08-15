import { createStyles, fade, makeStyles, Theme } from "@material-ui/core"

const drawerWidth = 240

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    dashboardIcon: {
      fontSize: 18,
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(2)
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth,
      paddingTop: 50
    },
    list: {
      margin: `0 ${theme.spacing(1)}px`
    },
    listItems: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
      borderRadius: theme.shape.borderRadius
    },
    activeItem: {
      backgroundColor: fade(theme.palette.primary.main, 0.1),
      color: theme.palette.primary.main,
      "&:hover": {
        backgroundColor: fade(theme.palette.primary.main, 0.2)
      }
    },
    text: {
      fontWeight: 500,
      fontSize: 14
    }
  })
)
