import { MdClose, MdDelete, MdDeleteOutline } from "react-icons/md"
import { useNotes } from "../../../../Common/Context"
import { ITask } from "../../../../Common/Context/Notes/Notes.types"
import { Stack, Typography } from "../../../../Components"
import { MenuLateral } from "../MenuLateral"
import { IMenuLateral } from "../MenuLateral.types"
import { AddInput } from "../../../../Components/AddInput"
import { TaskContent } from "../../../../Components/Tasks/Task/TaskContent"
import { MenuCard } from "./MenuCard"
import React from "react"

export const MenuRight = ({ width, isActive, theme }: IMenuLateral) => {
    const { currentTask, currentNote } = useNotes()
    const [hoverDelete, setHoverDelete] = React.useState<boolean>(false)
    const [stepInputValue, setStepInputValue] = React.useState<string>('')
    const handleOnChengeStepInput = (e: string) => {
        setStepInputValue(e)
        console.log(stepInputValue);

    }
    const handleHoverDelete = () => {
        setHoverDelete(prev => !prev)
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

                <MenuCard>
                    <Stack style={{ padding: "0 .8rem .8rem .8rem" }}>

                        <Stack align="center" >
                            <Typography variant="h3">
                                {currentNote?.icon}
                            </Typography>
                            <Typography variant="h5" weight={400} margin="0 0 0 .4rem">
                                {currentNote?.label}
                            </Typography>
                        </Stack>
                        <span onMouseEnter={handleHoverDelete} onMouseLeave={handleHoverDelete}>
                            <Typography
                                color={hoverDelete
                                    ? `${theme?.palette.red}`
                                    : String(theme?.palette.typography.primary)}
                                variant="h3"
                                margin="0 .4rem 0 0"
                            >
                                <span style={{ display: hoverDelete ? 'none' : 'flex' }}>
                                    <MdDeleteOutline />
                                </span>
                                <span style={{ display: !hoverDelete ? 'none' : 'flex' }}>
                                    <MdDelete />
                                </span>
                            </Typography>
                        </span>
                    </Stack>
                </MenuCard>
            </Stack>
        </MenuLateral>
    )
}