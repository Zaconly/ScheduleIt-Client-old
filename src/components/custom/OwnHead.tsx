import Head from "next/head"
import { ReactNode } from "react"

interface Props {
  children?: ReactNode
  title?: string
}

const OwnHead = ({ children, title }: Props) => {
  return (
    <Head>
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      <title>{title ? `${title} - ScheduleIt` : "ScheduleIt"}</title>
      {children}
    </Head>
  )
}

export default OwnHead
