import { Avatar } from "./Avatar"
import { IAvatar } from "./Avatar.types"

export const AvatarContainer = ({ letter = 'H', color = "#0066cc" }: IAvatar) => {
    return (
        <Avatar letter={letter} color={color} />
    )
}