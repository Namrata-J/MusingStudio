import "./privateRouteVideos.css";
import { useLikedVideos } from "../../contexts/";
import { AiFillLike } from "../../utils/icons";

const PrivateRouteCard = (eachVideo) => {

    const { removeFromLikedVideos } = useLikedVideos();

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
            <div className="ms_privateRouteVideoCard-icon-container b-rad4 ms_cp" onClick={() => removeFromLikedVideos(eachVideo._id)}>
                <AiFillLike className="ms_privateRouteVideoCard-like-icon" />
            </div>
        </div>
    );
}

export { PrivateRouteCard };