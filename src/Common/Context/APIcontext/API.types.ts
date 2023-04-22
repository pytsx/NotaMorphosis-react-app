import { Dispatch, SetStateAction } from "react"

export interface IAPIContext {
    data: any
    setUsername: Dispatch<SetStateAction<string>>
}