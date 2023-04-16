export interface INote {
    label: string
    id: string
    description: string
}
export type noteType = {
    label: string,
    id: string,
    icon: any,
    color: string,
    notes: INote[]
}
export interface INotesContext {
    notesDefault: noteType[] | []
    notes: noteType[] | []
    handleCurrentNote: (e: noteType) => void
    currentNote?: noteType
}