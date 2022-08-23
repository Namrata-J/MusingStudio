export const VideosFilterReducer = (state, action) => {
    switch (action.type) {
        case "FILTER_BY_CATEGORY":
            return {
                ...state,
                filteredCategories: state.filteredCategories.includes(action.payload) ? 
                state.filteredCategories.filter((eachCategory) => eachCategory !== action.payload) :
                 [...state.filteredCategories, action.payload]
            }
        case "FILTER_BY_ARTIST":
            return {
                ...state,
                filteredArtists: state.filteredArtists.includes(action.payload) ? 
                state.filteredArtists.filter((eachArtist) => eachArtist !== action.payload) :
                 [...state.filteredArtists, action.payload]
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