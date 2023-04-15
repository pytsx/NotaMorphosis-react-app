import { noteType } from "../../Common/Context/Notes/Notes.types"
import { Stack } from "../Stack"
import { MenuContainer } from "./Menu.styled"
import { MenuItem } from "./MenuItem"

export interface IMenu {
    values: noteType[]
}
export const Menu = ({ values }: IMenu) => {
    return (
        <Stack height="100%" width="100%">
            <MenuContainer style={{ height: "100%", width: '100%' }}>
                {
                    values.map(item => (
                        <MenuItem key={item.id} id={item.id} value={item} />
                    ))
                }
            </MenuContainer>

        </Stack>
    )
}