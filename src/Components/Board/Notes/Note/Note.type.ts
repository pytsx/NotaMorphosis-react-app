import { INote } from "../../../../Common/Context/Notes/Notes.types";

export interface INoteContainer {
    note: INote
}

export interface INoteComponent extends INoteContainer {
    hover: boolean
    handleHover: () => void
}