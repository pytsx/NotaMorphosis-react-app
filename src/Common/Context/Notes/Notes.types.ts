export interface ITask {
    label: string
    id: string
    description: string
}
export type noteType = {
    label: string,
    id: string,
    icon: any,
    color: string,
    tasks: ITask[]
}
export interface INotesContext {
    notesDefault: noteType[] | []
    notes: noteType[] | []
    handleCurrentNote: (e: noteType) => void
    currentNote?: noteType
}