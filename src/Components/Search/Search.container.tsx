import { useTheme } from "../../Common/Context/Theme"
import { Theme } from "../../Common/Context/Theme/Theme.types"
import { SearchComponent } from "./Search"

export const Search = () => {
    const { theme } = useTheme()
    return (
        <SearchComponent theme={theme as Theme} />
    )
}