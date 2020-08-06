import { useRouter } from "next/router"
import { useEffect } from "react"

import { OwnHead as Head } from "../../components/custom"
import { SettingsLayout } from "../../components/layouts"

const Settings = () => {
  const router = useRouter()

  useEffect(() => {
    router.push("/settings/profile")
  })

  return <Head title="Settings" />
}

Settings.Layout = SettingsLayout

export default Settings
