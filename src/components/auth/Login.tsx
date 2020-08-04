import { ButtonProps } from "@material-ui/core"

import { MeDocument, useLoginMutation } from "../../generated/graphql"
import { FlatButton } from "../custom"

const Login = (props: ButtonProps) => {
  const [login] = useLoginMutation({
    variables: {
      input: {
        identifier: "thomas.vaucois@viacesi.fr",
        password: "root"
      }
    },
    update(store, { data }) {
      if (data) {
        store.writeQuery({
          query: MeDocument,
          data: { me: { ...data.login } }
        })
      }
    }
  })

  return (
    <FlatButton variant="contained" {...props} onClick={() => login()}>
      Log In
    </FlatButton>
  )
}

export default Login
