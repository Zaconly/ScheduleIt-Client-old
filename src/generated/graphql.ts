import * as ApolloReactCommon from "@apollo/client"
import * as ApolloReactHooks from "@apollo/client"
import gql from "graphql-tag"
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: Date
  /** A time string at UTC, such as 10:15:30Z, compliant with the `full-time` format outlined in section 5.6 of the RFC 3339profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Time: Date
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: Date
  Void: void
}

export type Query = {
  __typename?: "Query"
  _?: Maybe<Scalars["Boolean"]>
  board?: Maybe<Board>
  boards?: Maybe<Array<Board>>
  boardsMe?: Maybe<Array<Board>>
  boardsUser?: Maybe<Array<Board>>
  card?: Maybe<Card>
  cards?: Maybe<Array<Card>>
  cardsList?: Maybe<Array<Card>>
  cardsTag?: Maybe<Array<Card>>
  checkList?: Maybe<CheckList>
  checkLists?: Maybe<Array<CheckList>>
  checkListsCard?: Maybe<Array<CheckList>>
  hasDarkTheme: Scalars["Boolean"]
  list?: Maybe<List>
  lists?: Maybe<Array<List>>
  listsBoard?: Maybe<Array<List>>
  me: User
  modalContext?: Maybe<ModalContext>
  tag?: Maybe<Tag>
  tags?: Maybe<Array<Tag>>
  tagsBoard?: Maybe<Array<Tag>>
  tagsCard?: Maybe<Array<Tag>>
  task?: Maybe<Task>
  tasks?: Maybe<Array<Task>>
  tasksBoard?: Maybe<Array<Task>>
  tasksCheckList?: Maybe<Array<Task>>
  template?: Maybe<Template>
  templates?: Maybe<Array<Template>>
  templatesAuthor?: Maybe<Array<Template>>
  user?: Maybe<User>
  users?: Maybe<Array<User>>
}

export type QueryBoardArgs = {
  id: Scalars["ID"]
}

export type QueryBoardsUserArgs = {
  userId?: Maybe<Scalars["ID"]>
}

export type QueryCardArgs = {
  id: Scalars["ID"]
}

export type QueryCardsListArgs = {
  listId: Scalars["ID"]
}

export type QueryCardsTagArgs = {
  tagId: Scalars["ID"]
}

export type QueryCheckListArgs = {
  id: Scalars["ID"]
}

export type QueryCheckListsCardArgs = {
  cardId: Scalars["ID"]
}

export type QueryListArgs = {
  id: Scalars["ID"]
}

export type QueryListsBoardArgs = {
  boardId: Scalars["ID"]
}

export type QueryTagArgs = {
  id: Scalars["ID"]
}

export type QueryTagsBoardArgs = {
  boardId: Scalars["ID"]
}

export type QueryTagsCardArgs = {
  cardId: Scalars["ID"]
}

export type QueryTaskArgs = {
  id: Scalars["ID"]
}

export type QueryTemplateArgs = {
  id: Scalars["ID"]
}

export type QueryTemplatesAuthorArgs = {
  authorId: Scalars["ID"]
}

export type QueryUserArgs = {
  id: Scalars["ID"]
}

export type Mutation = {
  __typename?: "Mutation"
  _?: Maybe<Scalars["Boolean"]>
  addUser?: Maybe<User>
  updateUser?: Maybe<User>
  deleteUser?: Maybe<Scalars["Void"]>
  login: User
  register: User
  logout?: Maybe<Scalars["Void"]>
  forgotPassword?: Maybe<Scalars["Void"]>
  resetPassword?: Maybe<Scalars["Void"]>
  changePassword?: Maybe<Scalars["Void"]>
  addTemplate?: Maybe<Template>
  updateTemplate?: Maybe<Template>
  deleteTemplate?: Maybe<Scalars["Void"]>
  addBoard?: Maybe<Board>
  updateBoard?: Maybe<Board>
  deleteBoard?: Maybe<Scalars["Void"]>
  addList?: Maybe<List>
  updateList?: Maybe<List>
  deleteList?: Maybe<Scalars["Void"]>
  addCard?: Maybe<Card>
  attachTag?: Maybe<Card>
  detachTag?: Maybe<Card>
  updateCard?: Maybe<Card>
  deleteCard?: Maybe<Scalars["Void"]>
  addCheckList?: Maybe<CheckList>
  updateCheckList?: Maybe<CheckList>
  deleteCheckList?: Maybe<Scalars["Void"]>
  addTaskBoard?: Maybe<Task>
  addTaskCheckList?: Maybe<Task>
  updateTask?: Maybe<Task>
  deleteTask?: Maybe<Scalars["Void"]>
  addTag?: Maybe<Tag>
  updateTag?: Maybe<Tag>
  deleteTag?: Maybe<Scalars["Void"]>
}

export type MutationAddUserArgs = {
  input: UserInput
}

export type MutationUpdateUserArgs = {
  id: Scalars["ID"]
  input: UpdateInput
}

export type MutationDeleteUserArgs = {
  id: Scalars["ID"]
}

export type MutationLoginArgs = {
  input: LoginInput
}

export type MutationRegisterArgs = {
  input: RegisterInput
}

export type MutationForgotPasswordArgs = {
  email: Scalars["String"]
}

export type MutationResetPasswordArgs = {
  token: Scalars["String"]
  newPassword: Scalars["String"]
}

export type MutationChangePasswordArgs = {
  oldPassword: Scalars["String"]
  newPassword: Scalars["String"]
}

export type MutationAddTemplateArgs = {
  input: TemplateInput
}

export type MutationUpdateTemplateArgs = {
  id: Scalars["ID"]
  input: TemplateInput
}

export type MutationDeleteTemplateArgs = {
  id: Scalars["ID"]
}

export type MutationAddBoardArgs = {
  input: BoardInput
}

export type MutationUpdateBoardArgs = {
  id: Scalars["ID"]
  input: BoardInput
}

export type MutationDeleteBoardArgs = {
  id: Scalars["ID"]
}

export type MutationAddListArgs = {
  boardId: Scalars["ID"]
  input: ListInput
}

export type MutationUpdateListArgs = {
  id: Scalars["ID"]
  input: ListInput
}

export type MutationDeleteListArgs = {
  id: Scalars["ID"]
}

export type MutationAddCardArgs = {
  listId: Scalars["ID"]
  input: CardInput
}

export type MutationAttachTagArgs = {
  cardId: Scalars["ID"]
  tagId: Scalars["ID"]
}

export type MutationDetachTagArgs = {
  cardId: Scalars["ID"]
  tagId: Scalars["ID"]
}

export type MutationUpdateCardArgs = {
  id: Scalars["ID"]
  input: CardInput
}

export type MutationDeleteCardArgs = {
  id: Scalars["ID"]
}

export type MutationAddCheckListArgs = {
  cardId: Scalars["ID"]
  input: CheckListInput
}

export type MutationUpdateCheckListArgs = {
  id: Scalars["ID"]
  input: CheckListInput
}

export type MutationDeleteCheckListArgs = {
  id: Scalars["ID"]
}

export type MutationAddTaskBoardArgs = {
  boardId: Scalars["ID"]
  input: TaskInput
}

export type MutationAddTaskCheckListArgs = {
  checkListId: Scalars["ID"]
  input: TaskInput
}

export type MutationUpdateTaskArgs = {
  id: Scalars["ID"]
  input: TaskInput
}

export type MutationDeleteTaskArgs = {
  id: Scalars["ID"]
}

export type MutationAddTagArgs = {
  boardId: Scalars["ID"]
  input: TagInput
}

export type MutationUpdateTagArgs = {
  id: Scalars["ID"]
  input: TagInput
}

export type MutationDeleteTagArgs = {
  id: Scalars["ID"]
}

export type Subscription = {
  __typename?: "Subscription"
  _?: Maybe<Scalars["Boolean"]>
}

export enum Role {
  User = "USER",
  Admin = "ADMIN"
}

export type UpdateInput = {
  username?: Maybe<Scalars["String"]>
}

export type UserInput = {
  username: Scalars["String"]
  email: Scalars["String"]
  password: Scalars["String"]
}

export type User = {
  __typename?: "User"
  id: Scalars["ID"]
  username: Scalars["String"]
  email: Scalars["String"]
  isActive: Scalars["Boolean"]
  role: Role
  boards?: Maybe<Array<Board>>
  createdAt?: Maybe<Scalars["DateTime"]>
  updatedAt?: Maybe<Scalars["DateTime"]>
}

export type LoginInput = {
  identifier: Scalars["String"]
  password: Scalars["String"]
}

export type RegisterInput = {
  username: Scalars["String"]
  email: Scalars["String"]
  password: Scalars["String"]
}

export type TemplateInput = {
  name: Scalars["String"]
}

export type Template = {
  __typename?: "Template"
  id: Scalars["ID"]
  name: Scalars["String"]
  desc?: Maybe<Scalars["String"]>
  type: Scalars["String"]
  author?: Maybe<User>
  createdAt?: Maybe<Scalars["DateTime"]>
  updatedAt?: Maybe<Scalars["DateTime"]>
}

export type BoardInput = {
  name?: Maybe<Scalars["String"]>
  icon?: Maybe<Scalars["String"]>
  isArchived?: Maybe<Scalars["Boolean"]>
  order?: Maybe<Scalars["Int"]>
}

export type Board = {
  __typename?: "Board"
  id: Scalars["ID"]
  name: Scalars["String"]
  template?: Maybe<Template>
  tasks?: Maybe<Array<Task>>
  lists?: Maybe<Array<List>>
  icon?: Maybe<Scalars["String"]>
  isArchived: Scalars["Boolean"]
  order: Scalars["Int"]
  createdAt?: Maybe<Scalars["DateTime"]>
  updatedAt?: Maybe<Scalars["DateTime"]>
}

export type ListInput = {
  name?: Maybe<Scalars["String"]>
  order?: Maybe<Scalars["Int"]>
}

export type List = {
  __typename?: "List"
  id: Scalars["ID"]
  name: Scalars["String"]
  order: Scalars["Int"]
  cards?: Maybe<Array<Card>>
  createdAt?: Maybe<Scalars["DateTime"]>
  updatedAt?: Maybe<Scalars["DateTime"]>
}

export type CardInput = {
  name?: Maybe<Scalars["String"]>
  dueDate?: Maybe<Scalars["DateTime"]>
  desc?: Maybe<Scalars["String"]>
  order?: Maybe<Scalars["Int"]>
}

export type Card = {
  __typename?: "Card"
  id: Scalars["ID"]
  name: Scalars["String"]
  dueDate?: Maybe<Scalars["DateTime"]>
  desc?: Maybe<Scalars["String"]>
  order: Scalars["Int"]
  checkLists?: Maybe<Array<CheckList>>
  tags?: Maybe<Array<Tag>>
  createdAt?: Maybe<Scalars["DateTime"]>
  updatedAt?: Maybe<Scalars["DateTime"]>
}

export type CheckListInput = {
  name?: Maybe<Scalars["String"]>
  order?: Maybe<Scalars["Int"]>
}

export type CheckList = {
  __typename?: "CheckList"
  id: Scalars["ID"]
  name: Scalars["String"]
  order: Scalars["Int"]
  tasks?: Maybe<Array<Task>>
  createdAt?: Maybe<Scalars["DateTime"]>
  updatedAt?: Maybe<Scalars["DateTime"]>
}

export type TaskInput = {
  name: Scalars["String"]
  isCompleted: Scalars["Boolean"]
  startDate?: Maybe<Scalars["DateTime"]>
  endDate?: Maybe<Scalars["DateTime"]>
  order?: Maybe<Scalars["Int"]>
}

export type Task = {
  __typename?: "Task"
  id: Scalars["ID"]
  name: Scalars["String"]
  isCompleted: Scalars["Boolean"]
  startDate?: Maybe<Scalars["DateTime"]>
  endDate?: Maybe<Scalars["DateTime"]>
  order: Scalars["Int"]
  createdAt?: Maybe<Scalars["DateTime"]>
  updatedAt?: Maybe<Scalars["DateTime"]>
}

export type TagInput = {
  name?: Maybe<Scalars["String"]>
  color?: Maybe<Scalars["String"]>
}

export type Tag = {
  __typename?: "Tag"
  id: Scalars["ID"]
  name: Scalars["String"]
  color?: Maybe<Scalars["String"]>
  createdAt?: Maybe<Scalars["DateTime"]>
  updatedAt?: Maybe<Scalars["DateTime"]>
}

export type ModalContext = {
  __typename?: "ModalContext"
  id: Scalars["String"]
  isOpen: Scalars["Boolean"]
  currentTab?: Maybe<Scalars["String"]>
  path?: Maybe<Scalars["String"]>
}

export type AddBoardMutationVariables = Exact<{
  input: BoardInput
}>

export type AddBoardMutation = {
  __typename?: "Mutation"
  addBoard?: Maybe<{ __typename?: "Board" } & BoardCascadeInfoFragment>
}

export type UpdateBoardMutationVariables = Exact<{
  id: Scalars["ID"]
  input: BoardInput
}>

export type UpdateBoardMutation = {
  __typename?: "Mutation"
  updateBoard?: Maybe<{ __typename?: "Board" } & BoardCascadeInfoFragment>
}

export type DeleteBoardMutationVariables = Exact<{
  id: Scalars["ID"]
}>

export type DeleteBoardMutation = { __typename?: "Mutation"; deleteBoard?: Maybe<void> }

export type BoardQueryVariables = Exact<{
  id: Scalars["ID"]
}>

export type BoardQuery = {
  __typename?: "Query"
  board?: Maybe<{ __typename?: "Board" } & BoardCascadeInfoFragment>
}

export type BoardsQueryVariables = Exact<{ [key: string]: never }>

export type BoardsQuery = {
  __typename?: "Query"
  boards?: Maybe<Array<{ __typename?: "Board" } & BoardCascadeInfoFragment>>
}

export type BoardsUserQueryVariables = Exact<{
  id: Scalars["ID"]
}>

export type BoardsUserQuery = {
  __typename?: "Query"
  boardsUser?: Maybe<Array<{ __typename?: "Board" } & BoardCascadeInfoFragment>>
}

export type BoardsMeQueryVariables = Exact<{ [key: string]: never }>

export type BoardsMeQuery = {
  __typename?: "Query"
  boardsMe?: Maybe<Array<{ __typename?: "Board" } & BoardCascadeInfoFragment>>
}

export type BoardsOnlyMeQueryVariables = Exact<{ [key: string]: never }>

export type BoardsOnlyMeQuery = {
  __typename?: "Query"
  me: { __typename?: "User"; boards?: Maybe<Array<{ __typename?: "Board" } & BoardInfoFragment>> }
}

export type UserInfoFragment = { __typename?: "User"; id: string; username: string; email: string }

export type BoardInfoFragment = {
  __typename?: "Board"
  id: string
  name: string
  isArchived: boolean
  order: number
}

export type ListInfoFragment = { __typename?: "List"; id: string; name: string; order: number }

export type CardInfoFragment = {
  __typename?: "Card"
  id: string
  name: string
  dueDate?: Maybe<Date>
  desc?: Maybe<string>
  order: number
}

export type CheckListInfoFragment = {
  __typename?: "CheckList"
  id: string
  name: string
  order: number
}

export type TaskInfoFragment = {
  __typename?: "Task"
  id: string
  name: string
  isCompleted: boolean
  order: number
}

export type TagInfoFragment = {
  __typename?: "Tag"
  id: string
  name: string
  color?: Maybe<string>
}

export type BoardCascadeInfoFragment = {
  __typename?: "Board"
  lists?: Maybe<
    Array<
      {
        __typename?: "List"
        cards?: Maybe<
          Array<
            {
              __typename?: "Card"
              checkLists?: Maybe<
                Array<
                  {
                    __typename?: "CheckList"
                    tasks?: Maybe<Array<{ __typename?: "Task" } & TaskInfoFragment>>
                  } & CheckListInfoFragment
                >
              >
            } & CardInfoFragment
          >
        >
      } & ListInfoFragment
    >
  >
  tasks?: Maybe<Array<{ __typename?: "Task" } & TaskInfoFragment>>
} & BoardInfoFragment

export type HasDarkThemeQueryVariables = Exact<{ [key: string]: never }>

export type HasDarkThemeQuery = { __typename?: "Query"; hasDarkTheme: boolean }

export type ModalContextQueryVariables = Exact<{ [key: string]: never }>

export type ModalContextQuery = {
  __typename?: "Query"
  modalContext?: Maybe<{
    __typename?: "ModalContext"
    id: string
    isOpen: boolean
    currentTab?: Maybe<string>
    path?: Maybe<string>
  }>
}

export type LoginMutationVariables = Exact<{
  input: LoginInput
}>

export type LoginMutation = {
  __typename?: "Mutation"
  login: {
    __typename?: "User"
    role: Role
    createdAt?: Maybe<Date>
    updatedAt?: Maybe<Date>
    boards?: Maybe<Array<{ __typename?: "Board" } & BoardCascadeInfoFragment>>
  } & UserInfoFragment
}

export type RegisterMutationVariables = Exact<{
  input: RegisterInput
}>

export type RegisterMutation = {
  __typename?: "Mutation"
  register: {
    __typename?: "User"
    role: Role
    createdAt?: Maybe<Date>
    updatedAt?: Maybe<Date>
    boards?: Maybe<Array<{ __typename?: "Board" } & BoardCascadeInfoFragment>>
  } & UserInfoFragment
}

export type LogoutMutationVariables = Exact<{ [key: string]: never }>

export type LogoutMutation = { __typename?: "Mutation"; logout?: Maybe<void> }

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars["String"]
}>

export type ForgotPasswordMutation = { __typename?: "Mutation"; forgotPassword?: Maybe<void> }

export type ResetPasswordMutationVariables = Exact<{
  token: Scalars["String"]
  newPassword: Scalars["String"]
}>

export type ResetPasswordMutation = { __typename?: "Mutation"; resetPassword?: Maybe<void> }

export type ChangePasswordMutationVariables = Exact<{
  oldPassword: Scalars["String"]
  newPassword: Scalars["String"]
}>

export type ChangePasswordMutation = { __typename?: "Mutation"; changePassword?: Maybe<void> }

export type MeQueryVariables = Exact<{ [key: string]: never }>

export type MeQuery = {
  __typename?: "Query"
  me: {
    __typename?: "User"
    role: Role
    createdAt?: Maybe<Date>
    updatedAt?: Maybe<Date>
    boards?: Maybe<Array<{ __typename?: "Board" } & BoardCascadeInfoFragment>>
  } & UserInfoFragment
}

export const UserInfoFragmentDoc = gql`
  fragment UserInfo on User {
    id
    username
    email
  }
`
export const TagInfoFragmentDoc = gql`
  fragment TagInfo on Tag {
    id
    name
    color
  }
`
export const BoardInfoFragmentDoc = gql`
  fragment BoardInfo on Board {
    id
    name
    isArchived
    order
  }
`
export const ListInfoFragmentDoc = gql`
  fragment ListInfo on List {
    id
    name
    order
  }
`
export const CardInfoFragmentDoc = gql`
  fragment CardInfo on Card {
    id
    name
    dueDate
    desc
    order
  }
`
export const CheckListInfoFragmentDoc = gql`
  fragment CheckListInfo on CheckList {
    id
    name
    order
  }
`
export const TaskInfoFragmentDoc = gql`
  fragment TaskInfo on Task {
    id
    name
    isCompleted
    order
  }
`
export const BoardCascadeInfoFragmentDoc = gql`
  fragment BoardCascadeInfo on Board {
    ...BoardInfo
    lists {
      ...ListInfo
      cards {
        ...CardInfo
        checkLists {
          ...CheckListInfo
          tasks {
            ...TaskInfo
          }
        }
      }
    }
    tasks {
      ...TaskInfo
    }
  }
  ${BoardInfoFragmentDoc}
  ${ListInfoFragmentDoc}
  ${CardInfoFragmentDoc}
  ${CheckListInfoFragmentDoc}
  ${TaskInfoFragmentDoc}
`
export const AddBoardDocument = gql`
  mutation AddBoard($input: BoardInput!) {
    addBoard(input: $input) {
      ...BoardCascadeInfo
    }
  }
  ${BoardCascadeInfoFragmentDoc}
`
export type AddBoardMutationFn = ApolloReactCommon.MutationFunction<
  AddBoardMutation,
  AddBoardMutationVariables
>

/**
 * __useAddBoardMutation__
 *
 * To run a mutation, you first call `useAddBoardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddBoardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addBoardMutation, { data, loading, error }] = useAddBoardMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddBoardMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<AddBoardMutation, AddBoardMutationVariables>
) {
  return ApolloReactHooks.useMutation<AddBoardMutation, AddBoardMutationVariables>(
    AddBoardDocument,
    baseOptions
  )
}
export type AddBoardMutationHookResult = ReturnType<typeof useAddBoardMutation>
export type AddBoardMutationResult = ApolloReactCommon.MutationResult<AddBoardMutation>
export type AddBoardMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddBoardMutation,
  AddBoardMutationVariables
>
export const UpdateBoardDocument = gql`
  mutation UpdateBoard($id: ID!, $input: BoardInput!) {
    updateBoard(id: $id, input: $input) {
      ...BoardCascadeInfo
    }
  }
  ${BoardCascadeInfoFragmentDoc}
`
export type UpdateBoardMutationFn = ApolloReactCommon.MutationFunction<
  UpdateBoardMutation,
  UpdateBoardMutationVariables
>

/**
 * __useUpdateBoardMutation__
 *
 * To run a mutation, you first call `useUpdateBoardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBoardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBoardMutation, { data, loading, error }] = useUpdateBoardMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateBoardMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateBoardMutation,
    UpdateBoardMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<UpdateBoardMutation, UpdateBoardMutationVariables>(
    UpdateBoardDocument,
    baseOptions
  )
}
export type UpdateBoardMutationHookResult = ReturnType<typeof useUpdateBoardMutation>
export type UpdateBoardMutationResult = ApolloReactCommon.MutationResult<UpdateBoardMutation>
export type UpdateBoardMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateBoardMutation,
  UpdateBoardMutationVariables
>
export const DeleteBoardDocument = gql`
  mutation DeleteBoard($id: ID!) {
    deleteBoard(id: $id)
  }
`
export type DeleteBoardMutationFn = ApolloReactCommon.MutationFunction<
  DeleteBoardMutation,
  DeleteBoardMutationVariables
>

/**
 * __useDeleteBoardMutation__
 *
 * To run a mutation, you first call `useDeleteBoardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBoardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBoardMutation, { data, loading, error }] = useDeleteBoardMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteBoardMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    DeleteBoardMutation,
    DeleteBoardMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<DeleteBoardMutation, DeleteBoardMutationVariables>(
    DeleteBoardDocument,
    baseOptions
  )
}
export type DeleteBoardMutationHookResult = ReturnType<typeof useDeleteBoardMutation>
export type DeleteBoardMutationResult = ApolloReactCommon.MutationResult<DeleteBoardMutation>
export type DeleteBoardMutationOptions = ApolloReactCommon.BaseMutationOptions<
  DeleteBoardMutation,
  DeleteBoardMutationVariables
>
export const BoardDocument = gql`
  query Board($id: ID!) {
    board(id: $id) {
      ...BoardCascadeInfo
    }
  }
  ${BoardCascadeInfoFragmentDoc}
`

/**
 * __useBoardQuery__
 *
 * To run a query within a React component, call `useBoardQuery` and pass it any options that fit your needs.
 * When your component renders, `useBoardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBoardQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useBoardQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<BoardQuery, BoardQueryVariables>
) {
  return ApolloReactHooks.useQuery<BoardQuery, BoardQueryVariables>(BoardDocument, baseOptions)
}
export function useBoardLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<BoardQuery, BoardQueryVariables>
) {
  return ApolloReactHooks.useLazyQuery<BoardQuery, BoardQueryVariables>(BoardDocument, baseOptions)
}
export type BoardQueryHookResult = ReturnType<typeof useBoardQuery>
export type BoardLazyQueryHookResult = ReturnType<typeof useBoardLazyQuery>
export type BoardQueryResult = ApolloReactCommon.QueryResult<BoardQuery, BoardQueryVariables>
export const BoardsDocument = gql`
  query Boards {
    boards {
      ...BoardCascadeInfo
    }
  }
  ${BoardCascadeInfoFragmentDoc}
`

/**
 * __useBoardsQuery__
 *
 * To run a query within a React component, call `useBoardsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBoardsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBoardsQuery({
 *   variables: {
 *   },
 * });
 */
