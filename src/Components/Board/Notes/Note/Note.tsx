import { useNotes } from "../../../../Common/Context"
import { Typography } from "../../../Typography"
import { NoteContainerStyled, NoteWrapperStyled } from "./Note.styled"
import { INoteComponent } from "./Note.type"
import { RiCheckboxBlankCircleLine } from "react-icons/ri"
import { FaCheck } from 'react-icons/fa';
import { MdStarBorder } from "react-icons/md"

export const NoteComponent = ({
    note,
    hover,
    handleHover,
    borderRadius
}: INoteComponent) => (
    <NoteContainerStyled
        isActive={false || !!note.label}
    >
        <NoteWrapperStyled
            isActive={!!note.label}
            style={{ borderRadius, alignItems: 'center' }}
        >
            <div
                onMouseLeave={handleHover}
                onMouseEnter={handleHover}
                style={{
                    position: 'relative',
                    display: !!note.id ? 'flex' : 'none',
                    padding: '0rem .8rem',
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
            <div style={{
                width: '100%',
                padding: '.64rem .64rem .64rem 0'
            }}>
                <span
                    style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                    <Typography variant="h4" weight={400}>
                        {note.label}
                    </Typography>

                    <Typography variant="h2">
                        <MdStarBorder />
                    </Typography>
                </span>
                <span>
                    <Typography variant="h6">
                        {note?.description}
                    </Typography>
                </span>
            </div>
        </NoteWrapperStyled>
    </NoteContainerStyled >
)