import { Dialog } from "@material-ui/core"
import clsx from "clsx"
import { ReactNode } from "react"
import Scrollbar from "react-scrollbars-custom"

import { useMeState, useModal } from "../../../utils/hooks"
import { OwnHead as Head } from "../../custom"
import Header from "../../header"
import Sidebar from "../../sidebar"
import { useStyles } from "./style"

interface Props {
  children: ReactNode
  mode: "classic" | "home" | "clean"
}

const Layout = ({ children, mode }: Props) => {
  const classes = useStyles()
  const { open, onClose } = useModal({ id: "StoreModal", route: "/store" })
  const { isLoggedIn } = useMeState()

  return (
    <>
      {open && <Head title="Store" />}
      <Header mode={mode} />
      <div className={clsx(classes.contentWrapper, classes.fullHeight)}>
        {isLoggedIn && <Sidebar />}
        <main className={clsx(classes.content, classes.fullHeight)}>
          <Scrollbar className={classes.fullHeight}>{children}</Scrollbar>
        </main>
        <Dialog open={open} fullWidth maxWidth="md" onClose={() => onClose()}>
          yolo
        </Dialog>
      </div>
    </>
  )
}

export default Layout
