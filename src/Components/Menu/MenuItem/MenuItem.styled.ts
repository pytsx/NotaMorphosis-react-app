import styled from "@emotion/styled";
import { IActive, IMenuItemWrapperStyled } from "./MenuItem.type";


export const MenuItemStyled = styled.li<IActive>`
    margin-top: .2rem;
    list-style: none;
    width: 100%;
    user-select:none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    transition: all 100ms ease-in-out;
`
export const MenuItemWrapperStyled = styled.span<IMenuItemWrapperStyled>`
    padding: .64rem .64rem;
    border-radius: ${props => props?.theme?.shape?.borderRadius}rem;
    width: 100%;
    position: relative;
    display: flex;
    align-item: center;
    justify-content: start;
    background: ${props => props.isActive ? '#Fafafa24' : 'transparent'};
    &:hover{
    }
`


export const MenuItemActiveIndicator = styled.span<IActive>`
    opacity: ${props => props.isActive ? '1' : '0'};
    height: 38%;
    width: .24rem;
    background: #87CEFAaf;
    position: absolute;
    left: -.024rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50rem;
`