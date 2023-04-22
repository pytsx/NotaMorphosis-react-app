import { noteType } from "../Notes/Notes.types"

export interface IPerfil {
    username: string
    email: string
    notes: []
}

export interface IPerfilContext {
    perfil?: IPerfil
    createPerfil: (username: string) => void
}