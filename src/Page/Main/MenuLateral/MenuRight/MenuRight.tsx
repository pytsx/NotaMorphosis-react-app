import { MdClose } from "react-icons/md"
import { useNotes } from "../../../../Common/Context"
import { ITask } from "../../../../Common/Context/Notes/Notes.types"
import { Stack, Typography } from "../../../../Components"
import { MenuLateral } from "../MenuLateral"
import { IMenuLateral } from "../MenuLateral.types"
import { AddInput } from "../../../../Components/AddInput"
import { TaskContent } from "../../../../Components/Tasks/Task/TaskContent"

export const MenuRight = ({ width, isActive, theme }: IMenuLateral) => {
    const { currentTask, currentNote } = useNotes()
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
                    padding: '2rem .2rem .2rem .2rem'
                }}>
                    <TaskContent task={currentTask as ITask} />

                    <AddInput placeholder="Adicionar etapa" background='transparent' color={String(currentNote?.color)} />
                </div>
            </Stack>
        </MenuLateral>
    )
}