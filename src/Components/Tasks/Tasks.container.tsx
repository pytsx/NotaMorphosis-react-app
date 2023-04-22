import React from "react"
import { TasksComponent } from "./Tasks"
import { ITask } from "../../Common/Context/Notes/Notes.types"
import { useNotes } from "../../Common/Context"

export const Tasks = () => {

    const { currentNote, addTask } = useNotes()
    const [tasks, setTasks] = React.useState<ITask[]>()

    const handleNotes = () => {
        if (currentNote?.tasks) {
            const diff = 9 - currentNote?.tasks.length
            let newTasks: any[] = []
            if (!currentNote?.isDefault) {
                newTasks = [...currentNote?.tasks.filter(el => !el?.isComplete)]
            } else {
                newTasks = [...currentNote?.tasks]
            }
            for (let i = 0; i < diff; i++) {
                newTasks.push(i)
            }
            setTasks(newTasks)
        }
    }

    React.useEffect(() => {
        handleNotes()
    }, [currentNote?.tasks, addTask])

    return (
        <TasksComponent tasks={tasks as ITask[]} />
    )
}