import { useNotes } from "../../../../Common/Context"
import { Typography } from "../../../Typography"
import { NoteContainerStyled, NoteWrapperStyled } from "./Note.styled"
import { INoteComponent } from "./Note.type"
import { RiCheckboxBlankCircleLine } from "react-icons/ri"
import { FaCheck } from 'react-icons/fa';

export const NoteComponent = ({
    note,
    hover,
    handleHover
}: INoteComponent) => (
    <NoteContainerStyled
        isActive={false || !!note.label}
    >
        <NoteWrapperStyled isActive={!!note.label} style={{}}>
            <div
                onMouseLeave={handleHover}
                onMouseEnter={handleHover}
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