import React from "react";
import { DocContext } from "./Doc.context";

export const useDoc = () => React.useContext(DocContext)