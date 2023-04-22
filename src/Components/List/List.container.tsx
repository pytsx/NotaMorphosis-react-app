import { ListComponent } from "./List"
import { IList } from "./List.types"

export const List = ({ ...rest }: IList) => {
    return (
        <ListComponent {...rest} />
    )
}