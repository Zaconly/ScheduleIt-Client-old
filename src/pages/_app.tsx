import { ApolloProvider } from "@apollo/client"
import { CssBaseline, ThemeProvider } from "@material-ui/core"
import { AppProps } from "next/app"
import Head from "next/head"
import { useEffect } from "react"

import { useApollo } from "../lib/apollo"
import theme from "../lib/theme"

const App = ({ Component, pageProps }: AppProps) => {
  const client = useApollo(pageProps.initialApolloState)

  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side")
    jssStyles?.parentElement?.removeChild(jssStyles)
    const nextData = document.querySelector("#__NEXT_DATA__")
    nextData?.parentElement?.removeChild(nextData)
  }, [])

  return (
    <>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    </>
  )
}

export default App