export function useBoardsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<BoardsQuery, BoardsQueryVariables>
) {
  return ApolloReactHooks.useQuery<BoardsQuery, BoardsQueryVariables>(BoardsDocument, baseOptions)
}
export function useBoardsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<BoardsQuery, BoardsQueryVariables>
) {
  return ApolloReactHooks.useLazyQuery<BoardsQuery, BoardsQueryVariables>(
    BoardsDocument,
    baseOptions
  )
}
export type BoardsQueryHookResult = ReturnType<typeof useBoardsQuery>
export type BoardsLazyQueryHookResult = ReturnType<typeof useBoardsLazyQuery>
export type BoardsQueryResult = ApolloReactCommon.QueryResult<BoardsQuery, BoardsQueryVariables>
export const BoardsUserDocument = gql`
  query BoardsUser($id: ID!) {
    boardsUser(userId: $id) {
      ...BoardCascadeInfo
    }
  }
  ${BoardCascadeInfoFragmentDoc}
`

/**
 * __useBoardsUserQuery__
 *
 * To run a query within a React component, call `useBoardsUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useBoardsUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBoardsUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useBoardsUserQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<BoardsUserQuery, BoardsUserQueryVariables>
) {
  return ApolloReactHooks.useQuery<BoardsUserQuery, BoardsUserQueryVariables>(
    BoardsUserDocument,
    baseOptions
  )
}
export function useBoardsUserLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<BoardsUserQuery, BoardsUserQueryVariables>
) {
  return ApolloReactHooks.useLazyQuery<BoardsUserQuery, BoardsUserQueryVariables>(
    BoardsUserDocument,
    baseOptions
  )
}
export type BoardsUserQueryHookResult = ReturnType<typeof useBoardsUserQuery>
export type BoardsUserLazyQueryHookResult = ReturnType<typeof useBoardsUserLazyQuery>
export type BoardsUserQueryResult = ApolloReactCommon.QueryResult<
  BoardsUserQuery,
  BoardsUserQueryVariables
>
export const BoardsMeDocument = gql`
  query BoardsMe {
    boardsMe {
      ...BoardCascadeInfo
    }
  }
  ${BoardCascadeInfoFragmentDoc}
`

/**
 * __useBoardsMeQuery__
 *
 * To run a query within a React component, call `useBoardsMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useBoardsMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBoardsMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useBoardsMeQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<BoardsMeQuery, BoardsMeQueryVariables>
) {
  return ApolloReactHooks.useQuery<BoardsMeQuery, BoardsMeQueryVariables>(
    BoardsMeDocument,
    baseOptions
  )
}
export function useBoardsMeLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<BoardsMeQuery, BoardsMeQueryVariables>
) {
  return ApolloReactHooks.useLazyQuery<BoardsMeQuery, BoardsMeQueryVariables>(
    BoardsMeDocument,
    baseOptions
  )
}
export type BoardsMeQueryHookResult = ReturnType<typeof useBoardsMeQuery>
export type BoardsMeLazyQueryHookResult = ReturnType<typeof useBoardsMeLazyQuery>
export type BoardsMeQueryResult = ApolloReactCommon.QueryResult<
  BoardsMeQuery,
  BoardsMeQueryVariables
>
export const BoardsOnlyMeDocument = gql`
  query BoardsOnlyMe {
    me {
      boards {
        ...BoardInfo
      }
    }
  }
  ${BoardInfoFragmentDoc}
`

/**
 * __useBoardsOnlyMeQuery__
 *
 * To run a query within a React component, call `useBoardsOnlyMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useBoardsOnlyMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBoardsOnlyMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useBoardsOnlyMeQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<BoardsOnlyMeQuery, BoardsOnlyMeQueryVariables>
) {
  return ApolloReactHooks.useQuery<BoardsOnlyMeQuery, BoardsOnlyMeQueryVariables>(
    BoardsOnlyMeDocument,
    baseOptions
  )
}
export function useBoardsOnlyMeLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<BoardsOnlyMeQuery, BoardsOnlyMeQueryVariables>
) {
  return ApolloReactHooks.useLazyQuery<BoardsOnlyMeQuery, BoardsOnlyMeQueryVariables>(
    BoardsOnlyMeDocument,
    baseOptions
  )
}
export type BoardsOnlyMeQueryHookResult = ReturnType<typeof useBoardsOnlyMeQuery>
export type BoardsOnlyMeLazyQueryHookResult = ReturnType<typeof useBoardsOnlyMeLazyQuery>
export type BoardsOnlyMeQueryResult = ApolloReactCommon.QueryResult<
  BoardsOnlyMeQuery,
  BoardsOnlyMeQueryVariables
>
export const HasDarkThemeDocument = gql`
  query HasDarkTheme {
    hasDarkTheme @client
  }
`

/**
 * __useHasDarkThemeQuery__
 *
 * To run a query within a React component, call `useHasDarkThemeQuery` and pass it any options that fit your needs.
 * When your component renders, `useHasDarkThemeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHasDarkThemeQuery({
 *   variables: {
 *   },
 * });
 */
