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
  Void: any
}

export type Query = {
  __typename?: "Query"
  _?: Maybe<Scalars["Boolean"]>
  allBoards?: Maybe<Array<Board>>
  allTemplates?: Maybe<Array<Template>>
  allUsers?: Maybe<Array<User>>
  authorTemplates?: Maybe<Array<Template>>
  board?: Maybe<Board>
  boardTasks?: Maybe<Array<Task>>
  hasDarkTheme: Scalars["Boolean"]
  me: User
  modalContext?: Maybe<ModalContext>
  tag?: Maybe<Tag>
  tagTasks?: Maybe<Array<Task>>
  task?: Maybe<Task>
  taskTags?: Maybe<Array<Tag>>
  template?: Maybe<Template>
  user?: Maybe<User>
  userBoards?: Maybe<Array<Board>>
  userTasks?: Maybe<Array<Task>>
}

export type QueryAuthorTemplatesArgs = {
  authorId: Scalars["ID"]
}

export type QueryBoardArgs = {
  id: Scalars["ID"]
}

export type QueryBoardTasksArgs = {
  boardId: Scalars["ID"]
}

export type QueryTagArgs = {
  id: Scalars["ID"]
}

export type QueryTagTasksArgs = {
  id: Scalars["ID"]
}

export type QueryTaskArgs = {
  id: Scalars["ID"]
}

export type QueryTaskTagsArgs = {
  taskId: Scalars["ID"]
}

export type QueryTemplateArgs = {
  id: Scalars["ID"]
}

export type QueryUserArgs = {
  id: Scalars["ID"]
}

export type QueryUserBoardsArgs = {
  userId?: Maybe<Scalars["ID"]>
}

export type Mutation = {
  __typename?: "Mutation"
  _?: Maybe<Scalars["Boolean"]>
  addUser?: Maybe<User>
  updateUser?: Maybe<User>
  deleteUser?: Maybe<Scalars["Boolean"]>
  login: User
  register: User
  logout?: Maybe<Scalars["Void"]>
  forgotPassword?: Maybe<Scalars["Void"]>
  resetPassword?: Maybe<Scalars["Void"]>
  changePassword?: Maybe<Scalars["Void"]>
  addTemplate?: Maybe<Template>
  updateTemplate?: Maybe<Template>
  deleteTemplate?: Maybe<Scalars["Boolean"]>
  addBoard?: Maybe<Board>
  updateBoard?: Maybe<Board>
  deleteBoard?: Maybe<Scalars["Boolean"]>
  addTask?: Maybe<Task>
  updateTask?: Maybe<Task>
  deleteTask?: Maybe<Scalars["Boolean"]>
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

export type MutationAddTaskArgs = {
  boardId: Scalars["ID"]
  input: TaskInput
}

export type MutationUpdateTaskArgs = {
  id: Scalars["ID"]
  input: TaskInput
}

export type MutationDeleteTaskArgs = {
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
  boards: Array<Maybe<Board>>
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
  author?: Maybe<User>
  createdAt?: Maybe<Scalars["DateTime"]>
  updatedAt?: Maybe<Scalars["DateTime"]>
}

export type BoardInput = {
  name: Scalars["String"]
  icon: Scalars["String"]
  isArchived: Scalars["Boolean"]
}

export type Board = {
  __typename?: "Board"
  id: Scalars["ID"]
  name: Scalars["String"]
  template?: Maybe<Template>
  tasks?: Maybe<Array<Task>>
  icon?: Maybe<Scalars["String"]>
  isArchived: Scalars["Boolean"]
  createdAt?: Maybe<Scalars["DateTime"]>
  updatedAt?: Maybe<Scalars["DateTime"]>
}

export type TaskInput = {
  name: Scalars["String"]
  isCompleted: Scalars["Boolean"]
  startDate?: Maybe<Scalars["DateTime"]>
  endDate?: Maybe<Scalars["DateTime"]>
}

export type Task = {
  __typename?: "Task"
  id: Scalars["ID"]
  name: Scalars["String"]
  isCompleted: Scalars["Boolean"]
  startDate?: Maybe<Scalars["DateTime"]>
  endDate?: Maybe<Scalars["DateTime"]>
  board?: Maybe<Board>
  tags?: Maybe<Array<Tag>>
  createdAt?: Maybe<Scalars["DateTime"]>
  updatedAt?: Maybe<Scalars["DateTime"]>
}

export type Tag = {
  __typename?: "Tag"
  id: Scalars["ID"]
  name: Scalars["String"]
  color?: Maybe<Scalars["String"]>
}

export type ModalContext = {
  __typename?: "ModalContext"
  id: Scalars["String"]
  isOpen: Scalars["Boolean"]
  currentTab?: Maybe<Scalars["String"]>
}

export type UserInfoFragment = { __typename?: "User" } & Pick<User, "id" | "username" | "email">

export type BoardInfoFragment = { __typename?: "Board" } & Pick<Board, "id" | "name">

export type TaskInfoFragment = { __typename?: "Task" } & Pick<Task, "id" | "name">

export type TagInfoFragment = { __typename?: "Tag" } & Pick<Tag, "id" | "name">

export type HasDarkThemeQueryVariables = Exact<{ [key: string]: never }>

export type HasDarkThemeQuery = { __typename?: "Query" } & Pick<Query, "hasDarkTheme">

export type ModalContextQueryVariables = Exact<{ [key: string]: never }>

export type ModalContextQuery = { __typename?: "Query" } & {
  modalContext?: Maybe<
    { __typename?: "ModalContext" } & Pick<ModalContext, "id" | "isOpen" | "currentTab">
  >
}

export type LoginMutationVariables = Exact<{
  input: LoginInput
}>

export type LoginMutation = { __typename?: "Mutation" } & {
  login: { __typename?: "User" } & Pick<User, "role" | "createdAt" | "updatedAt"> & {
      boards: Array<
        Maybe<
          { __typename?: "Board" } & {
            tasks?: Maybe<
              Array<
                { __typename?: "Task" } & {
                  tags?: Maybe<Array<{ __typename?: "Tag" } & TagInfoFragment>>
                } & TaskInfoFragment
              >
            >
          } & BoardInfoFragment
        >
      >
    } & UserInfoFragment
}

export type RegisterMutationVariables = Exact<{
  input: RegisterInput
}>

export type RegisterMutation = { __typename?: "Mutation" } & {
  register: { __typename?: "User" } & Pick<User, "role" | "createdAt" | "updatedAt"> & {
      boards: Array<
        Maybe<
          { __typename?: "Board" } & {
            tasks?: Maybe<
              Array<
                { __typename?: "Task" } & {
                  tags?: Maybe<Array<{ __typename?: "Tag" } & TagInfoFragment>>
                } & TaskInfoFragment
              >
            >
          } & BoardInfoFragment
        >
      >
    } & UserInfoFragment
}

export type LogoutMutationVariables = Exact<{ [key: string]: never }>

export type LogoutMutation = { __typename?: "Mutation" } & Pick<Mutation, "logout">

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars["String"]
}>

