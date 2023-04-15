import { MenuItemComponent } from "./MenuItem"
import { IMenuItemContainer } from "./MenuItem.type"
import { useNotes } from "../../../Common/Context"
import React from "react"

export const MenuItem = ({ value, icon, id }: IMenuItemContainer) => {
    const { handleCurrentNote, currentNote } = useNotes()
    const [contextMenuIsActive, setContextMenuIsActive] = React.useState<boolean>(false)
    const handleContextMenu = (e: any) => {
        e.preventDefault()
        setContextMenuIsActive(prev => !prev)
    }

    React.useEffect(() => {
        setContextMenuIsActive(false)
    }, [currentNote])

    return (
        <MenuItemComponent
            onContextMenu={handleContextMenu}
            handleClick={handleCurrentNote}
            value={value}
            icon={icon}
            isActive={currentNote?.id == id} id={id}
            contextMenuActive={contextMenuIsActive}
        />
    )
}