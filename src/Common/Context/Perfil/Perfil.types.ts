import { noteType } from "../Notes/Notes.types"

export interface IPerfil {
    username: string
    email: string
}

export interface IPerfilContext {
    perfil?: IPerfil
    createPerfil: (username: string, email: string) => void
}