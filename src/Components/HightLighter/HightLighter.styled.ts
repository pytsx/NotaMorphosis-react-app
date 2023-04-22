import styled from "@emotion/styled";
import { IHightLighterStyle } from "./HightLighter.types";

export const HightLighterWrapper = styled.div<IHightLighterStyle>`
    height: fit-content;
    width: ${props => props.fullWidth ? '100%' : 'fit-content'};
    background: ${props => props.hightlight && !props.isActive && !props.bgcolor ? `${props.theme?.palette?.secondary}64` : props.isActive && !props.bgcolor ? props.theme?.palette?.secondary : props.bgcolor && !props.isActive ? `${props.bgcolor}ea` : props.bgcolor && props.isActive ? props.bgcolor : 'transparent'};
    border-radius: ${props => !!!props.borderRadius ? `${props.theme?.shape?.borderRadius}rem` : props.borderRadius};        
    &:hover {
        background: ${props => props.hightlight && !props.bgcolor || props.isActive && !props.bgcolor ? props.theme?.palette?.secondary : props.bgcolor && props.hightlight ? props.bgcolor : 'transparent'}; 
        box-shadow:  ${props => props.elevation ? `0px 0px 8px 1px #00000064` : ''};
    }
`