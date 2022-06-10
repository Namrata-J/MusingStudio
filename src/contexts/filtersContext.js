import React, { useReducer, useContext, createContext } from "react";
import { filterCategoryFunc, filterArtistFunc } from "../utils/filterFunc";
import { useVideo } from "./";

const filterContext = createContext({ initialFiltersState: { filterByCategory: [], filterByArtist: [] } });

const FilterProvider = ({ children }) => {

    const { msVideos } = useVideo();

    const initialFiltersState = {
        filteredCategories: [],
        filteredArtists: []
    };

    const VideosFilterReducer = (state, action) => {
        switch (action.type) {
            case "FILTER_BY_CATEGORY":
                return {
                    ...state,
                    filteredCategories: state.filteredCategories.includes(action.payload) ? state.filteredCategories.filter((eachCategory) => eachCategory !== action.payload) : [...state.filteredCategories, action.payload]
                }
            case "FILTER_BY_ARTIST":
                return {
                    ...state,
                    filteredArtists: state.filteredArtists.includes(action.payload) ? state.filteredArtists.filter((eachArtist) => eachArtist !== action.payload) : [...state.filteredArtists, action.payload]
                }
            case "CLEAR":
                return {
                    ...state,
                    filteredCategories: [],
                    filteredArtists: []
                }
            default:
                return state
        }
    }

    const [stateOfVideosFilter, dispatchOfVideosFilter] = useReducer(VideosFilterReducer, initialFiltersState);

    const filteredVideosToBeShown = filterArtistFunc(filterCategoryFunc(msVideos, stateOfVideosFilter), stateOfVideosFilter);

    return <filterContext.Provider value={{ stateOfVideosFilter, dispatchOfVideosFilter, filteredVideosToBeShown }}>
        {children}
    </filterContext.Provider>
}

const useFilter = () => useContext(filterContext);

export { useFilter, FilterProvider };