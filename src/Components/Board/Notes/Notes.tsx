import React from "react"
import { useNotes } from "../../../Common/Context"
import { Note } from "./Note/Note.container"
import { NotesContainerStyled, NotesWrapperStyled } from "./Notes.styled"

export const NotesComponent = () => {
    const { currentNote } = useNotes()
    const [notes, setNotes] = React.useState<any[]>()
    const handleNotes = () => {
        if (currentNote?.notes) {
            const diff = 10 - currentNote?.notes.length
            const newNotes: any[] = [...currentNote?.notes]
            for (let i = 0; i < diff; i++) {
                newNotes.push(i)
            }
            setNotes(newNotes)
        }
    }
    React.useEffect(() => {

        handleNotes()
    }, [currentNote?.notes])

    return (
        <NotesWrapperStyled>
            <NotesContainerStyled>
                {
                    notes?.map(note => (
                        <Note note={note} key={note.id} />
                    ))
                }
            </NotesContainerStyled>
        </NotesWrapperStyled>
    )
}
