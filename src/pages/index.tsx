import { Button } from "@material-ui/core"
import { GetServerSideProps } from "next"

import Layout from "../components/layout"
import { MeDocument, useLoginMutation, useMeQuery } from "../generated/graphql"
import apolloQuerySsr from "../utils/apolloQuerySsr"

const Index = () => {
  const [login, { data }] = useLoginMutation({
    variables: {
      input: {
        identifier: "thomas.vaucois@viacesi.fr",
        password: "root"
      }
    }
  })

  const { data: meData } = useMeQuery()

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
  return apolloQuerySsr(MeDocument, req)
}

export default Index
