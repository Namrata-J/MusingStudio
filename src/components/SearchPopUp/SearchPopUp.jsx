import { useHeader } from "../../contexts/";
import { VscClose } from "../../utils/icons";

const SearchPopUp = () => {

    const {
        setSearchPopUpContainerDisplay,
        searchBarInput,
        setSearchBarInput,
        getTheSearchBarInputValue,
        searchPopUpContainerDisplay
    } = useHeader();

    return (
        <div className="ms_search-popUp-container ms_flex" style={{ display: searchPopUpContainerDisplay }}>
            <div className="ms_search-popUp-section1 ms_flex">
                <VscClose className="ms_close-search-popUp-container ms_cp" onClick={() => setSearchPopUpContainerDisplay("none")} />
                <input className="ms_searchBar ms_input" placeholder="Search" value={searchBarInput} onChange={(e) => getTheSearchBarInputValue(e)} />
            </div>
            <div className="ms_search-popUp-section2 ms_flex">
                <VscClose className="ms_reset-searchInput ms_cp" onClick={() => setSearchBarInput("")} />
            </div>
        </div>
    );
}

export { SearchPopUp };