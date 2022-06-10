import "./chips.css";
import { useCategory } from "../../contexts/";
import { Chip } from "../";

const ChipsListingSection = () => {

    const { msCategories } = useCategory();

    return (
        <div className="ms_chips-listing-section">
            <div className="ms_chips-container">
                <div className="ms_chip b-rad1 ms_cp">
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