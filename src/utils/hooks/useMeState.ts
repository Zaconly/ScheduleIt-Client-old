import { QueryHookOptions } from "@apollo/client"
import { useCallback } from "react"

import { MeQuery, MeQueryVariables, useLogoutMutation, useMeQuery } from "../../generated/graphql"

export const useMeState = (options?: QueryHookOptions<MeQuery, MeQueryVariables>) => {
  const { data } = useMeQuery({ fetchPolicy: "cache-only", ...options })
  const [logOut, { client }] = useLogoutMutation()

  const logout = useCallback(() => {
    logOut().then(() => window.location.replace("/"))
  }, [logOut])

  const me = {
    isLoggedIn: false,
    isAdmin: false,
    logout,
    client,
    profile: null,
    boards: null
  }

  if (data && data.me) {
    const { boards, ...profile } = data.me

    return {
      ...me,
      isLoggedIn: true,
      isAdmin: data.me.role === "ADMIN",
      profile,
      boards
    }
  }

  return me
}
