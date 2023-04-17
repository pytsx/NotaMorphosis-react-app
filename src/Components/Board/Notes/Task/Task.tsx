import { Typography } from "../../../Typography"
import { NoteContainerStyled, NoteWrapperStyled } from "./Note.styled"
import { ITaskComponent } from "./Task.type"
import { RiCheckboxBlankCircleLine } from "react-icons/ri"
import { FaCheck } from 'react-icons/fa';
import { MdStarBorder } from "react-icons/md"

export const TaskComponent = ({
    task,
    hover,
    handleHover,
    borderRadius
}: ITaskComponent) => (
    <NoteContainerStyled
        isActive={false || !!task.label}
    >
        <NoteWrapperStyled
            isActive={!!task.label}
            style={{ borderRadius, alignItems: 'center', display: !!task.id ? 'flex' : 'none' }}
        >
            <div
                onMouseLeave={handleHover}
                onMouseEnter={handleHover}
                style={{
                    position: 'relative',
                    display: 'flex',
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
                        {task.label}
                    </Typography>

                    <Typography variant="h2">
                        <MdStarBorder />
                    </Typography>
                </span>
                <span>
                    <Typography variant="h6">
                        {task?.description}
                    </Typography>
                </span>
            </div>
        </NoteWrapperStyled>
    </NoteContainerStyled >
)