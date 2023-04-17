import { ITask } from "../../../../Common/Context/Notes/Notes.types";

export interface ITaskContainer {
    task: ITask
}

export interface ITaskComponent extends ITaskContainer {
    hover: boolean
    handleHover: () => void
    borderRadius: string
}