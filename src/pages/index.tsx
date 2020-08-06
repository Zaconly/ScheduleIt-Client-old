import { GetServerSideProps } from "next"

import { OwnHead as Head } from "../components/custom"
import { MeDocument, useMeQuery } from "../generated/graphql"
import apolloQuerySsr from "../utils/apolloQuerySsr"

const Index = () => {
  const { data } = useMeQuery()

  return (
    <>
      <Head />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return apolloQuerySsr(MeDocument, req)
}

export default Index
