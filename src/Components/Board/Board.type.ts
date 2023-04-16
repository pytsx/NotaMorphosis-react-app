import { INote, noteType } from "../../Common/Context/Notes/Notes.types";
import { Theme } from "../../Common/Context/Theme/Theme.types";

export interface IBoardComponent {
    note: noteType
    primaryColor: string
    secondaryColor: string
    theme: Theme
}