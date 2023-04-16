import { arrayToObj } from "../../Utils";
import { Breakpoints } from "./Theme.types";


export const breakpointKeys = ['xs', 'sm', 'md', 'lg', 'xl'];
export const breackpointObjVoid = arrayToObj<number>(breakpointKeys)

export function createBreakpoints(breakpointsInput: Breakpoints): Breakpoints {
    // Implementação da função createBreakpoints

    for (let key in breackpointObjVoid) {
        breackpointObjVoid[key] = breakpointsInput[key]
    }


    let breakpoints = breackpointObjVoid
    return breakpoints;
}