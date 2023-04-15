import styled from "@emotion/styled";
import { IActive } from "../../../Menu/MenuItem/MenuItem.type";

export const NoteContainerStyled = styled.li<IActive>`
    width: 100%;
    height: 5rem;
    background: transparent;
    list-style: none;
    border-bottom: ${props => props.isActive ? '1px solid transparent' : '1px solid #c9c9c932'};
    margin: .1rem 0;
`
export const NoteWrapperStyled = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 0.16rem;
`