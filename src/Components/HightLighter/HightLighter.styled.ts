import styled from "@emotion/styled";
import { IHightLighterStyle } from "./HightLighter.types";

export const HightLighterWrapper = styled.div<IHightLighterStyle>`
    height: fit-content;
    width: ${props => props.fullWidth ? '100%' : 'fit-content'};
    background: ${props => props.hightlight && !props.isActive && !props.bgcolor ? `${props.theme?.palette?.secondary}64` : props.isActive && !props.bgcolor ? props.theme?.palette?.secondary : props.bgcolor && !props.isActive ? `${props.bgcolor}ea` : props.bgcolor && props.isActive ? props.bgcolor : 'transparent'};
    border-radius: ${props => props.theme?.shape?.borderRadius}rem;        
    &:hover {
        background: ${props => props.hightlight && !props.bgcolor || props.isActive && !props.bgcolor ? props.theme?.palette?.secondary : props.bgcolor && props.hightlight ? props.bgcolor : 'transparent'}; 
    }
`