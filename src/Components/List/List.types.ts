
export type listItemType = {
    id: string
    icon?: number
    label: string
    color?: string
    reverse?: boolean
}

export interface IList {
    list: listItemType[]
    handle: (id: string) => void
}

export interface IListItem {
    item: listItemType
    handle: (id: string) => void
}

export interface IListComponent extends IList {

}