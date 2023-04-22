import styled from "@emotion/styled";
import { IButtonStyled } from "./Button.type";

export const ButtonStyled = styled.button<IButtonStyled>`
    all: unset;
    padding: .2rem .8rem;
    position: ${props => props.position ? props.position : 'relative'};
    bottom: ${props => props.bottom};
    left: ${props => props.left};
    top: ${props => props.top};
    right: ${props => props.right};
    cursor: pointer;
    border-radius: ${props => props?.theme?.shape?.borderRadius}rem;
    width: ${props => props.width ? props.width : '100%'};
    height: ${props => props.height ? props.height : '100%'};
    background: ${props => props.isActive ? '#Fafafa24' : 'transparent'};
    &:hover{
    }
`
