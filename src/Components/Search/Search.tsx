import { Theme } from "../../Common/Context/Theme/Theme.types"
import { SearchInputStyled } from "./Search.styled"
import { ISearch } from "./Search.type"

export const SearchComponent = ({ theme }: ISearch) => {
    return (
        <SearchInputStyled theme={theme as Theme} type='search' placeholder="Search">

        </SearchInputStyled>
    )
}