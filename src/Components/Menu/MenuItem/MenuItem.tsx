import { useTheme } from "../../../Common/Context/Theme"
import { Theme } from "../../../Common/Context/Theme/Theme.types"
import { Stack } from "../../Stack"
import { Typography } from "../../Typography"
import { MenuItemActiveIndicator, MenuItemStyled, MenuItemWrapperStyled } from "./MenuItem.styled"
import { IMenuItem } from "./MenuItem.type"
import { generateIcon, useNotes } from "../../../Common/Context"

export const MenuItemComponent = ({ isActive, tasks, color, icon, label, id, handleClick, onContextMenu }: IMenuItem) => {
    const { theme } = useTheme()
    const { isLoading, currentNote } = useNotes()
    return (
        <MenuItemStyled
            style={{ opacity: isLoading ? .5 : 1, filter: isLoading ? 'grayscale(50%)' : 'grayscale(0%)' }}
            onContextMenu={onContextMenu}
            onClick={() => handleClick(String(id))}
            isActive={isActive}
        >
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
                        background: String(theme?.palette?.bgcolor),
                        width: ' fit-content',
                        height: '1.4rem',
                        padding: '.32rem ',
                        borderRadius: '50rem',
                        opacity: tasks?.filter(el => !el?.isComplete)?.length ? 1 : 0,
                        boxShadow: `0px 1px 4px -1px ${String(theme?.palette?.dark)}`
                    }}>
                        <Typography variant="captcha" weight={400} >
                            {tasks?.length}
                        </Typography>
                    </span>
                </Stack>
            </MenuItemWrapperStyled>
            {/* <ActionButtons theme={theme as Theme} isActive={true} /> */}
        </MenuItemStyled>
    )
}