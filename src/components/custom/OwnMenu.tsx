import { ClickAwayListener, Grow, MenuList, MenuListProps, Paper, Popper } from "@material-ui/core"
import { Dispatch, RefObject, SetStateAction, useEffect, useRef } from "react"

interface Props extends MenuListProps {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  anchorRef: RefObject<HTMLButtonElement>
}

const OwnMenu = ({ children, open, setOpen, anchorRef, ...props }: Props) => {
  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return
    }

    setOpen(false)
  }

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault()
      setOpen(false)
    }
  }

  const prevOpen = useRef(open)
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current?.focus()
    }

    prevOpen.current = open
  }, [open])

  return (
    <Popper
      open={open}
      anchorEl={anchorRef.current}
      role="menu"
      transition
      style={{ zIndex: 9999 }}
    >
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{ transformOrigin: placement === "bottom" ? "center top" : "center bottom" }}
        >
          <Paper>
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList
                autoFocusItem={open}
                id="menu-list-grow"
                onKeyDown={handleListKeyDown}
                {...props}
              >
                {children}
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  )
}

export default OwnMenu
