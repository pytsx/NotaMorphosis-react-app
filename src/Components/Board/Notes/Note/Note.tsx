import { useNotes } from "../../../../Common/Context"
import { Typography } from "../../../Typography"
import { NoteContainerStyled, NoteWrapperStyled } from "./Note.styled"
import { INoteComponent } from "./Note.type"
import { RiCheckboxBlankCircleLine } from "react-icons/ri"
import { FaCheck } from 'react-icons/fa';
import React from "react"

export const NoteComponent = ({ note }: INoteComponent) => {
    const { currentNote } = useNotes()
    const [hover, setHover] = React.useState<boolean>()
    return (
        <NoteContainerStyled
            isActive={false || !!note.id}
        >
            <NoteWrapperStyled isActive={!!note.label} style={{}}>
                <div
                    onMouseLeave={() => setHover(false)}
                    onMouseEnter={() => setHover(true)}
                    style={{
                        position: 'relative',
                        display: !!note.id ? 'flex' : 'none',
                        padding: '.8rem',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                    <Typography variant="h2" >
                        <RiCheckboxBlankCircleLine />
                    </Typography>
                    <div
                        style={{
                            position: 'absolute',
                            display: hover ? 'flex' : 'none'
                        }} >
                        <Typography variant="captcha">
                            <FaCheck />
                        </Typography>
                    </div>
                </div>
                <div style={{ margin: '.32rem' }}>
                    <Typography variant="h4" weight={400}>
                        {note.label}
                    </Typography>
                </div>
            </NoteWrapperStyled>
        </NoteContainerStyled >
    )
}