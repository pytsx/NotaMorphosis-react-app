import { INote, noteType } from "../../Common/Context/Notes/Notes.types";

export interface IBoardComponent {
    note: noteType
    primaryColor: string
    secondaryColor: string
}