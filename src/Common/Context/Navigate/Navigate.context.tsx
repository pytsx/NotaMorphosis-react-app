import React from "react";
import { IChildren } from "../../Types";
import { INavigateContext } from "./Navigate.types";

export const NavigateContext = React.createContext<INavigateContext>({
    currentPage: 0,
    navigate: () => { }
})

export const NavigateProvider = ({ children }: IChildren) => {
    const [currentPage, setCurrentPage] = React.useState<number>(1)
    const [history, setHistory] = React.useState<number[]>([])

    const navigate = (newPage: number) => {
        setCurrentPage(prev => {
            if (!prev) {
                setHistory(prevH => [...prevH, newPage])
            } else {
                setHistory(prevH => [...prevH, prev])
            }
            return newPage
        })
        console.log(history);

    }

    return (
        <NavigateContext.Provider value={{ currentPage, navigate }}>
            {children}
        </NavigateContext.Provider>
    )
}