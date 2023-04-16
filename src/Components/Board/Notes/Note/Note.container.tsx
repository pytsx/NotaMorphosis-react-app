import { INoteContainer } from "./Note.type"
import { NoteComponent } from "./Note"
import React from "react"
import { useTheme } from "../../../../Common/Context/Theme"

export const Note = ({ note }: INoteContainer) => {
    const [hover, setHover] = React.useState<boolean>(false)
    const { theme } = useTheme()
    const handleHover = () => {
        setHover(prev => !prev)
    }
    return (
        <NoteComponent borderRadius={`${theme?.shape.borderRadius}rem`} note={note} handleHover={handleHover} hover={hover} />
    )
}