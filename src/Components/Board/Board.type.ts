import { ITask, noteType } from "../../Common/Context/Notes/Notes.types";
import { Theme } from "../../Common/Context/Theme/Theme.types";

export interface IBoardComponent {
    note: noteType
    primaryColor: string
    secondaryColor: string
    theme: Theme
    width?: number
    currentTask?: ITask
    activeMenuIcon: boolean
}