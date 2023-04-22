import { FaCheck } from "react-icons/fa"
import { RiCheckboxBlankCircleLine, RiCheckboxCircleFill } from "react-icons/ri"
import { Typography } from "../Typography"
import React from "react"
import { v4 as uuidv4 } from 'uuid'
interface ICheckIcon {
    active?: boolean
    handleActive: () => void
}
export const CheckIcon = ({ active, handleActive }: ICheckIcon) => {
    const [hover, setHover] = React.useState<boolean>(false)


    let animationMS = 100

    const handleHover = () => {
        setHover(prev => !prev)
    }

    return (
        <div
            onMouseLeave={handleHover}
            onMouseEnter={handleHover}
            onClick={handleActive}
            style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
            <span style={{ display: !active ? 'flex' : 'none' }}>
                <Typography variant="h4" >
                    <RiCheckboxBlankCircleLine />
                </Typography>
            </span>
            <span style={{
                transition: `all ${animationMS} ease-in-out`,
                display: active ? 'flex' : 'none',
            }}>
                <Typography color={'green'} variant="h4">
                    <RiCheckboxCircleFill />
                </Typography>
            </span>
            <div
                style={{
                    position: 'absolute',
                    display: hover && !active ? 'flex' : 'none',
                }} >
                <Typography p={6} variant="h5">
                    <FaCheck />
                </Typography>
            </div>
        </div>
    )
}