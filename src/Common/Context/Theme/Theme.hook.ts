import React from "react";
import { ThemeContext } from "./Theme.context";

export const useTheme = () => React.useContext(ThemeContext)