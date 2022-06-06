import "./chips.css";
import { useCategory } from "../../contexts/";
import { Chip } from "../";

const ChipsListingSection = () => {

    const { msCategories } = useCategory();

    return (
        <div className="ms_chips-listing-section">
            <div className="ms_chips-container">
                <label htmlFor="ms_show-all" className="b-rad1 ms_cp">
                    All
                </label>
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