export interface ITask {
    label: string
    id: string
    description: string
    isComplete: boolean
    role: {
        categories: {
            label: string
            id: string
            isInclude: boolean
            icon: any
        }[]
    }
    steps: {
        label: string
        id: string
    }[]
}
export type noteType = {
    label: string,
    id: string,
    icon: any,
    color: string,
    isDefault?: boolean,
    tasks?: ITask[]
}
export interface INotesContext {
    notesDefault: noteType[] | []
    notes: noteType[] | []
    handleCurrentNote: (id: string) => void
    currentNote?: noteType
    currentTask?: ITask
    handleCurrentTask: (e: ITask) => void
    addTask: (label: string) => void
    addNote: () => void
    removeNote: () => void
    removeTask: (id: string) => void
    completeTask: (id: string) => void
    isLoading: boolean
}