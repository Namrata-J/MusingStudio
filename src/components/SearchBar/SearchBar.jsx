import { useHeader } from "../../contexts/";
import { BsSearch } from "../../utils/icons";

const SearchBar = () => {

    const {
        searchBarInput,
        getTheSearchBarInputValue
    } = useHeader();

    return (
        <div className="ms_header-searchBar ms_flex">
            <input
                className="ms_header-searchBar-subsection1 ms_input"
                placeholder="Search"
                value={searchBarInput}
                onChange={(e) => getTheSearchBarInputValue(e)} />
            <div className="ms_header-searchBar-subsection2 ms_flex-c">
                <BsSearch className="ms_searchBar-icon ms_cp" />
            </div>
        </div>
    );
}

export { SearchBar };