import "./chips.css";
import { useFilter } from "../../contexts/";

const Chip = (genre) => {

    const { stateOfVideosFilter, dispatchOfVideosFilter } = useFilter();

    return (
        <div className="ms_chip b-rad1 ms_cp"
            onClick={
                () => dispatchOfVideosFilter({
                    type: genre.category ? "FILTER_BY_CATEGORY" : "FILTER_BY_ARTIST",
                    payload: genre.category ? genre.category : genre.artist_name
                })}
            style={{
                backgroundColor: genre.category ?
                    stateOfVideosFilter.filteredCategories.includes(genre.category) ? "var(--action)" : "transparent" :
                    stateOfVideosFilter.filteredArtists.includes(genre.artist_name) ? "var(--action)" : "transparent",
                color: genre.category ?
                    stateOfVideosFilter.filteredCategories.includes(genre.category) ? "var(--white-color)" : "var(--action)" :
                    stateOfVideosFilter.filteredArtists.includes(genre.artist_name) ? "var(--white-color)" : "var(--action)"
            }}>
            {genre.category ? genre.category : genre.artist_name}
        </div>
    );
}

export { Chip };