import React from "react"
import { useNotes } from "../../../Common/Context"
import { TasksComponent } from "./Tasks"
import { ITask } from "../../../Common/Context/Notes/Notes.types"

export const Tasks = () => {
    const { currentNote } = useNotes()
    const [tasks, setTasks] = React.useState<ITask[]>()
    const handleNotes = () => {
        if (currentNote?.tasks) {
            const diff = 9 - currentNote?.tasks.length
            const newTasks: any[] = [...currentNote?.tasks]
            for (let i = 0; i < diff; i++) {
                newTasks.push(i)
            }
            setTasks(newTasks)
        }
    }
    React.useEffect(() => {

        handleNotes()
    }, [currentNote?.tasks])
    return (
        <TasksComponent tasks={tasks as ITask[]} />
    )
}