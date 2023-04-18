import { ITask } from "../../../../Common/Context/Notes/Notes.types";

export interface ITaskContainer {
    task: ITask
    hover: boolean
    currentTask: ITask
    handleHover: () => void
}

export interface ITaskComponent extends ITaskContainer {
    handleCurrentTask: (e: ITask) => void
    borderRadius: string
}