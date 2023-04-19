import { useTheme } from "../../../Common/Context/Theme"
import { Theme } from "../../../Common/Context/Theme/Theme.types"
import { Stack } from "../../Stack"
import { Typography } from "../../Typography"
import { MenuItemActiveIndicator, MenuItemStyled, MenuItemWrapperStyled } from "./MenuItem.styled"
import { IMenuItem } from "./MenuItem.type"
import { ActionButtons } from "./ActionButtons"

export const MenuItemComponent = ({ isActive, value, contextMenuActive, handleClick, onContextMenu }: IMenuItem) => {
    const { theme } = useTheme()
    return (
        <MenuItemStyled onContextMenu={onContextMenu} onClick={() => handleClick(value)} isActive={isActive}>
            <MenuItemWrapperStyled theme={theme as Theme} isActive={isActive}>
                <MenuItemActiveIndicator isActive={isActive} />
                <div style={{ margin: '0 .4rem 0 0' }}>
                    <Typography variant="h3" color={value.color}>
                        {value.icon}
                    </Typography>
                </div>
                <Stack
                    justify="space-between"
                    align='center'
                    style={{
                        margin: '0 0 0 .4rem',
                    }}
                >
                    <Typography lineHeight=".8rem" weight={400}>
                        {value?.label}
                    </Typography>
                    <span style={{
                        background: String(theme?.palette?.secondary),
                        width: ' fit-content',
                        height: 'fit-content',
                        padding: '.32rem ',
                        borderRadius: '50rem',
                        opacity: value?.tasks.length >= 1 && !isActive ? 1 : 0,
                        boxShadow: `0px 1px 4px -1px ${String(theme?.palette?.secondary)}`
                    }}>
                        <Typography variant="h6" weight={400} >
                            {value?.tasks.length}
                        </Typography>
                    </span>
                </Stack>
            </MenuItemWrapperStyled>
            <ActionButtons theme={theme as Theme} isActive={value.personalNote && isActive} />
        </MenuItemStyled>
    )
}