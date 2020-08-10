import { createStyles, makeStyles, Theme } from "@material-ui/core"

const drawerWidth = 240

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth,
      paddingTop: 50
    },
    drawerContainer: {
      overflow: "auto"
    },
    list: {
      margin: `0 ${theme.spacing(1)}px`
    },
    listItems: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
      borderRadius: theme.shape.borderRadius
    },
    text: {
      fontWeight: 500,
      fontSize: 14
    }
  })
)
