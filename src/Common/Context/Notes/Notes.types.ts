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
    personalNote: boolean,
    tasks: ITask[]
}
export interface INotesContext {
    notesDefault: noteType[] | []
    notes: noteType[] | []
    handleCurrentNote: (e: noteType) => void
    currentNote?: noteType
    currentTask?: ITask
    handleCurrentTask: (e: ITask) => void
    addTask: (label: string) => void
    addNote: () => void
    removeNote: () => void
}