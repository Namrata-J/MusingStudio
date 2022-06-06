import "./videoCard.css";
import { useVideo } from "../../contexts/";
import { VideoCard } from "../";

const VideoCardListingSection = () => {

    const { msVideos } = useVideo();

    return (
        <div className="ms_videoCard-listing-section ms_flex">
            {
                msVideos?.map((eachVideo) => (
                   <VideoCard {...eachVideo} key={eachVideo._id}/> 
                ))
            }
        </div>
    );
}

export { VideoCardListingSection };