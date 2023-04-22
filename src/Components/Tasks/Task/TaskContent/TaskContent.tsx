import { MdStarBorder } from "react-icons/md";
import { ITaskContent } from "./TaskContent.type";
import { Typography } from "../../../Typography";
import { Stack } from "../../../Stack";
import { CheckIcon } from "../../..";
import { useNotes } from "../../../../Common/Context";
import React from "react";

export const TaskContent = ({ task }: ITaskContent) => {
    const { removeTask, currentTask, completeTask } = useNotes()
    const [isActive, setIsActive] = React.useState<boolean>(currentTask?.id == task?.id && task?.isComplete)

    const handleActive = () => {
        completeTask(task.id)
        setIsActive(prev => !prev)
    }

    React.useEffect(() => {
        setIsActive(task?.isComplete)
    }, [task?.isComplete, currentTask])

    React.useEffect(() => {
        setIsActive(task?.isComplete)
    }, [])

    return (
        <Stack style={{ padding: '0 .8rem' }} width="100%">
            <span onClick={() => removeTask(task?.id)}>
                <CheckIcon handleActive={handleActive} active={isActive} />
            </span>
            <span
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '0 .4rem'
                }}>
                <Typography wrap="wrap" lineHeight="1.2" variant="h4" weight={400}>
                    {task?.label}
                </Typography>

                <Typography variant="h2">
                    <MdStarBorder />
                </Typography>
            </span>
        </Stack>
    )
}