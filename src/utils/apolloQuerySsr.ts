import { DocumentNode } from "graphql"
import { IncomingMessage } from "http"

import { initializeApollo } from "../lib/apollo"

const apolloQuerySsr = async (queries: DocumentNode | DocumentNode[], req: IncomingMessage) => {
  const apolloClient = initializeApollo(null, req.headers.cookie)

  try {
    if (Array.isArray(queries)) {
      queries.map(async query => {
        await apolloClient.query({ query })
      })
    } else {
      await apolloClient.query({ query: queries })
    }
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
