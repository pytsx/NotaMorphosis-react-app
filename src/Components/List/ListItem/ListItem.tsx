import { generateIcon, useTheme } from "../../../Common/Context"
import { HightLigter } from "../../HightLighter"
import { Stack } from "../../Stack"
import { Typography } from "../../Typography"
import { IListItem } from "../List.types"

export const ListItem = ({ item, handle }: IListItem) => {
    const { theme } = useTheme()
    return (
        <span onClick={() => handle(item.id)} style={{ width: '100%', margin: '.064rem 0rem' }}>
            <HightLigter fullWidth bgcolor={`${theme?.palette.dark}`} >
                <Stack direction={item.reverse ? "row-reverse" : 'row'} padding='.6rem 1.2rem' style={{ userSelect: 'none' }}>
                    <Typography color={`${theme?.palette.typography.secondary}`}>
                        {generateIcon(Number(item.icon))}
                    </Typography>
                    <Typography margin="0 .32rem" color={`${theme?.palette.typography.secondary}`}>
                        {item.label}
                    </Typography>
                </Stack>
            </HightLigter>
        </span>
    )
}