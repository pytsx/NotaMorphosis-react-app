import React from "react";
import { IChildren } from "../../Types";
import { IPerfil, IPerfilContext } from "./Perfil.types";

export const PerfilContext = React.createContext<IPerfilContext>({
    perfil: {
        username: '',
        email: '',
    },
    createPerfil: () => { }
})

export const PerfilProvider = ({ children }: IChildren) => {
    const [perfil, setPerfil] = React.useState<IPerfil>()

    const createPerfil = (username: string, email: string) => {
        if (username?.trim()?.length != 0 && email?.trim()?.length != 0) {

            let newPerfil = {
                username: username.trim(),
                email: email.trim(),
            }
            setPerfil(newPerfil)
        }
    }
    React.useEffect(() => {
        // createPerfil('henrique', 'exemple@pessoa.com')
    }, [])

    return (
        <PerfilContext.Provider value={{ perfil, createPerfil }}>
            {children}
        </PerfilContext.Provider>
    )
}