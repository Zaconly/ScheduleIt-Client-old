import { useMeQuery } from "../generated/graphql"

export const useIsLoggedIn = () => {
  const { data } = useMeQuery({ fetchPolicy: "cache-only" })

  return !!(data && data.me)
}

export const useIsAdmin = () => {
  const { data } = useMeQuery({ fetchPolicy: "cache-only" })

  return data && data.me && data.me.role === "ADMIN"
}
