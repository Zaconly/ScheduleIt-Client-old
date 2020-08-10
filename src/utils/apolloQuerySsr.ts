import { DocumentNode } from "graphql"
import { IncomingMessage } from "http"

import { MeDocument } from "../generated/graphql"
import { initializeApollo } from "../lib/apollo"

/**
 * Fetch Server-side user data before building and sending the page.
 *
 * To use only with `getServerSideProps`
 *
 * @param req Server side request
 * @param queries Array of apollo queries to fetch
 *
 * ⚠ It fetch `Me` in addition to queries sent to this function
 */
const apolloQuerySsr = async (req: IncomingMessage, queries?: DocumentNode[]) => {
  const apolloClient = initializeApollo(null, req.headers.cookie)

  try {
    queries
      ? await Promise.all(
          [MeDocument, ...queries].map(async query => {
            await apolloClient.query({ query })
          })
        )
      : await apolloClient.query({ query: MeDocument })
  } catch (e) {
    console.error(e)
  }

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      revalidate: 1
    }
  }
}

export default apolloQuerySsr
