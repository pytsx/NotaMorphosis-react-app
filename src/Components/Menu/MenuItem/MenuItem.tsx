import { Typography } from "../../Typography"
import { ContextMenu } from "./ContextMenu"
import { MenuItemActiveIndicator, MenuItemStyled, MenuItemWrapperStyled } from "./MenuItem.styled"
import { IMenuItem } from "./MenuItem.type"

export const MenuItemComponent = ({ isActive, value, contextMenuActive, handleClick, onContextMenu }: IMenuItem) => {
    return (
        <MenuItemStyled onContextMenu={onContextMenu} onClick={() => handleClick(value)} isActive={isActive}>
            <MenuItemWrapperStyled isActive={isActive}>
                <MenuItemActiveIndicator isActive={isActive} />
                <div style={{ margin: '0 .4rem 0 0' }}>
                    <Typography variant="h3" color={value.color}>
                        {value.icon}
                    </Typography>
                </div>
                <div style={{ margin: '0 0 0 .4rem' }}>
                    <Typography lineHeight=".8rem" color="#fafafa" weight={400}>
                        {value?.label}
                    </Typography>
                </div>
            </MenuItemWrapperStyled>
            <div style={{ display: contextMenuActive ? 'flex' : 'none' }}>
                <ContextMenu />
            </div>
        </MenuItemStyled>
    )
}