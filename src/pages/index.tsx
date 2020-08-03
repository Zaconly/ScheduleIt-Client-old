import { useMutation, useQuery } from "@apollo/client"
import { Button } from "@material-ui/core"
import Layout from "components/layout"
import { LOGIN } from "graphql/me/mutation"
import { ME } from "graphql/me/query"
import { initializeApollo } from "lib/apollo"
import { GetServerSideProps } from "next"

const Index = () => {
  const [login, { data }] = useMutation(LOGIN, {
    variables: {
      input: {
        identifier: "thomas.vaucois@viacesi.fr",
        password: "root"
      }
    }
  })

  const { data: meData } = useQuery(ME)

  return (
    <Layout home>
      <Button color="primary" variant="contained" onClick={() => login()}>
        LOGIN
      </Button>
      <pre>{JSON.stringify(data, null, 4)}</pre>
      <pre>{JSON.stringify(meData, null, 4)}</pre>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const apolloClient = initializeApollo(null, req.headers.cookie)

  try {
    await apolloClient.query({
      query: ME
    })
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

export default Index
