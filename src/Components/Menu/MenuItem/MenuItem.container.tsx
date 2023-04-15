import { MenuItemComponent } from "./MenuItem"
import { IMenuItemContainer } from "./MenuItem.type"
import { useNotes } from "../../../Common/Context"

export const MenuItem = ({ value, icon, id }: IMenuItemContainer) => {
    const { handleCurrentNote, currentNote } = useNotes()


    return (
        <MenuItemComponent handleClick={handleCurrentNote} value={value} icon={icon} isActive={currentNote?.id == id} id={id} />
    )
}