export function useHasDarkThemeQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<HasDarkThemeQuery, HasDarkThemeQueryVariables>
) {
  return ApolloReactHooks.useQuery<HasDarkThemeQuery, HasDarkThemeQueryVariables>(
    HasDarkThemeDocument,
    baseOptions
  )
}
export function useHasDarkThemeLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<HasDarkThemeQuery, HasDarkThemeQueryVariables>
) {
  return ApolloReactHooks.useLazyQuery<HasDarkThemeQuery, HasDarkThemeQueryVariables>(
    HasDarkThemeDocument,
    baseOptions
  )
}
export type HasDarkThemeQueryHookResult = ReturnType<typeof useHasDarkThemeQuery>
export type HasDarkThemeLazyQueryHookResult = ReturnType<typeof useHasDarkThemeLazyQuery>
export type HasDarkThemeQueryResult = ApolloReactCommon.QueryResult<
  HasDarkThemeQuery,
  HasDarkThemeQueryVariables
>
export const ModalContextDocument = gql`
  query ModalContext {
    modalContext @client {
      id
      isOpen
      currentTab
      path
    }
  }
`

/**
 * __useModalContextQuery__
 *
 * To run a query within a React component, call `useModalContextQuery` and pass it any options that fit your needs.
 * When your component renders, `useModalContextQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useModalContextQuery({
 *   variables: {
 *   },
 * });
 */
