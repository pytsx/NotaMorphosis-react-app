import React from "react";
import { NotesContext } from "./Notes.context";

export const useNotes = () => React.useContext(NotesContext)