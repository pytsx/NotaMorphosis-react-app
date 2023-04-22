export type docType = {
    id: string,
    label: string
    scope: any
    code: string
    description: string
}

export interface IDocContext {
    currentDoc: docType | undefined
    handleCurrentDoc: (id: string) => void
    docs: docType[]
}