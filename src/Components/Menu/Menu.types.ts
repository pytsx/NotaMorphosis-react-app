
export type menuPropsType = {
    id: string,
    icon: number,
    label: string,
    color: string,
    tasks?: any[]
}
export interface IMenu {
    values: menuPropsType[]
    handleClick: (id: string) => void
}