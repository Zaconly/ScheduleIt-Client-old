import { Dialog, DialogTitle } from "@material-ui/core"
import { ChangeEvent } from "react"

import { useModal } from "../../utils/hooks"
import { OwnTab, OwnTabs } from "../custom"
import { LoginForm, RegisterForm } from "../form"
import { useStyles } from "./style"

const AuthModal = () => {
  const classes = useStyles()
  const { onClose, setOptions, currentTab, id, isOpen } = useModal({ id: "AuthModal" })
  const isRegisterModal = id === "AuthModal" && currentTab === "register"

  const handleClose = () => {
    onClose()
  }

  const handleChange = (_event: ChangeEvent<unknown>, newValue: string) => {
    setOptions({ currentTab: newValue })
  }

  return (
    <Dialog
      open={isOpen || false}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      fullWidth
      maxWidth="xs"
    >
      <div className={classes.wrapper}>
        <DialogTitle id="form-dialog-title" className={classes.title}>
          {!isRegisterModal ? "Log in to ScheduleIt" : "Join ScheduleIt today"}
        </DialogTitle>
        <OwnTabs value={currentTab || "login"} onChange={handleChange}>
          <OwnTab label="Log In" value="login" />
          <OwnTab label="Sign Up" value="register" />
        </OwnTabs>
        {!isRegisterModal ? (
          <LoginForm handleClose={handleClose} />
        ) : (
          <RegisterForm handleClose={handleClose} />
        )}
      </div>
    </Dialog>
  )
}

export default AuthModal
