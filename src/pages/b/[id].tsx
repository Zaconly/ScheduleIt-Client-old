import { GetServerSideProps } from "next"
import { useRouter } from "next/router"

import { DataNotFoundError, OwnHead as Head } from "../../components/custom"
import { useBoardQuery } from "../../generated/graphql"
import apolloQuerySsr from "../../utils/apolloQuerySsr"

const Board = () => {
  const router = useRouter()
  const id = router.query.id as string

  const { data, loading, error } = useBoardQuery({ variables: { id } })

  if (!data || !data.board) {
    return <DataNotFoundError type="Board" />
  }

  const board = data.board

  return (
    <>
      <Head title={board.name} />
      <pre>{JSON.stringify(board, null, 2)}</pre>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return apolloQuerySsr(req)
}

export default Board
