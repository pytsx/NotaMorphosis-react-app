import React from "react";
import { IChildren } from "../../Types";
import { INotesContext, noteType } from "./Notes.types";
import { useAPI } from "../APIcontext";
import { v4 as uuidv4 } from 'uuid'
import { RiFileListLine, RiSunFoggyLine, RiCheckboxBlankCircleLine, RiCalendarTodoLine, RiUserShared2Line, RiMailLine } from 'react-icons/ri';

export const NotesContext = React.createContext<INotesContext>({
    notes: [],
    notesDefault: [],
    handleCurrentNote: () => { }
})

export const NotesProvider = ({ children }: IChildren) => {
    const [notes, setNotes] = React.useState<noteType[]>([])
    const [notesDefault, setNotesDefault] = React.useState<noteType[]>([])
    const [currentNote, setCurrentNote] = React.useState<noteType>()
    const { data } = useAPI()


    const values = [
        {
            label: 'Meu Dia',
            id: uuidv4(),
            icon: <RiSunFoggyLine />,
            notes: [
                {
                    id: uuidv4(),
                    label: '',
                    description: ''
                }
            ]
        },
        {
            label: 'Importante',
            id: uuidv4(),
            icon: <RiCheckboxBlankCircleLine />,
            notes: [
                {
                    id: uuidv4(),
                    label: '',
                    description: ''
                }
            ]
        },
        {
            label: 'Planejado',
            id: uuidv4(),
            icon: <RiCalendarTodoLine />,
            notes: [
                {
                    id: uuidv4(),
                    label: '',
                    description: ''
                }
            ]
        },
        {
            label: 'Atribuído a mim',
            id: uuidv4(),
            icon: <RiUserShared2Line />,
            notes: [
                {
                    id: uuidv4(),
                    label: '',
                    description: ''
                }
            ]
        },
        {
            label: 'Email sinalizado',
            id: uuidv4(),
            icon: <RiMailLine />,
            notes: [
                {
                    id: uuidv4(),
                    label: '',
                    description: ''
                }
            ]
        },
    ];

    const values1 = [
        { label: 'Lista 1', id: uuidv4(), icon: <RiFileListLine /> },

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