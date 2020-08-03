import { gql } from "@apollo/client"

export const ME = gql`
  query Me {
    me {
      id
      username
      email
      role
      boards {
        id
        name
        tasks {
          id
          name
          tags {
            id
            name
          }
        }
      }
      isActive
      createdAt
      updatedAt
    }
  }
`
