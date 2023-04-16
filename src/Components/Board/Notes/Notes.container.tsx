import React from "react"
import { useNotes } from "../../../Common/Context"
import { NotesComponent } from "./Notes"
import { INote } from "../../../Common/Context/Notes/Notes.types"

export const Notes = () => {
    const { currentNote } = useNotes()
    const [notes, setNotes] = React.useState<INote[]>()
    const handleNotes = () => {
        if (currentNote?.notes) {
            const diff = 9 - currentNote?.notes.length
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
        <NotesComponent notes={notes as INote[]} />
    )
}