import { QueryHookOptions } from "@apollo/client"
import { useCallback } from "react"

import {
  MeDocument,
  MeQuery,
  MeQueryVariables,
  useLogoutMutation,
  useMeQuery
} from "../../generated/graphql"

export const useMeState = (options?: QueryHookOptions<MeQuery, MeQueryVariables>) => {
  const { data } = useMeQuery({ fetchPolicy: "cache-only", ...options })
  const [logOut, { client }] = useLogoutMutation()

  const logout = useCallback(() => {
    logOut().then(() => {
      client.writeQuery({
        query: MeDocument,
        data: { me: null }
      })
    })
  }, [client])

  const me = {
    isLoggedIn: false,
    isAdmin: false,
    logout,
    profile: null,
    boards: null
  }

  if (data && data.me) {
    const { boards, ...profile } = data.me

    return {
      ...me,
      isLoggedIn: true,
      isAdmin: data && data.me && data.me.role === "ADMIN",
      profile,
      boards
    }
  }

  return me
}
