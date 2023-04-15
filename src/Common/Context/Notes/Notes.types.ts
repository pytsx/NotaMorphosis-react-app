export type noteType = { label: string, id: string, icon: any }
export interface INotesContext {
    notesDefault: noteType[] | []
    notes: noteType[] | []
    handleCurrentNote: (e: noteType) => void
    currentNote?: noteType
}