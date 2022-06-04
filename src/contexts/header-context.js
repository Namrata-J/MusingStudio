import React, { useState, useContext, createContext } from "react";
import {
    FaHome,
    MdOutlineExplore,
    AiFillLike,
    MdWatchLater,
    ImHistory,
    BsFillCollectionPlayFill
} from "../utils/icons";

const headerContext = createContext({
    profilePopUpContainerDisplay: "none",
    searchPopUpContainerDisplay: "none",
    searchBarInput: ""
});

const HeaderProvider = ({ children }) => {

    const [profilePopUpContainerDisplay, setProfilePopUpContainerDisplay] = useState("none");
    const [searchPopUpContainerDisplay, setSearchPopUpContainerDisplay] = useState("none");
    const [hamburgerPopUpContainerDisplay, setHamburgerPopUpContainerDispay] = useState("none");
    const [searchBarInput, setSearchBarInput] = useState("");

    const getTheProfilePopUpContainerDisplay = (profilePopUpContainerDisplay) => {
        profilePopUpContainerDisplay === "none" ? setProfilePopUpContainerDisplay("block") : setProfilePopUpContainerDisplay("none")
        setSearchPopUpContainerDisplay("none")
        setHamburgerPopUpContainerDispay("none")
    }

    const getTheSearchPopUpContainerDisplay = (searchPopUpContainerDisplay) => {
        searchPopUpContainerDisplay === "none" ? setSearchPopUpContainerDisplay("flex") : setSearchPopUpContainerDisplay("none");
        setSearchBarInput("")
        setProfilePopUpContainerDisplay("none")
        setHamburgerPopUpContainerDispay("none")
    }

    const getTheHamburgerPopUpContainerDisplay = (hamburgerPopUpContainerDisplay) => {
        hamburgerPopUpContainerDisplay === "none" ? setHamburgerPopUpContainerDispay("block") : setHamburgerPopUpContainerDispay("none")
        setProfilePopUpContainerDisplay("none")
        setSearchPopUpContainerDisplay("none")
    }

    const getTheSearchBarInputValue = (e) => {
        setSearchBarInput(e.target.value)
    }

    const profilePopUpContainerList = [
        {
            itemName: "LogOut",
            itemLink: "/logout"
        },
        {
            itemName: "LogIn",
            itemLink: "/login"
        },
        {
            itemName: "SignUp",
            itemLink: "/signup"
        }
    ];

    const hamburgerPopUpContainerList = [
        {
            itemName: "Home",
            itemLink: "/",
            itemIcon: <FaHome />
        },
        {
            itemName: "Videos",
            itemLink: "/videoListing",
            itemIcon: <MdOutlineExplore />
        },
        {
            itemName: "Liked Videos",
            itemLink: "/likedVideos",
            itemIcon: <AiFillLike />
        },
        {
            itemName: "Watch Later",
            itemLink: "/likedVideos",
            itemIcon: <MdWatchLater />
        },
        {
            itemName: "Playlist",
            itemLink: "/playlist",
            itemIcon: <BsFillCollectionPlayFill />
        },
        {
            itemName: "History",
            itemLink: "/history",
            itemIcon: <ImHistory />
        },
    ];

    return <headerContext.Provider
        value={{
            profilePopUpContainerDisplay,
            setProfilePopUpContainerDisplay,
            searchPopUpContainerDisplay,
            setSearchPopUpContainerDisplay,
            searchBarInput,
            setSearchBarInput,
            getTheProfilePopUpContainerDisplay,
            getTheSearchPopUpContainerDisplay,
            getTheSearchBarInputValue,
            profilePopUpContainerList,
            hamburgerPopUpContainerList,
            hamburgerPopUpContainerDisplay,
            setHamburgerPopUpContainerDispay,
            getTheHamburgerPopUpContainerDisplay
        }}>
        {children}
    </headerContext.Provider>
}

const useHeader = () => useContext(headerContext);

export { useHeader, HeaderProvider };