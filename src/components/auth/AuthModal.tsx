import { Dialog, DialogTitle } from "@material-ui/core"
import { ChangeEvent } from "react"

import { modalContextVar } from "../../apollo"
import { useModalContextQuery } from "../../generated/graphql"
import { OwnTab, OwnTabs } from "../custom"
import { LoginForm, RegisterForm } from "../form"
import { useStyles } from "./style"

const AuthModal = () => {
  const classes = useStyles()
  const { data } = useModalContextQuery()
  const modalState = data?.modalContext?.id === "AuthModal" ? data?.modalContext : null
  const isLogin = modalState?.currentTab !== "register"

  const handleClose = () => {
    modalContextVar(
      modalState
        ? {
            ...modalState,
            isOpen: false
          }
        : null
    )
  }

  const handleChange = (_event: ChangeEvent<unknown>, newValue: string) => {
    modalContextVar(
      modalState
        ? {
            ...modalState,
            currentTab: newValue
          }
        : null
    )
  }

  return (
    <Dialog
      open={modalState ? modalState.isOpen : false}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      fullWidth
      maxWidth="xs"
    >
      <div className={classes.wrapper}>
        <DialogTitle id="form-dialog-title" className={classes.title}>
          {isLogin ? "Log in to ScheduleIt" : "Join ScheduleIt today"}
        </DialogTitle>
        <OwnTabs value={modalState?.currentTab || "login"} onChange={handleChange}>
          <OwnTab label="Log In" value="login" />
          <OwnTab label="Sign Up" value="register" />
        </OwnTabs>
        {isLogin ? (
          <LoginForm handleClose={handleClose} />
        ) : (
          <RegisterForm handleClose={handleClose} />
        )}
      </div>
    </Dialog>
  )
}

export default AuthModal
