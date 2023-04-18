import { ITask } from "../../../Common/Context/Notes/Notes.types"

export interface ITaskContainer {
    task: ITask
}
export interface ITaskElement extends ITaskContainer {
    hover: boolean
    currentTask: ITask
    handleHover: () => void
}

export interface ITaskComponent extends ITaskElement {
    handleCurrentTask: (e: ITask) => void
    borderRadius: string
}