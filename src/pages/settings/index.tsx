import { GetServerSideProps } from "next"
import { useRouter } from "next/router"
import { useEffect } from "react"

import { OwnHead as Head } from "../../components/custom"
import { SettingsLayout } from "../../components/layouts"
import apolloQuerySsr from "../../utils/apolloQuerySsr"

const Settings = () => {
  const router = useRouter()

  useEffect(() => {
    router.push("/settings/profile")
  })

  return <Head title="Settings" />
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return apolloQuerySsr(req)
}

Settings.Layout = SettingsLayout

export default Settings
