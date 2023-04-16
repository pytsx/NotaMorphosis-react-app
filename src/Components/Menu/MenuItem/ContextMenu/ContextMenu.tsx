import { ContextMenuItemStyled, ContextMenuStyled } from "./ContextMenu.styled"
import { v4 as uuidv4 } from 'uuid'
export const ContextMenuComponent = () => {
    return (
        <ContextMenuStyled>
            {
                [0, 1].map(item => (

                    <ContextMenuItemStyled key={uuidv4()}>
                        {item}
                    </ContextMenuItemStyled>
                ))
            }
        </ContextMenuStyled>
    )
}