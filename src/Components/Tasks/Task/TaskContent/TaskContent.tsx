import { FaCheck } from "react-icons/fa";
import { MdStarBorder } from "react-icons/md";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { ITaskContent } from "./TaskContent.type";
import React from "react";
import { Typography } from "../../../Typography";
import { Stack } from "../../../Stack";

export const TaskContent = ({ task }: ITaskContent) => {

    const [hover, setHover] = React.useState<boolean>(false)
    const handleHover = () => {
        setHover(prev => !prev)
    }
    return (
        <Stack style={{ padding: '0 .8rem' }} width="100%">
            <div
                onMouseLeave={handleHover}
                onMouseEnter={handleHover}
                style={{
                    position: 'relative',
                    display: 'flex',
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
            <span
                style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0 .4rem'
                }}>
                <Typography variant="h4" weight={400}>
                    {task?.label}
                </Typography>

                <Typography variant="h2">
                    <MdStarBorder />
                </Typography>
            </span>
        </Stack>
    )
}