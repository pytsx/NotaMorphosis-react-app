import { Note } from "./Note/Note.container"
import { NotesContainerStyled, NotesWrapperStyled } from "./Notes.styled"
import { INotesComponent } from "./Notes.typs"


export const NotesComponent = ({ notes }: INotesComponent) => (
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
