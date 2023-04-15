import React from "react";
import { IAPIContext } from "./API.types";
import { IChildren } from "../../Types";

export const APIContext = React.createContext<IAPIContext>({ data: [] })

export const APIProvider = ({ children }: IChildren) => {
    const [data, setData] = React.useState([1, 2])
    return (
        <APIContext.Provider value={{ data }}>
            {children}
        </APIContext.Provider>
    )
}