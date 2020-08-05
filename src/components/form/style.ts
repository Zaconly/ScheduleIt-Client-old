import { createStyles, makeStyles } from "@material-ui/core/styles"

export const useStyles = makeStyles(() =>
  createStyles({
    dialogAction: {
      paddingLeft: 0,
      paddingRight: 0
    },
    dialogContentRoot: {
      padding: 0,
      paddingBottom: 20
    }
  })
)
