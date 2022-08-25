import "./videoCard.css";
import { VideoCard, NoResultsFoundComp } from "../";
import { useFilter, useVideoCard } from "../../contexts/";

const VideoCardListingSection = () => {

    const { filteredVideosToBeShown } = useFilter();
    const { setVideoIdOfCard } = useVideoCard();

    return (
        <div
            className="ms_videoCard-listing-section ms_flex"
            onClick={() => setVideoIdOfCard("")}>
            {
                filteredVideosToBeShown?.length === 0 ?
                    <NoResultsFoundComp /> :
                    filteredVideosToBeShown?.map((eachVideo) => (
                        <VideoCard {...eachVideo} key={eachVideo._id} />
                    ))
            }
        </div>
    );
}

export { VideoCardListingSection };