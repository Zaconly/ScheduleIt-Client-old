import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core"
import MailIcon from "@material-ui/icons/Mail"
import clsx from "clsx"
import Link from "next/link"
import { useRouter } from "next/router"

import { useBoardsOnlyMeQuery } from "../../generated/graphql"
import { useStyles } from "./style"

const SidebarItems = () => {
  const classes = useStyles()
  const { query } = useRouter()
  const { data } = useBoardsOnlyMeQuery({ fetchPolicy: "cache-only" })

  if (!data || !data.me || !data.me.boards) return null
  const boards = data.me.boards

  return (
    <List>
      {boards.map(board => (
        <Link passHref href="/b/[id]" as={`/b/${board.id}`} key={board.id}>
          <ListItem
            button
            className={clsx(classes.listItems, query.id === board.id && classes.activeItem)}
            component="a"
          >
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText
              primary={board.name}
              classes={{ primary: classes.text }}
              primaryTypographyProps={{ noWrap: true }}
            />
          </ListItem>
        </Link>
      ))}
    </List>
  )
}

export default SidebarItems
