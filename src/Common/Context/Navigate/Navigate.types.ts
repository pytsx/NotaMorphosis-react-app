export interface INavigateContext {
    currentPage: number
    navigate: (newPage: number) => void
    prev: () => void
}