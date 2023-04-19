import React from "react"
import { useNotes } from "../../Common/Context"
import { noteType } from "../../Common/Context/Notes/Notes.types"
import { useTheme } from "../../Common/Context/Theme"
import { Theme } from "../../Common/Context/Theme/Theme.types"
import { BoardComponent } from "./Board"

export const Board = ({ width }: { width?: number }) => {
    const { theme, windowSize } = useTheme()
    const { currentNote, addTask } = useNotes()

    const [taskLabelValue, setTaskLabelValue] = React.useState<string>('')
    const [activeMenuIcon, setActiveMenuIcon] = React.useState<boolean>(false)

    let primaryColor = currentNote?.color
    let secondaryColor = currentNote?.color + 'de'


    const handleTaskLabelValue = (e: string) => {
        setTaskLabelValue(e)
    }


    React.useEffect(() => {
        if (Number(theme?.breakpoints.md) >= windowSize.width) {
            setActiveMenuIcon(true)
        } else {
            setActiveMenuIcon(false)
        }
    }, [windowSize])

    React.useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.code == 'Enter') {
                addTask(taskLabelValue)
                setTaskLabelValue('')
            }

        }
        document.addEventListener('keypress', handleKeyPress)

        return () => {
            document.removeEventListener('keypress', handleKeyPress)
        }
    }, [handleTaskLabelValue])


    return (
        <BoardComponent
            index={1}
            onChange={handleTaskLabelValue}
            value={taskLabelValue}
            activeMenuIcon={activeMenuIcon}
            theme={theme as Theme}
            note={currentNote as noteType}
            primaryColor={primaryColor as string}
            secondaryColor={secondaryColor}
            width={width}
        />
    )
}