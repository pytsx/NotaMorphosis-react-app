export interface IMenuButton {
    label: string
    icon: JSX.Element
    eq: boolean
    onClick: (id: string) => void
}