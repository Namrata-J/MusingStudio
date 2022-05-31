import "./header.css";
import { useHeader } from "../../contexts/";
import { Logo, SearchBar, ProfilePopUp, SearchPopUp } from "../";
import { GiHamburgerMenu, BsSearch, FaUserAlt } from "../../utils/icons";

const Header = () => {

    const {
        profilePopUpContainerDisplay,
        searchPopUpContainerDisplay,
        getTheProfilePopUpContainerDisplay,
        getTheSearchPopUpContainerDisplay,
        hamburgerPopUpContainerDisplay,
        getTheHamburgerPopUpContainerDisplay
    } = useHeader();

    return (
        <div className="ms_header-component ms_flex">
            <div className="ms_header-hamburger-section ms_flex-c">
                <GiHamburgerMenu className="ms_header-hamburger ms_cp" onClick={() => getTheHamburgerPopUpContainerDisplay(hamburgerPopUpContainerDisplay)} />
            </div>
            <div className="ms_header-logo-section ms_flex-c ms_cp">
                <Logo />
            </div>
            <div className="ms_header-search-section ms_flex-c">
                <SearchBar />
            </div>
            <div className="ms_header-other-options-section ms_flex-c">
                <div className="ms_search-icon-container ms_cp">
                    <BsSearch className="ms_search-icon"
                        onClick={() => getTheSearchPopUpContainerDisplay(searchPopUpContainerDisplay)} />
                </div>
                <div className="ms_profile-icon-container ms_cp">
                    <FaUserAlt className="ms_profile-icon"
                        onClick={() => getTheProfilePopUpContainerDisplay(profilePopUpContainerDisplay)} />
                    <ProfilePopUp />
                </div>
            </div>
            <SearchPopUp />
        </div>
    );
}

export { Header };