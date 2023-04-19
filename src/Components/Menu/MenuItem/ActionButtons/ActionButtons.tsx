import { MdDeleteOutline, MdEdit } from "react-icons/md"
import { Typography } from "../../../Typography"
import { IActionButtons } from "./ActionButtons.types"
import React from "react"
import { useNotes } from "../../../../Common/Context"

export const ActionButtons = ({ isActive, theme }: IActionButtons) => {
    const [hoverDelete, setHoverDelete] = React.useState<boolean>(false)
    const [hoverEdit, setHoverEdit] = React.useState<boolean>(false)
    const { currentNote, removeNote } = useNotes()
    const handleHoverDelete = () => {
        setHoverDelete(prev => !prev)
    }
    const handleClickDelete = () => {
        removeNote()
    }
    const handleHoverEdit = () => {
        setHoverEdit(prev => !prev)
    }
    return (
        <div style={{
            display: isActive ? 'flex' : 'none',
            backdropFilter: 'blur(3px)',
            height: '100%',
            borderRadius: `${theme.shape.borderRadius}rem`,
            position: 'absolute',
            right: 0,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <span onClick={handleClickDelete} onMouseEnter={handleHoverDelete} onMouseLeave={handleHoverDelete}>
                <Typography
                    color={
                        hoverDelete
                            ? `${theme?.palette.typography.primary}`
                            : `${theme?.palette.typography.secondary}`
                    }
                    margin=" 0 .4rem "
                    variant="h3"
                >
                    <MdDeleteOutline />
                </Typography>
            </span>
            <span onMouseEnter={handleHoverEdit} onMouseLeave={handleHoverEdit}>

                <Typography
                    color={
                        hoverEdit
                            ? `${theme?.palette.typography.primary}`
                            : `${theme?.palette.typography.secondary}`
                    }
                    margin=" 0 .4rem "
                    variant="h3">
                    <MdEdit />
                </Typography>
            </span>
        </div>
    )
}