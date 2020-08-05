import { Button, ButtonProps, CircularProgress, createStyles, makeStyles } from "@material-ui/core"

interface Props extends ButtonProps {
  loading: boolean
}

const useStyles = makeStyles(() =>
  createStyles({
    wrapper: {
      position: "relative",
      width: "100%"
    },
    buttonProgress: {
      position: "absolute",
      top: "50%",
      left: "50%",
      marginTop: -12,
      marginLeft: -12
    }
  })
)

const LoadingButton = ({ children, loading, ...props }: Props) => {
  const classes = useStyles()

  return (
    <div className={classes.wrapper}>
      <Button disabled={loading} {...props}>
        {!loading ? children : <>&nbsp;</>}
      </Button>
      {loading && <CircularProgress size={24} className={classes.buttonProgress} color="inherit" />}
    </div>
  )
}

export default LoadingButton
