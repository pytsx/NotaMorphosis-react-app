import React from "react";
import { IAPIContext } from "./API.types";
import { IChildren } from "../../Types";

export const APIContext = React.createContext<IAPIContext>({ data: [], setUsername: () => { } })

export const APIProvider = ({ children }: IChildren) => {
    const [data, setData] = React.useState<any[]>([])
    const [apiState, setApiState] = React.useState<Record<string, unknown>[]>([]);
    const [username, setUsername] = React.useState<string>('')

    const fetchAPI = () => {
        if (username) {
            console.log('username');

            fetch(`http://localhost:5000/perfil/${username.replaceAll(" ", '%20')}}`)
                .then(response => response.json())
                .then(data => {
                    setApiState(data)
                    setData(data)
                });
        }
    }
    React.useEffect(() => {
        fetchAPI()
    }, [])

    React.useEffect(() => {
        fetchAPI()
        console.log(data);

    }, [apiState])

    return (
        <APIContext.Provider value={{ data, setUsername }}>
            {children}
        </APIContext.Provider>
    )
}