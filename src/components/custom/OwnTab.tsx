import { createStyles, Tab, Tabs, Theme, withStyles } from "@material-ui/core"

interface OwnTabsProps {
  value: string
  onChange: (event: React.ChangeEvent<unknown>, newValue: string) => void
}

interface OwnTabProps {
  label: string
  value: string
}

export const OwnTabs = withStyles((theme: Theme) =>
  createStyles({
    flexContainer: {
      borderBottom:
        theme.palette.type === "light" ? "1px solid rgba(0,0,0,.1)" : "1px solid #303032"
    },
    indicator: {
      display: "flex",
      justifyContent: "center",
      backgroundColor: "transparent",
      "& > span": {
        width: "100%",
        backgroundColor: theme.palette.primary.main
      }
    }
  })
)((props: OwnTabsProps) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />)

export const OwnTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      textTransform: "none",
      minWidth: 72,
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(15),
      marginRight: theme.spacing(1),
      "&:focus": {
        opacity: 1
      }
    }
  })
)((props: OwnTabProps) => <Tab {...props} />)
