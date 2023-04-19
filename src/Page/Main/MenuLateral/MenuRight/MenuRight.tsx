import { MdClose } from "react-icons/md"
import { useNotes } from "../../../../Common/Context"
import { ITask } from "../../../../Common/Context/Notes/Notes.types"
import { Stack, Typography } from "../../../../Components"
import { MenuLateral } from "../MenuLateral"
import { IMenuLateral } from "../MenuLateral.types"
import { AddInput } from "../../../../Components/AddInput"
import { TaskContent } from "../../../../Components/Tasks/Task/TaskContent"
import { MenuCard } from "./MenuCard"
import React from "react"
import { MenuButton } from "./MenuButton"

export const MenuRight = ({ width, isActive, theme }: IMenuLateral) => {
    const { currentTask, currentNote, notesDefault, removeTask } = useNotes()

    const [stepInputValue, setStepInputValue] = React.useState<string>('')
    const handleOnChengeStepInput = (e: string) => {
        setStepInputValue(e)
        console.log(stepInputValue);

    }

    return (
        <MenuLateral width={width} isActive={isActive}>
            <Stack width="100%" justify="end" style={{ padding: '.8rem' }}>
                <Typography variant="h2">
                    <MdClose />
                </Typography>
            </Stack>

            <Stack direction="column" style={{ padding: '0rem .8rem 0 .4rem' }} >
                <MenuCard  >
                    <TaskContent task={currentTask as ITask} />
                    <AddInput
                        value={stepInputValue}
                        onChange={handleOnChengeStepInput}
                        placeholder="Adicionar etapa"
                        background='transparent'
                        color={String(currentNote?.color)}
                    />
                </MenuCard>
                {
                    currentTask?.role.categories.map(category => (
                        <MenuButton key={category.id} onClick={() => { }} eq={category.isInclude} label={category.label} icon={category.icon} />
                    ))
                }
            </Stack>
        </MenuLateral>
    )
}