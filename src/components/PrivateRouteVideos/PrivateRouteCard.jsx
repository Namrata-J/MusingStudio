import "./privateRouteVideos.css";
import { useLocation } from "react-router-dom";
import { useLikedVideos, useWatchLater } from "../../contexts/";
import { AiFillLike, MdWatchLater } from "../../utils/icons";

const PrivateRouteCard = (eachVideo) => {

    const { removeFromLikedVideos } = useLikedVideos();
    const location = useLocation();
    const { deleteFromWatchLaterVideos } = useWatchLater();

    return (
        <div className="ms_privateRouteVideoCard-card b-rad1 ms_cp ms_flex">
            <div className="ms_privateRouteVideoCard-img-container">
                <img className="ms_privateRouteVideoCard-img" src={eachVideo.music_img} />
            </div>
            <div className="ms_privateRouteVideoCard-info ms_flex">
                <p className="ms_privateRouteVideoCard-title ms_fw-b">{eachVideo.music_title}</p>
                <p className="ms_privateRouteVideoCard-likes">{`${eachVideo.likes + 1}`} likes</p>
                <p className="ms_privateRouteVideoCard-release-date">{eachVideo?.music_description?.release_date}</p>
                <p className="ms_privateRouteVideoCard-music-duration">{eachVideo?.music_description?.music_duration}</p>
            </div>
            <div className="ms_privateRouteVideoCard-icon-container b-rad4 ms_cp"
                onClick={() => removeFromLikedVideos(eachVideo._id)}
                style={location?.state?.from === "/likedVideos" ? { display: "block" } : { display: "none" }}>
                <AiFillLike className="ms_privateRouteVideoCard-like-icon" />
            </div>
            <div className="ms_privateRouteVideoCard-icon-container b-rad4 ms_cp"
                onClick={() => deleteFromWatchLaterVideos(eachVideo._id)}
                style={location?.state?.from === "/watchLater" ? { display: "block" } : { display: "none" }}>
                <MdWatchLater className="ms_privateRouteVideoCard-like-icon" />
            </div>
        </div>
    );
}

export { PrivateRouteCard };