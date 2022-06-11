import "./privateRouteVideos.css";
import { AiFillLike } from "../../utils/icons";

const PrivateRouteCard = () => {
    return (
        <div className="ms_privateRouteVideoCard-card b-rad1 ms_cp ms_flex">
            <div className="ms_privateRouteVideoCard-img-container">
                <img className="ms_privateRouteVideoCard-img" src="https://res.cloudinary.com/nj1508/image/upload/t_ms_collection/v1654449047/ms_std/a1.jpg" />
            </div>
            <div className="ms_privateRouteVideoCard-info ms_flex">
                <p className="ms_privateRouteVideoCard-title ms_fw-b">Galliyan</p>
                <p className="ms_privateRouteVideoCard-likes">104204 likes</p>
                <p className="ms_privateRouteVideoCard-release-date">2014</p>
                <p className="ms_privateRouteVideoCard-music-duration">5:09</p>
            </div>
            <div className="ms_privateRouteVideoCard-icon-container b-rad4 ms_cp">
                <AiFillLike className="ms_privateRouteVideoCard-like-icon" />
            </div>
        </div>
    );
}

export { PrivateRouteCard };