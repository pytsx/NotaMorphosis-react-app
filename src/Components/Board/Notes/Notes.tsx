import { Note } from "./Note/Note.container"
import { NotesContainerStyled, NotesWrapperStyled } from "./Notes.styled"

export const NotesComponent = () => {
    return (
        <NotesWrapperStyled>
            <NotesContainerStyled>
                {
                    [1, 2, 3, 4, 5, 6, 7].map(item => (
                        <Note key={item * 1000 ** 2 + item} />
                    ))
                }
            </NotesContainerStyled>
        </NotesWrapperStyled>
    )
}