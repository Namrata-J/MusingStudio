import "./privateRouteVideos.css";
import { PrivateRouteCard } from "../";
import { useWatchLater } from "../../contexts/";

const WatchLaterVideosListing = () => {

    const { userWatchLaterVideos } = useWatchLater();

    return (
        <div className="ms_privateRouteVideoCard-listing-section ms_flex">
            {
                userWatchLaterVideos.length === 0 ? <div className="ms_no-watchLater-videos-text-container ms_flex-c">
                    <p className="ms_no-watchLater-videos-text ms_fw-b">
                        No Videos Are Added To WatchLater Yet
                    </p>
                </div> :
                    userWatchLaterVideos.map((eachVideo) => (
                        <PrivateRouteCard {...{ eachVideo }} key={eachVideo._id} />
                    ))
            }
        </div>
    );
}

export { WatchLaterVideosListing };