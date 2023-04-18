import React from "react";
import { IChildren } from "../../Types";
import { INotesContext, ITask, noteType } from "./Notes.types";
import { v4 as uuidv4 } from 'uuid'
import { RiFileListLine } from 'react-icons/ri';
import { generateValues } from "./appData";
import { usePerfil } from "../Perfil";

export const NotesContext = React.createContext<INotesContext>({
    notes: [],
    notesDefault: [],
    handleCurrentNote: () => { },
    handleCurrentTask: () => { },
    currentTask: undefined,
    currentNote: undefined,
    addTask: () => { },
    addNote: () => { }
})

export const NotesProvider = ({ children }: IChildren) => {
    const [notes, setNotes] = React.useState<noteType[] | []>([])
    const [notesDefault, setNotesDefault] = React.useState<noteType[]>([])
    const [currentNote, setCurrentNote] = React.useState<noteType | undefined>()
    const [currentTask, setCurrentTask] = React.useState<ITask | undefined>()
    const { perfil } = usePerfil()

    React.useEffect(() => {
        setNotesDefault(generateValues())
        setNotes([])
    }, [])

    const handleCurrentNote = (e: noteType) => {
        setCurrentNote(prev => {
            if (prev) {
                if (prev?.id != e.id) {
                    setCurrentTask(undefined)
                    return e
                } else {
                    return prev
                }
            }
            return e
        })
    }

    const handleCurrentTask = (e: ITask) => {
        setCurrentTask(prev => {
            if (prev) {
                if (prev?.id == e.id) {
                    return undefined
                }
            }
            return e
        })
    }

    const addNote = () => {
        setNotes(prev => {
            let lastLabel = prev.length + 1

            let defaultNote = {
                label: `Lista ${lastLabel}`,
                id: `${lastLabel}-${uuidv4()}`,
                icon: <RiFileListLine />,
                color: '#D1C4A4',
                personalNote: true,
                tasks: []
            }

            return [...prev, defaultNote]
        })
    }

    const updNote = () => {

    }

    const addTask = (label: string) => {
        if (currentNote?.personalNote) {
            let newNote = currentNote
            newNote.tasks.push({
                label,
                id: `${label.replaceAll(' ', '-')}-${uuidv4()}`,
                description: ''
            })
            setNotes(prev => prev.filter(el => el.id == newNote.id ? newNote : el))
            setCurrentNote(newNote)
        }
    }

    const updTask = () => {

    }



    return (
        <NotesContext.Provider
            value={{
                notes,
                handleCurrentNote,
                currentNote,
                notesDefault,
                handleCurrentTask,
                currentTask,
                addTask,
                addNote
            }}>
            {children}
        </NotesContext.Provider>
    )
}