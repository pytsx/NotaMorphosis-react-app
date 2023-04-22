import { Stack } from "../Stack"
import { MenuContainerStyled } from "./Menu.styled"
import { IMenu } from "./Menu.types"
import { MenuItem } from "./MenuItem"


export const MenuComponent = ({ values }: IMenu) => {
    return (
        <Stack height="100%" width="100%">
            <MenuContainerStyled style={{ height: "100%", width: '100%' }}>
                {
                    values?.map(item => (
                        <MenuItem key={item.id} {...item} />
                    ))
                }
            </MenuContainerStyled>

        </Stack>
    )
}