const filterCategoryFunc = (videoData, filterState) => {
    return filterState.filteredCategories.length === 0 ?
        videoData :
        [...videoData].filter(
            (eachObj) => eachObj.category_type.some(
                (eachCategory) => filterState.filteredCategories.includes(eachCategory)))
}

const filterArtistFunc = (videoData, filterState) => {
    return filterState.filteredArtists.length === 0 ?
        videoData :
        [...videoData].filter(
            (eachObj) => eachObj.music_description.singers.some(
                (eachArtist) => filterState.filteredArtists.includes(eachArtist)))
}

export { filterCategoryFunc, filterArtistFunc };