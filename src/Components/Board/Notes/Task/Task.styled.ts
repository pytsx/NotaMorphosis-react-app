import styled from "@emotion/styled";
import { IActive } from "../../../Menu/MenuItem/MenuItem.type";

export const NoteContainerStyled = styled.li<IActive>`
    width: 100%;
    min-height: 3.2rem;
    height: fit-content;
    background: transparent;
    list-style: none;
    border-bottom: ${props => props.isActive ? '1px solid transparent' : '1px solid #c9c9c932'};
    margin: .1rem 0;
`
export const NoteWrapperStyled = styled.div<IActive>`
    width: 100%;
    height: 100%;
    
    background: ${props => props.isActive ? '#c9c9c932' : '#c9c9c916'};
    padding: .32rem 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    
    &:hover{
        background: #c9c9c932;
    }
`