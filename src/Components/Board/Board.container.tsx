import { useNotes } from "../../Common/Context"
import { noteType } from "../../Common/Context/Notes/Notes.types"
import { BoardComponent } from "./Board"

export const Board = () => {
    const { currentNote } = useNotes()
    let primaryColor = currentNote?.color
    let secondaryColor = currentNote?.color + 'de'

    return (
        <BoardComponent note={currentNote as noteType} primaryColor={primaryColor as string} secondaryColor={secondaryColor} />
    )
}