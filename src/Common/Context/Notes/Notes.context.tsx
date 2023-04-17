import React from "react";
import { IChildren } from "../../Types";
import { INotesContext, noteType } from "./Notes.types";
import { useAPI } from "../APIcontext";
import { v4 as uuidv4 } from 'uuid'
import { RiFileListLine, RiSunFoggyLine, RiCheckboxBlankCircleLine, RiCalendarTodoLine, RiUserShared2Line, RiMailLine, RiStarLine } from 'react-icons/ri';

export const NotesContext = React.createContext<INotesContext>({
    notes: [],
    notesDefault: [],
    handleCurrentNote: () => { },
    currentNote: undefined
})

export const NotesProvider = ({ children }: IChildren) => {
    const [notes, setNotes] = React.useState<noteType[]>([])
    const [notesDefault, setNotesDefault] = React.useState<noteType[]>([])
    const [currentNote, setCurrentNote] = React.useState<noteType | undefined>()





    const values = [{
        label: 'Meu Dia',
        id: uuidv4(),
        icon: <RiSunFoggyLine />,
        color: '#C6A4D1', // cor de base        
        notes: [
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
        notes: [
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
        notes: [
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
        notes: [
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
        notes: [
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
            notes: []
        },

    ]

    React.useEffect(() => {
        setNotesDefault(values)
        setNotes(values1)
    }, [])

    const handleCurrentNote = (e: noteType) => {
        setCurrentNote(e)
    }


    return (
        <NotesContext.Provider value={{ notes, handleCurrentNote, currentNote, notesDefault }}>
            {children}
        </NotesContext.Provider>
    )
}