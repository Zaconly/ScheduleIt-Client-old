import { ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject } from "@apollo/client"
import { useMemo } from "react"

import { darkThemeVar } from "../apollo"

let apolloClient: ApolloClient<NormalizedCacheObject | null>

function createApolloClient(cookie = "") {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_GRAPHQL_API,
      credentials: "include",
      headers: {
        cookie
      }
    }),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            hasDarkTheme: {
              read() {
                return darkThemeVar()
              }
            }
          }
        }
      }
    })
  })
}

export function initializeApollo(
  initialState: NormalizedCacheObject | null = null,
  cookie?: string
) {
  const _apolloClient = apolloClient ?? createApolloClient(cookie)

  if (initialState) {
    _apolloClient.cache.restore(initialState)
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export function useApollo(initialState: NormalizedCacheObject | null) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}
