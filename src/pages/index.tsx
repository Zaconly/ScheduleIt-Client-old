import { GetServerSideProps } from "next"

import Layout from "../components/layout"
import { MeDocument, useMeQuery } from "../generated/graphql"
import apolloQuerySsr from "../utils/apolloQuerySsr"

const Index = () => {
  const { data } = useMeQuery()

  return (
    <Layout home>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return apolloQuerySsr(MeDocument, req)
}

export default Index
