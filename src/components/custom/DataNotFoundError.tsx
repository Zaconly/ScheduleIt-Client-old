import { Typography } from "@material-ui/core"

interface Props {
  type: string
}

const DataNotFoundError = ({ type }: Props) => {
  return (
    <Typography variant="h5">
      This <strong>{type}</strong> has no data
    </Typography>
  )
}

export default DataNotFoundError
