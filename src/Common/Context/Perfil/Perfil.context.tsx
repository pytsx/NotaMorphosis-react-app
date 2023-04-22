import React from "react";
import { IChildren } from "../../Types";
import { IPerfil, IPerfilContext } from "./Perfil.types";
import { useAPI } from "../APIcontext";

export const PerfilContext = React.createContext<IPerfilContext>({
    perfil: {
        username: '',
        email: '',
        notes: []
    },
    createPerfil: () => { }
})

export const PerfilProvider = ({ children }: IChildren) => {
    const [perfil, setPerfil] = React.useState<IPerfil>()
    const { setUsername, data } = useAPI()
    const createPerfil = async (username: string) => {
        if (username?.trim()?.length != 0) {
            let newPerfil = {
                username: username.trim(),
            }
            const response = await fetch('http://localhost:5000/perfis', {
                method: 'POST',
                headers: {
                    'Content-Type': 'Application/json'
                },
                body: JSON.stringify(newPerfil)
            })

            const data = await response.json()
            setUsername(data.username)
            setPerfil(data)
            return data
        }
    }


    return (
        <PerfilContext.Provider value={{ perfil, createPerfil }}>
            {children}
        </PerfilContext.Provider>
    )
}