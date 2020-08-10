import { Collapse, IconButton } from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close"
import Alert, { AlertProps } from "@material-ui/lab/Alert"
import { ReactNode } from "react"

interface OwnAlertProps extends AlertProps {
  children: ReactNode
  open: boolean
  onClose?: () => void
}

const OwnAlert = ({ children, open, onClose, ...rest }: OwnAlertProps) => {
  return (
    <Collapse in={open}>
      <Alert
        variant="filled"
        action={
          onClose && (
            <IconButton aria-label="close" color="inherit" size="small" onClick={onClose}>
              <CloseIcon fontSize="inherit" />
            </IconButton>
          )
        }
        {...rest}
      >
        {children}
      </Alert>
    </Collapse>
  )
}

export default OwnAlert
