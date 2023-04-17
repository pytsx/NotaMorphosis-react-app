import { ITaskComponent, ITaskContainer } from "./Task.type"
import { TaskComponent } from "./Task"
import React from "react"
import { useTheme } from "../../../../Common/Context/Theme"

export const Task = ({ task }: ITaskContainer) => {
    const [hover, setHover] = React.useState<boolean>(false)
    const { theme } = useTheme()
    const handleHover = () => {
        setHover(prev => !prev)
    }
    return (
        <TaskComponent
            borderRadius={`${theme?.shape.borderRadius}rem`}
            task={task}
            handleHover={handleHover}
            hover={hover} />
    )
}