import { Stack } from "../Stack"
import { IListComponent } from "./List.types"
import { ListItem } from "./ListItem"

export const ListComponent = ({ list, handle }: IListComponent) => {
    return (
        <Stack direction="column" gap="0rem" width="100%">
            {list.map(item => (
                <ListItem key={item.id} handle={handle} item={item} />
            ))}
        </Stack>
    )
}