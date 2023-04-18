import React from "react";
import { IChildren } from "../../Types";
import { INotesContext, ITask, noteType } from "./Notes.types";
import { v4 as uuidv4 } from 'uuid'
import { RiFileListLine, RiSunFoggyLine, RiCalendarTodoLine, RiUserShared2Line, RiMailLine, RiStarLine } from 'react-icons/ri';

const values = [{
    label: 'Meu Dia',
    id: uuidv4(),
    icon: <RiSunFoggyLine />,
    color: '#C6A4D1', // cor de base        
    tasks: [
        {
            id: uuidv4(),
            label: 'teste1',
            description: 'description'
        },
        {
            id: uuidv4(),
            label: 'teste2',
            description: 'description'
        },
        {
            id: uuidv4(),
            label: 'teste3',
            description: 'description'
        },
        {
            id: uuidv4(),
            label: 'teste4',
            description: 'description'
        },
        {
            id: uuidv4(),
            label: 'teste5',
            description: 'description'
        },
        {
            id: uuidv4(),
            label: 'teste6',
            description: 'description'
        },
        {
            id: uuidv4(),
            label: 'teste7',
            description: 'description'
        },
        {
            id: uuidv4(),
            label: 'teste8',
            description: 'description'
        },
        {
            id: uuidv4(),
            label: 'teste9',
            description: 'description'
        },
        {
            id: uuidv4(),
            label: 'teste10',
            description: 'description'
        },
        {
            id: uuidv4(),
            label: 'teste',
            description: 'description'
        },
        {
            id: uuidv4(),
            label: 'teste',
            description: 'description'
        },
        {
            id: uuidv4(),
            label: 'teste',
            description: 'description'
        },
        {
            id: uuidv4(),
            label: 'teste',
            description: 'description'
        }

    ]
},
{
    label: 'Importante',
    id: uuidv4(),
    icon: <RiStarLine />,
    color: '#B8A3C3', // cor complementar
    tasks: [
        {
            id: uuidv4(),
            label: 'teste',
            description: 'description'
        }
    ]
},
{
    label: 'Planejado',
    id: uuidv4(),
    icon: <RiCalendarTodoLine />,
    color: '#84A9F9', // outra variação da cor de base
    tasks: [
        {
            id: uuidv4(),
            label: 'teste',
            description: 'description'
        }
    ]
},
{
    label: 'Atribuído a mim',
    id: uuidv4(),
    icon: <RiUserShared2Line />,
    color: '#C8A8AE', // outra variação da cor complementar
    tasks: [
        {
            id: uuidv4(),
            label: 'teste',
            description: 'description'
        }
    ]
},
{
    label: 'Email sinalizado',
    id: uuidv4(),
    icon: <RiMailLine />,
    color: '#D1C4A4', // outra variação da cor de base
    tasks: [
        {
            id: uuidv4(),
            label: 'teste',
            description: 'description'
        }
    ]
},
];


const values1 = [
    {
        label: 'Lista 1',
        id: uuidv4(),
        icon: <RiFileListLine />,
        color: '#D1C4A4',
        tasks: []
    },
]

export const NotesContext = React.createContext<INotesContext>({
    notes: [],
    notesDefault: [],
    handleCurrentNote: () => { },
    handleCurrentTask: () => { },
    currentTask: undefined,
    currentNote: undefined
})

export const NotesProvider = ({ children }: IChildren) => {
    const [notes, setNotes] = React.useState<noteType[]>([])
    const [notesDefault, setNotesDefault] = React.useState<noteType[]>([])
    const [currentNote, setCurrentNote] = React.useState<noteType | undefined>()
    const [currentTask, setCurrentTask] = React.useState<ITask | undefined>()


    React.useEffect(() => {
        setNotesDefault(values)
        setNotes(values1)
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

    return (
        <NotesContext.Provider
            value={{
                notes,
                handleCurrentNote,
                currentNote,
                notesDefault,
                handleCurrentTask,
                currentTask
            }}>
            {children}
        </NotesContext.Provider>
    )
}