export function useModalContextQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<ModalContextQuery, ModalContextQueryVariables>
) {
  return ApolloReactHooks.useQuery<ModalContextQuery, ModalContextQueryVariables>(
    ModalContextDocument,
    baseOptions
  )
}
export function useModalContextLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ModalContextQuery, ModalContextQueryVariables>
) {
  return ApolloReactHooks.useLazyQuery<ModalContextQuery, ModalContextQueryVariables>(
    ModalContextDocument,
    baseOptions
  )
}
export type ModalContextQueryHookResult = ReturnType<typeof useModalContextQuery>
export type ModalContextLazyQueryHookResult = ReturnType<typeof useModalContextLazyQuery>
export type ModalContextQueryResult = ApolloReactCommon.QueryResult<
  ModalContextQuery,
  ModalContextQueryVariables
>
export const LoginDocument = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      ...UserInfo
      role
      boards {
        ...BoardCascadeInfo
      }
      createdAt
      updatedAt
    }
  }
  ${UserInfoFragmentDoc}
  ${BoardCascadeInfoFragmentDoc}
`
export type LoginMutationFn = ApolloReactCommon.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>
) {
  return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    baseOptions
  )
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>
export const RegisterDocument = gql`
  mutation Register($input: RegisterInput!) {
    register(input: $input) {
      ...UserInfo
      role
      boards {
        ...BoardCascadeInfo
      }
      createdAt
      updatedAt
    }
  }
  ${UserInfoFragmentDoc}
  ${BoardCascadeInfoFragmentDoc}
