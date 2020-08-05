import { makeVar } from "@apollo/client"

import { ModalContext } from "../generated/graphql"

export const darkThemeVar = makeVar<boolean>(false)

export const modalContextVar = makeVar<ModalContext | null>(null)
