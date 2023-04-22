import { useTheme } from "../../../Common/Context/Theme"
import { Theme } from "../../../Common/Context/Theme/Theme.types"
import { Stack } from "../../Stack"
import { Typography } from "../../Typography"
import { MenuItemActiveIndicator, MenuItemStyled, MenuItemWrapperStyled } from "./MenuItem.styled"
import { IMenuItem } from "./MenuItem.type"
import { ActionButtons } from "./ActionButtons"
import { generateIcon, useNotes } from "../../../Common/Context"
import { HightLigter } from "../../HightLighter"

export const MenuItemComponent = ({ isActive, color, icon, label, id, handleClick, onContextMenu }: IMenuItem) => {
    const { theme } = useTheme()
    const { isLoading } = useNotes()
    return (
        <MenuItemStyled style={{ opacity: isLoading ? .5 : 1, filter: isLoading ? 'grayscale(50%)' : 'grayscale(0%)' }} onContextMenu={onContextMenu} onClick={() => handleClick(String(id))} isActive={isActive}>
            <MenuItemWrapperStyled theme={theme as Theme} isActive={isActive}>
                <MenuItemActiveIndicator isActive={isActive} />
                <div style={{ margin: '0 .4rem 0 0' }}>
                    <Typography variant="h3" color={color}>
                        {generateIcon(Number(icon))}
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
                        {label}
                    </Typography>
                    <span style={{
                        background: String(theme?.palette?.secondary),
                        width: ' fit-content',
                        height: 'fit-content',
                        padding: '.32rem ',
                        borderRadius: '50rem',
                        boxShadow: `0px 1px 4px -1px ${String(theme?.palette?.secondary)}`
                    }}>
                        <Typography variant="h6" weight={400} >
                            {1}
                        </Typography>
                    </span>
                </Stack>
            </MenuItemWrapperStyled>
            <ActionButtons theme={theme as Theme} isActive={true} />
        </MenuItemStyled>
    )
}