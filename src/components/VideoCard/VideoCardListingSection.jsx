import "./videoCard.css";
import { VideoCard, NoResultsFoundComp } from "../";
import { useFilter } from "../../contexts/";

const VideoCardListingSection = () => {

    const { filteredVideosToBeShown } = useFilter();

    return (
        <div className="ms_videoCard-listing-section ms_flex">
            {
                filteredVideosToBeShown?.length === 0 ? <NoResultsFoundComp /> :
                filteredVideosToBeShown?.map((eachVideo) => (
                   <VideoCard {...eachVideo} key={eachVideo._id}/> 
                ))
            }
        </div>
    );
}

export { VideoCardListingSection };