export type ForgotPasswordMutation = { __typename?: "Mutation" } & Pick<Mutation, "forgotPassword">

export type ResetPasswordMutationVariables = Exact<{
  token: Scalars["String"]
  newPassword: Scalars["String"]
}>

export type ResetPasswordMutation = { __typename?: "Mutation" } & Pick<Mutation, "resetPassword">

export type ChangePasswordMutationVariables = Exact<{
  oldPassword: Scalars["String"]
  newPassword: Scalars["String"]
}>

export type ChangePasswordMutation = { __typename?: "Mutation" } & Pick<Mutation, "changePassword">

export type MeQueryVariables = Exact<{ [key: string]: never }>

export type MeQuery = { __typename?: "Query" } & {
  me: { __typename?: "User" } & Pick<User, "role" | "createdAt" | "updatedAt"> & {
      boards: Array<
        Maybe<
          { __typename?: "Board" } & {
            tasks?: Maybe<
              Array<
                { __typename?: "Task" } & {
                  tags?: Maybe<Array<{ __typename?: "Tag" } & TagInfoFragment>>
                } & TaskInfoFragment
              >
            >
          } & BoardInfoFragment
        >
      >
    } & UserInfoFragment
}

export const UserInfoFragmentDoc = gql`
  fragment UserInfo on User {
    id
    username
    email
  }
`
export const BoardInfoFragmentDoc = gql`
  fragment BoardInfo on Board {
    id
    name
  }
`
export const TaskInfoFragmentDoc = gql`
  fragment TaskInfo on Task {
    id
    name
  }
`
export const TagInfoFragmentDoc = gql`
  fragment TagInfo on Tag {
    id
    name
  }
`
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
        ...BoardInfo
        tasks {
          ...TaskInfo
          tags {
            ...TagInfo
          }
        }
      }
      createdAt
      updatedAt
    }
  }
  ${UserInfoFragmentDoc}
  ${BoardInfoFragmentDoc}
  ${TaskInfoFragmentDoc}
  ${TagInfoFragmentDoc}
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
        ...BoardInfo
        tasks {
          ...TaskInfo
          tags {
            ...TagInfo
          }
        }
      }
      createdAt
      updatedAt
    }
  }
  ${UserInfoFragmentDoc}
  ${BoardInfoFragmentDoc}
  ${TaskInfoFragmentDoc}
  ${TagInfoFragmentDoc}
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
        ...BoardInfo
        tasks {
          ...TaskInfo
          tags {
            ...TagInfo
          }
        }
      }
      createdAt
      updatedAt
    }
  }
  ${UserInfoFragmentDoc}
  ${BoardInfoFragmentDoc}
  ${TaskInfoFragmentDoc}
  ${TagInfoFragmentDoc}
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
