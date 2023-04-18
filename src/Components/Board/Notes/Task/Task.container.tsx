import { ITaskContainer } from "./Task.type"
import { TaskComponent } from "./Task"
import React from "react"
import { useTheme } from "../../../../Common/Context/Theme"
import { useNotes } from "../../../../Common/Context"
import { ITask } from "../../../../Common/Context/Notes/Notes.types"

export const Task = ({ task }: ITaskContainer) => {
    const { theme } = useTheme()
    const { handleCurrentTask, currentTask } = useNotes()

    const [hover, setHover] = React.useState<boolean>(false)

    const handleHover = () => {
        setHover(prev => !prev)
    }

    return (
        <TaskComponent
            borderRadius={`${theme?.shape.borderRadius}rem`}
            task={task}
            handleHover={handleHover}
            hover={hover}
            handleCurrentTask={handleCurrentTask}
            currentTask={currentTask as ITask}
        />
    )
}