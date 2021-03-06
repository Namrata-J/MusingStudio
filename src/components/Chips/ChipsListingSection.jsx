import "./chips.css";
import { useCategory, useFilter, useVideoCard } from "../../contexts/";
import { Chip } from "../";

const ChipsListingSection = () => {

    const { msCategories } = useCategory();
    const { setVideoIdOfCard } = useVideoCard();
    const { stateOfVideosFilter, dispatchOfVideosFilter } = useFilter();

    return (
        <div className="ms_chips-listing-section">
            <div className="ms_chips-container">
                <div className="ms_chip b-rad1 ms_cp"
                    onClick={() => {
                        setVideoIdOfCard("");
                        dispatchOfVideosFilter({ type: "CLEAR" })
                    }}
                    style={
                        stateOfVideosFilter.filteredCategories.length === 0 && stateOfVideosFilter.filteredArtists.length === 0 ?
                            { backgroundColor: "var(--action)", color: "var(--white-color)" } :
                            { backgroundColor: "transparent", color: "var(--action)" }
                    }>
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