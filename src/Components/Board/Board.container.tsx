import React from "react"
import { useNotes } from "../../Common/Context"
import { noteType } from "../../Common/Context/Notes/Notes.types"
import { useTheme } from "../../Common/Context/Theme"
import { Theme } from "../../Common/Context/Theme/Theme.types"
import { BoardComponent } from "./Board"

export const Board = ({ width }: { width?: number }) => {
    const { theme, windowSize } = useTheme()
    const { currentNote } = useNotes()
    let primaryColor = currentNote?.color
    let secondaryColor = currentNote?.color + 'de'
    const [activeMenuIcon, setActiveMenuIcon] = React.useState<boolean>(false)
    React.useEffect(() => {
        if (Number(theme?.breakpoints.md) >= windowSize.width) {
            setActiveMenuIcon(true)
        } else {
            setActiveMenuIcon(false)
        }
    }, [windowSize])
    return (
        <BoardComponent
            activeMenuIcon={activeMenuIcon}
            theme={theme as Theme}
            note={currentNote as noteType}
            primaryColor={primaryColor as string}
            secondaryColor={secondaryColor}
            width={width}
        />
    )
}