import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

export const useStyles = makeStyles((theme: Theme) => {
  const spacing = theme.spacing(3)

  return createStyles({
    settingsWrapper: {
      display: "flex",
      marginTop: 100,
      alignItems: "flex-start"
    },
    tabsWrapper: {
      marginRight: spacing,
      paddingTop: spacing,
      paddingBottom: spacing
    },
    contentWrapper: {
      flex: 1,
      padding: spacing,
      marginLeft: spacing
    },
    tabWrapper: {
      alignItems: "start"
    },
    tab: {
      textTransform: "none",
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(15),
      textAlign: "left",
      paddingLeft: spacing,
      paddingRight: spacing
    }
  })
})
