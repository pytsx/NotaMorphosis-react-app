import React from "react";
import { IChildren } from "../../Types";
import { INotesContext, ITask, noteType } from "./Notes.types";
import { v4 as uuidv4 } from 'uuid'
import { RiFileListLine } from 'react-icons/ri';
import { MEU_DIA, generateValues } from "./appData";
import { useAPI } from "../APIcontext";

export const NotesContext = React.createContext<INotesContext>({
    notes: [],
    notesDefault: [],
    handleCurrentNote: () => { },
    handleCurrentTask: () => { },
    currentTask: undefined,
    currentNote: undefined,
    addTask: () => { },
    addNote: () => { },
    removeNote: () => { },
    removeTask: () => { },
    completeTask: () => { },
    isLoading: false

})

export const NotesProvider = ({ children }: IChildren) => {
    const [notes, setNotes] = React.useState<noteType[] | []>([])
    const [notesDefault, setNotesDefault] = React.useState<noteType[]>([])
    const [currentNote, setCurrentNote] = React.useState<noteType | undefined>()
    const [currentNoteIndex, setCurrentNoteIndex] = React.useState<number>(notes?.findIndex(el => el.id === currentNote?.id))

    const [currentTask, setCurrentTask] = React.useState<ITask | undefined>()
    const [interator, setInterator] = React.useState<number>(1)
    const [isLoading, setIsLoading] = React.useState<boolean>(false)

    const { data, setUsername } = useAPI()

    React.useEffect(() => {

        setNotes(data?.notes?.filter((el: any) => !el.isDefault))
        setNotesDefault(generateValues())
    }, [])

    const handleCurrentNote = (id: string) => {
        if (notes) {

            let allNotes = [...notes, ...notesDefault]
            setCurrentNote(allNotes.find(el => el.id == id))
        } else {
            setCurrentNote(notesDefault.find(el => el.id == id))
        }
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

    const addNote = async () => {
        setIsLoading(true)
        let defaultNote = {
            label: `Lista ${interator}`,
            id: `${interator}-${uuidv4()}`,
            icon: 4,
            color: '#D1C4A4',
            isDefault: false,
            tasks: []
        }
        let newArr: noteType[] = []
        setTimeout(() => {
            if (!notes) {
                setNotes([defaultNote])
            } else {
                setNotes(prev => [...prev, defaultNote])
            }
            setIsLoading(false)
        }, 200)
        return
        try {
            // const response = await fetch('http://localhost:5000/notes', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(defaultNote)
            // })
            // const data = await response.json()
            // console.log(data);
            // setInterator(prev => prev += 1)
            // setIsLoading(false)
            // return data
        } catch (error) {
            console.log(error);

            setNotes(prev => {
                return [...prev, defaultNote]
            })
        }
    }



    const removeNote = () => {
        setCurrentNoteIndex(notes.findIndex(el => el.id === currentNote?.id))
        setNotes(prev => prev.filter(el => el.id != currentNote?.id))
        setCurrentNote(notes[currentNoteIndex > 0 ? currentNoteIndex - 1 : currentNoteIndex] || notesDefault[notesDefault.length - 1])
    }

    const addTask = (label: string) => {
        if (!currentNote?.isDefault && label?.trim()?.length != 0) {
            let newNote = currentNote
            newNote?.tasks?.push({
                label,
                id: `${label?.replaceAll(' ', '-')}-${uuidv4()}`,
                description: '',
                isComplete: false,
                role: {
                    categories: notesDefault.map(note => ({
                        id: note.id,
                        label: note.label,
                        icon: note.icon,
                        isInclude: note.label == MEU_DIA
                    }))
                },
                steps: []
            })
            setNotes(prev => prev.filter(el => el.id == newNote?.id ? newNote : el))
            setCurrentNote(newNote)
        }
    }



    const completeTask = (id: string) => {
        const updatedTasks = currentNote?.tasks?.map(task => {
            if (task.id === id) {
                return {
                    ...task,
                    isComplete: !task.isComplete
                }
            } else {
                return task
            }
        })
        if (updatedTasks) {
            const updatedNote = {
                ...currentNote,
                tasks: updatedTasks
            }
            setNotes(prev => prev.map(note => note?.id === updatedNote?.id ? updatedNote : note) as noteType[])
            setCurrentNote(updatedNote as noteType)
        }
    }

    React.useEffect(() => {
        setCurrentNote(currentNoteIndex > 0 ? notes[currentNoteIndex > 0 ? currentNoteIndex - 1 : currentNoteIndex] : notesDefault[notesDefault.length - 1])
    }, [currentNoteIndex])



    const removeTask = (id: string) => {
        console.log(id);
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
                addNote,
                removeNote,
                removeTask,
                completeTask,
                isLoading
            }}>
            {children}
        </NotesContext.Provider>
    )
}