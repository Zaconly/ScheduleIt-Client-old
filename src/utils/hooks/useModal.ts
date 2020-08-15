import { NextRouter, useRouter } from "next/router"
import { useCallback, useEffect, useState } from "react"

import { modalContextVar } from "../../apollo"
import { useModalContextQuery } from "../../generated/graphql"

interface Props {
  id: string
  currentTab?: string | null
  route?: string
}

type RouteProps = Pick<NextRouter, "asPath" | "pathname"> & { exact?: boolean }
type OptionsProps = Partial<Props>

export const useModal = ({ route, ...context }: Props) => {
  const { data } = useModalContextQuery()
  const router = useRouter()
  const [prevPath, setPrevPath] = useState<RouteProps>({
    asPath: router.asPath,
    pathname: router.pathname
  })

  useEffect(() => {
    if (route && route !== router.asPath) {
      setPrevPath({ asPath: router.asPath, pathname: router.pathname })
    }

    modalContextVar({
      id: context.id,
      isOpen: router.asPath === route,
      currentTab: context.currentTab || null,
      path: route || null
    })
  }, [router.pathname])

  const setOptions = useCallback(
    (options: OptionsProps) => {
      modalContextVar({
        id: options.id || data?.modalContext?.id || context.id,
        isOpen: data?.modalContext?.isOpen || false,
        currentTab: options.currentTab || data?.modalContext?.currentTab || context.currentTab,
        path: route || null
      })
    },
    [data]
  )

  const onOpen = useCallback(
    (options?: OptionsProps) => {
      const path = options?.route || route || null

      modalContextVar({
        id: options?.id || context.id,
        isOpen: true,
        currentTab: options?.currentTab || data?.modalContext?.currentTab,
        path: options?.route || route || null
      })

      if (path) {
        window.history.pushState("", "", path)
      }
    },
    [data]
  )

  const onClose = useCallback(
    (options?: OptionsProps) => {
      const path = options?.route || route || null

      modalContextVar({
        id: options?.id || context.id,
        isOpen: false,
        currentTab: options?.currentTab || data?.modalContext?.currentTab,
        path: options?.route || route || null
      })

      if (path) {
        if (prevPath.asPath === path) {
          router.push("/", "/", { shallow: true })
        } else {
          router.push(prevPath.pathname, prevPath.asPath, { shallow: true })
        }
      }
    },
    [data]
  )

  return {
    onOpen,
    onClose,
    setOptions,
    open: data?.modalContext?.isOpen === true && data?.modalContext?.id === context.id,
    id: data?.modalContext?.id || null,
    isOpen: data?.modalContext?.isOpen || null,
    currentTab: data?.modalContext?.currentTab || null
  }
}
