import { Collapse, IconButton } from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close"
import Alert, { AlertProps } from "@material-ui/lab/Alert"
import { ReactNode, useEffect, useState } from "react"

interface Props extends AlertProps {
  children: ReactNode
  open: boolean
  closeButton?: boolean
}

const OwnAlert = ({ children, open, closeButton = false, ...rest }: Props) => {
  const [localOpen, setLocalOpen] = useState(false)

  useEffect(() => {
    setLocalOpen(open)
  }, [open])

  return (
    <Collapse in={localOpen}>
      <Alert
        variant="filled"
        action={
          closeButton && (
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setLocalOpen(localOpen)
              }}
            >
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
