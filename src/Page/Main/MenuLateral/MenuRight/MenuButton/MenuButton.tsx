import { MdDeleteOutline, MdDelete } from "react-icons/md"
import { CheckIcon, Stack, Typography } from "../../../../../Components"
import { MenuCard } from "../MenuCard"
import { useNotes, useTheme } from "../../../../../Common/Context"
import React from "react"
import { IMenuButton } from "./MenuButton.types"


export const MenuButton = ({ label, icon, eq }: IMenuButton) => {
    const { theme } = useTheme()
    const [hoverDelete, setHoverDelete] = React.useState<boolean>(false)
    const handleHoverDelete = () => {
        setHoverDelete(prev => !prev)
    }
    return (
        <MenuCard>
            <Stack style={{ padding: "0 .8rem .8rem .8rem" }}>

                <Stack align="center" >
                    <Typography variant="h3">
                        {icon}
                    </Typography>
                    <Typography variant="h5" weight={400} margin="0 0 0 .4rem">
                        {label}
                    </Typography>
                </Stack>
                {
                    eq
                        ?
                        <span onMouseEnter={handleHoverDelete} onMouseLeave={handleHoverDelete}>
                            <Typography
                                color={hoverDelete
                                    ? `${theme?.palette.red}`
                                    : String(theme?.palette.typography.primary)}
                                variant="h3"
                                margin="0 .4rem 0 0"
                            >
                                <span style={{ display: hoverDelete ? 'none' : 'flex' }}>
                                    <MdDeleteOutline />
                                </span>
                                <span style={{ display: !hoverDelete ? 'none' : 'flex' }}>
                                    <MdDelete />
                                </span>
                            </Typography>
                        </span>
                        : <CheckIcon handleActive={() => { }} />
                }
            </Stack>
        </MenuCard>
    )
}