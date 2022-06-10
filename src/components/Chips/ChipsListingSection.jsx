import "./chips.css";
import { useCategory, useFilter } from "../../contexts/";
import { Chip } from "../";

const ChipsListingSection = () => {

    const { msCategories } = useCategory();
    const { stateOfVideosFilter, dispatchOfVideosFilter } = useFilter();

    return (
        <div className="ms_chips-listing-section">
            <div className="ms_chips-container">
                <div className="ms_chip b-rad1 ms_cp"
                    onClick={() => dispatchOfVideosFilter({ type: "CLEAR" })}
                    style={{
                        backgroundColor: stateOfVideosFilter.filteredCategories.length === 0 && stateOfVideosFilter.filteredArtists.length === 0 ?
                            "var(--action)" : "transparent",
                        color: stateOfVideosFilter.filteredCategories.length === 0 && stateOfVideosFilter.filteredArtists.length === 0 ?
                            "var(--white-color)" : "var(--action)"
                    }}>
                    All
                </div>
                {
                    msCategories.musicGenres.map((genre, index) => (
                        <Chip {...genre} key={index} />
                    ))
                }
                {
                    msCategories.musicArtists.map((genre, index) => (
                        <Chip {...genre} key={index} />
                    ))
                }
            </div>
        </div>
    );
}

export { ChipsListingSection };