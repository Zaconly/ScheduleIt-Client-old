import { createMuiTheme, CssBaseline, Theme, ThemeProvider, useMediaQuery } from "@material-ui/core"
import { deepOrange, purple } from "@material-ui/core/colors"
import { AppProps } from "next/app"
import { useEffect, useMemo } from "react"

import { darkThemeVar } from "../../apollo"
import { useHasDarkThemeQuery } from "../../generated/graphql"

const AppComponent = ({ Component, pageProps }: AppProps) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")
  const { data } = useHasDarkThemeQuery()

  const mode =
    data?.hasDarkTheme === null
      ? prefersDarkMode
        ? "dark"
        : "light"
      : data?.hasDarkTheme
      ? "dark"
      : "light"

  const isLight = mode === "light"

  const theme: Theme = useMemo(
    () =>
      createMuiTheme({
        mixins: {
          toolbar: {
            minHeight: 50,
            height: 50,
            boxShadow: "0 1px 2px rgba(0,0,0,.15), 0 0 2px rgba(0,0,0,.1)"
          }
        },
        palette: {
          type: mode,
          background: {
            default: isLight ? "#FAFAFA" : "#0E0E10",
            paper: isLight ? "#FFF" : "#18181B"
          },
          primary: {
            main: purple[800],
            contrastText: "#FFF"
          },
          secondary: {
            main: deepOrange[900] // TODO: Seek nice colors
          }
        },
        overrides: {
          MuiButton: {
            contained: {
              backgroundColor: isLight ? "#D5D5D5" : "#464649",
              color: isLight ? "#000" : "#FFF",
              "&:hover": {
                backgroundColor: isLight ? "#BEBEBE" : "#636368"
              }
            }
          },
          MuiOutlinedInput: {
            root: {
              "&:hover $notchedOutline": {
                borderColor: isLight ? "rgba(0,0,0,.5)" : "rgba(255,255,255,.5)"
              }
            },
            notchedOutline: {
              borderWidth: 2,
              transition: "border-color 225ms"
            }
          },
          MuiFormHelperText: {
            root: {
              height: 10,
              animation: "opacity--in 150ms, helpers-height--in 150ms"
            },
            contained: {
              marginLeft: 0,
              marginRight: 0
            }
          }
        }
      }),
    [prefersDarkMode, data?.hasDarkTheme]
  )

  useEffect(() => {
    const darkTheme = localStorage.getItem("darkTheme")
    darkThemeVar(darkTheme ? JSON.parse(darkTheme) : null)

    const jssStyles = document.querySelector("#jss-server-side")
    jssStyles?.parentElement?.removeChild(jssStyles)
    const nextData = document.querySelector("#__NEXT_DATA__")
    nextData?.parentElement?.removeChild(nextData)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default AppComponent
