import { INoteContainer } from "./Note.type"
import { NoteComponent } from "./Note"
import React from "react"

export const Note = ({ note }: INoteContainer) => {
    const [hover, setHover] = React.useState<boolean>(false)
    const handleHover = () => {
        setHover(prev => !prev)
    }
    return (
        <NoteComponent note={note} handleHover={handleHover} hover={hover} />
    )
}