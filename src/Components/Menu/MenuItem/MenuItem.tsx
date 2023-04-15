import { useNotes } from "../../../Common/Context"
import { Stack } from "../../Stack"
import { Typography } from "../../Typography"
import { MenuItemActiveIndicator, MenuItemStyled } from "./MenuItem.styled"
import { IMenuItem } from "./MenuItem.type"

export const MenuItemComponent = ({ isActive, value, icon, handleClick }: IMenuItem) => {
    return (
        <MenuItemStyled onClick={() => handleClick(value)} isActive={isActive}>
            <MenuItemActiveIndicator isActive={isActive} />
            <div style={{ margin: '0 .4rem 0 0' }}>
                <Typography variant="h3">
                    {value.icon}
                </Typography>
            </div>
            <div style={{ margin: '0 0 0 .4rem' }}>
                <Typography lineHeight=".8rem" color="#fafafa" weight={400}>
                    {value?.label}
                </Typography>
            </div>
        </MenuItemStyled>
    )
}