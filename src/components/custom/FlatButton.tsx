import { Button, withStyles } from "@material-ui/core"

const FlatButton = withStyles({
  root: {
    boxShadow: "initial",
    "&:hover, &:focus": {
      boxShadow: "initial"
    }
  },
  label: {
    textTransform: "none"
  }
})(Button)

export default FlatButton
