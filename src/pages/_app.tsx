import "../styles/global.css"

import { ApolloProvider } from "@apollo/client"
import { AppProps } from "next/app"

import { AppComponent } from "../components/custom"
import { useApollo } from "../lib/apollo"

const App = (props: AppProps) => {
  const client = useApollo(props.pageProps.initialApolloState)

  return (
    <ApolloProvider client={client}>
      <AppComponent {...props} />
    </ApolloProvider>
  )
}

export default App
