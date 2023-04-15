import { Menu } from "./Menu"
import { useNotes } from "../../Common/Context"

interface IMenuContainer {
    type?: string
}
export const MenuContainer = ({ type = 'list' }: IMenuContainer) => {

    const { notes, notesDefault } = useNotes()
    let values = type == 'list' ? notes : notesDefault

    return (
        <Menu values={values} />
    )
}