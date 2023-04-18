import { MdClose } from "react-icons/md"
import { useNotes } from "../../../../Common/Context"
import { ITask } from "../../../../Common/Context/Notes/Notes.types"
import { Stack, Typography } from "../../../../Components"
import { TaskContent } from "../../../../Components/Board/Notes/Task/TaskContent"
import { MenuLateral } from "../MenuLateral"
import { IMenuLateral } from "../MenuLateral.types"

export const MenuRight = ({ width, isActive, theme }: IMenuLateral) => {
    const { currentTask } = useNotes()
    return (
        <MenuLateral width={width} isActive={isActive}>
            <Stack width="100%" justify="end" style={{ padding: '.8rem' }}>
                <Typography variant="h2">
                    <MdClose />
                </Typography>
            </Stack>

            <Stack direction="column" style={{ padding: '0rem .8rem 0 .4rem' }} >
                <div style={{
                    width: '100%',
                    height: 'fit-content',
                    background: String(theme?.palette?.primary),
                    padding: '.64rem '
                }}>
                    <TaskContent task={currentTask as ITask} />
                </div>
            </Stack>
        </MenuLateral>
    )
}