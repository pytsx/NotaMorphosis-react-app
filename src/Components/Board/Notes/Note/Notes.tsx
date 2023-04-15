import { NoteContainerStyled, NoteWrapperStyled } from "./Note.styled"

export const NoteComponent = () => {
    return (
        <NoteContainerStyled isActive={false}>
            <NoteWrapperStyled>
            </NoteWrapperStyled>
        </NoteContainerStyled>
    )
}