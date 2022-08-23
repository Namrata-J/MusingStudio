import "./privateRouteVideos.css";
import { PrivateRouteCard } from "../";
import { useLikedVideos } from "../../contexts/";

const LikedVideosListing = () => {

    const { userLikedVideos } = useLikedVideos();

    return (
        <div className="ms_privateRouteVideoCard-listing-section ms_flex">
            {
                userLikedVideos.length === 0 ?
                    <div className="ms_no-liked-videos-text-container ms_flex-c">
                        <p className="ms_no-liked-videos-text ms_fw-b">
                            No Videos Are Liked Yet
                        </p>
                    </div> :
                    userLikedVideos.map((eachVideo) => (
                        <PrivateRouteCard {...{ eachVideo }} key={eachVideo._id} />
                    ))
            }
        </div>
    );
}

export { LikedVideosListing };