`
export type RegisterMutationFn = ApolloReactCommon.MutationFunction<
  RegisterMutation,
  RegisterMutationVariables
>

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<RegisterMutation, RegisterMutationVariables>
) {
  return ApolloReactHooks.useMutation<RegisterMutation, RegisterMutationVariables>(
    RegisterDocument,
    baseOptions
  )
}
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>
export type RegisterMutationResult = ApolloReactCommon.MutationResult<RegisterMutation>
export type RegisterMutationOptions = ApolloReactCommon.BaseMutationOptions<
  RegisterMutation,
  RegisterMutationVariables
>
export const LogoutDocument = gql`
  mutation Logout {
    logout
  }
`
export type LogoutMutationFn = ApolloReactCommon.MutationFunction<
  LogoutMutation,
  LogoutMutationVariables
>

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<LogoutMutation, LogoutMutationVariables>
) {
  return ApolloReactHooks.useMutation<LogoutMutation, LogoutMutationVariables>(
    LogoutDocument,
    baseOptions
  )
}
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>
export type LogoutMutationResult = ApolloReactCommon.MutationResult<LogoutMutation>
export type LogoutMutationOptions = ApolloReactCommon.BaseMutationOptions<
  LogoutMutation,
  LogoutMutationVariables
>
export const ForgotPasswordDocument = gql`
  mutation ForgotPassword($email: String!) {
    forgotPassword(email: $email)
  }
