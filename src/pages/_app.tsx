import "../styles/global.css"

import { ApolloProvider } from "@apollo/client"
import { AppProps } from "next/app"
import Head from "next/head"

import { AppComponent } from "../components/custom"
import { useApollo } from "../lib/apollo"

const App = (props: AppProps) => {
  const client = useApollo(props.pageProps.initialApolloState)

  return (
    <>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ApolloProvider client={client}>
        <AppComponent {...props} />
      </ApolloProvider>
    </>
  )
}

export default App
