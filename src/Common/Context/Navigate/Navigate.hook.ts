import React from "react";
import { NavigateContext } from "./Navigate.context";

export const useNavigate = () => React.useContext(NavigateContext)