import { INoteComponent } from "./Note.type"
import { NoteComponent } from "./Note"

export const Note = ({ note }: INoteComponent) => {
    return (
        <NoteComponent note={note} />
    )
}