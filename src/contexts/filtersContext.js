import React, { useReducer, useContext, createContext } from "react";
import { filterCategoryFunc, filterArtistFunc } from "../utils/filterFunc";
import { VideosFilterReducer } from "reducers/VideosFilterReducer";
import { useVideo } from "./";

const filterContext = createContext(
    {
        initialFiltersState: {
            filterByCategory: [],
            filterByArtist: []
        }
    }
);

const FilterProvider = ({ children }) => {

    const { msVideos } = useVideo();

    const initialFiltersState = {
        filteredCategories: [],
        filteredArtists: []
    };

    const [stateOfVideosFilter, dispatchOfVideosFilter] = useReducer(VideosFilterReducer, initialFiltersState);

    const filteredVideosToBeShown = filterArtistFunc(filterCategoryFunc(msVideos, stateOfVideosFilter), stateOfVideosFilter);

    return <filterContext.Provider value={{ stateOfVideosFilter, dispatchOfVideosFilter, filteredVideosToBeShown }}>
        {children}
    </filterContext.Provider>
}

const useFilter = () => useContext(filterContext);

export { useFilter, FilterProvider };