`
export type ForgotPasswordMutationFn = ApolloReactCommon.MutationFunction<
  ForgotPasswordMutation,
  ForgotPasswordMutationVariables
>

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useForgotPasswordMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    ForgotPasswordMutation,
    ForgotPasswordMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(
    ForgotPasswordDocument,
    baseOptions
  )
}
export type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>
export type ForgotPasswordMutationResult = ApolloReactCommon.MutationResult<ForgotPasswordMutation>
export type ForgotPasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<
  ForgotPasswordMutation,
  ForgotPasswordMutationVariables
>
export const ResetPasswordDocument = gql`
  mutation ResetPassword($token: String!, $newPassword: String!) {
    resetPassword(token: $token, newPassword: $newPassword)
  }
`
export type ResetPasswordMutationFn = ApolloReactCommon.MutationFunction<
  ResetPasswordMutation,
  ResetPasswordMutationVariables
>

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      token: // value for 'token'
 *      newPassword: // value for 'newPassword'
 *   },
 * });
 */
export function useResetPasswordMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    ResetPasswordMutation,
    ResetPasswordMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(
    ResetPasswordDocument,
    baseOptions
  )
}
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>
export type ResetPasswordMutationResult = ApolloReactCommon.MutationResult<ResetPasswordMutation>
export type ResetPasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<
  ResetPasswordMutation,
  ResetPasswordMutationVariables
>
export const ChangePasswordDocument = gql`
  mutation ChangePassword($oldPassword: String!, $newPassword: String!) {
    changePassword(oldPassword: $oldPassword, newPassword: $newPassword)
  }
`
export type ChangePasswordMutationFn = ApolloReactCommon.MutationFunction<
  ChangePasswordMutation,
  ChangePasswordMutationVariables
>

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      oldPassword: // value for 'oldPassword'
 *      newPassword: // value for 'newPassword'
 *   },
 * });
 */
export function useChangePasswordMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    ChangePasswordMutation,
    ChangePasswordMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(
    ChangePasswordDocument,
    baseOptions
  )
}
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>
export type ChangePasswordMutationResult = ApolloReactCommon.MutationResult<ChangePasswordMutation>
export type ChangePasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<
  ChangePasswordMutation,
  ChangePasswordMutationVariables
>
export const MeDocument = gql`
  query Me {
    me {
      ...UserInfo
      role
      boards {
        ...BoardCascadeInfo
      }
      createdAt
      updatedAt
    }
  }
  ${UserInfoFragmentDoc}
  ${BoardCascadeInfoFragmentDoc}
`

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<MeQuery, MeQueryVariables>
) {
  return ApolloReactHooks.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions)
}
export function useMeLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MeQuery, MeQueryVariables>
) {
  return ApolloReactHooks.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions)
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>
export type MeQueryResult = ApolloReactCommon.QueryResult<MeQuery, MeQueryVariables>
