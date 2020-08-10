import clsx from "clsx"
import { ReactNode } from "react"
import Scrollbar from "react-scrollbars-custom"

import Header from "../../header"
import Sidebar from "../../sidebar"
import { useStyles } from "./style"

interface Props {
  children: ReactNode
  mode: "classic" | "home" | "clean"
}

const Layout = ({ children, mode }: Props) => {
  const classes = useStyles()

  return (
    <>
      <Header mode={mode} />
      <div className={clsx(classes.contentWrapper, classes.fullHeight)}>
        <Sidebar />
        <main className={clsx(classes.content, classes.fullHeight)}>
          <Scrollbar className={classes.fullHeight}>{children}</Scrollbar>
        </main>
      </div>
    </>
  )
}

export default Layout
