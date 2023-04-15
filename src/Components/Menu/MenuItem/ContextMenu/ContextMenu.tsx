import { ContextMenuItemStyled, ContextMenuStyled } from "./ContextMenu.styled"

export const ContextMenuComponent = () => {
    return (
        <ContextMenuStyled>
            {
                [0, 1].map(item => (

                    <ContextMenuItemStyled>
                        {item}
                    </ContextMenuItemStyled>
                ))
            }
        </ContextMenuStyled>
    )
}