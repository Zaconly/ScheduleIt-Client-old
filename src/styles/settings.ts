import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    divider: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3)
    }
  })
)
