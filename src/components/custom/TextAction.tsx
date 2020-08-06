import { createStyles, Theme, Typography, withStyles } from "@material-ui/core"

export const TextAction = withStyles((theme: Theme) =>
  createStyles({
    root: {
      cursor: "pointer",
      transition: "color 250ms",
      "&:hover": {
        color: theme.palette.primary[theme.palette.type]
      }
    }
  })
)(Typography)

export default TextAction
