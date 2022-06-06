import "./videoCard.css";
import { Link } from "react-router-dom";
import { BsFillPlayFill, BiDotsVerticalRounded } from "../../utils/icons";

const VideoCard = (eachVideo) => {
    return (
        <div className="ms_video-card ms_cp">
            <div className="ms_video-card-img-container">
                <img src={eachVideo.music_img} className="ms_video-card-img b-rad1" />
                <Link to={`/videoDetail/${eachVideo._id}`}>
                    <div className="ms_video-card-icon-container b-rad4">
                        <BsFillPlayFill className="ms_vedio-card-play-icon" />
                    </div>
                </Link>
                <div className="ms_video-card-options-icon-container b-rad4">
                    <BiDotsVerticalRounded className="vedio-card-options-icon" />
                </div>
            </div>
            <div className="ms_video-card-detail">
                <p className="ms_vedio-card-title">
                    {eachVideo.music_title}
                </p>
                <p className="ms_vedio-card-subtitle ms_flex">
                    {eachVideo.music_description.release_date}
                    <span className="ms_vedio-card-music-duration"> ({eachVideo.music_description.music_duration})</span>
                </p>
            </div>
        </div>
    );
}

export { VideoCard };