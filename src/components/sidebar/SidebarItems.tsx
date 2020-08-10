import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core"
import MailIcon from "@material-ui/icons/Mail"
import Link from "next/link"

import { Board } from "../../generated/graphql"
import { useStyles } from "./style"

interface Props {
  boards: Omit<Board[], "tasks"> | null | undefined
}

const SidebarItems = ({ boards }: Props) => {
  const classes = useStyles()

  if (!boards) return null

  return (
    <List className={classes.list}>
      {boards.map(board => (
        <Link passHref href="/board/[id]" as={`/board/${board.id}`} key={board.id}>
          <ListItem button className={classes.listItems} component="a">
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
