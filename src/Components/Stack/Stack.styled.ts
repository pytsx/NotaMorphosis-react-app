import styled from "@emotion/styled";
import { IStackStyled } from './Stack.types'

export const Stack = styled.div<IStackStyled>`
    display: flex;
    align-items: ${props => props.align ? props.align : 'start'};
    justify-content: ${props => props.justify ? props.justify : 'start'};
    flex-direction: ${props => props.direction ? props.direction : 'row'};
    gap: ${props => props.gap ? props.gap : '.4rem'};
    width: ${props => props.width ? props.width : '100%'};
    height: ${props => props.height ? props.height : 'fit-content'};
    padding: ${props => props.padding ? props.padding : '0'};
    position: ${props => props.position ? props.position : 'relative'};
`