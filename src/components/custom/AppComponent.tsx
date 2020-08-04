import { createMuiTheme, CssBaseline, ThemeProvider, useMediaQuery } from "@material-ui/core"
import { deepOrange, red } from "@material-ui/core/colors"
import { AppProps } from "next/app"
import { useEffect } from "react"

import { darkThemeVar } from "../../apollo"
import { useHasDarkThemeQuery } from "../../generated/graphql"

const AppComponent = ({ Component, pageProps }: AppProps) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")
  const { data } = useHasDarkThemeQuery()

  const theme = createMuiTheme({
    mixins: {
      toolbar: {
        minHeight: 50,
        height: 50,
        boxShadow: "0 1px 2px rgba(0,0,0,.15), 0 0 2px rgba(0,0,0,.1)"
      }
    },
    palette: {
      type:
        data?.hasDarkTheme === null
          ? prefersDarkMode
            ? "dark"
            : "light"
          : data?.hasDarkTheme
          ? "dark"
          : "light",
      primary: {
        main: deepOrange[500],
        contrastText: "#FFF"
      },
      secondary: {
        main: deepOrange[900] // TODO: Seek nice colors
      },
      error: {
        main: red.A400
      }
    }
  })

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
