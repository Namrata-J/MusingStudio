import "./videoCard.css";
import { Link } from "react-router-dom";
import { useVideoCard } from "../../contexts/";
import { BsFillPlayFill, BiDotsVerticalRounded } from "../../utils/icons";

const VideoCard = (eachVideo) => {

    const { optionsPopUpList,
        videoIdOfCard,
        setVideoIdOfCard } = useVideoCard();

    return (
        <div className="ms_video-card ms_cp">
            <div className="ms_video-card-img-container">
                <img
                    src={eachVideo.music_img}
                    className="ms_video-card-img b-rad1" />
                <Link
                    to={`/videoDetail/${eachVideo._id}`}
                    className="ms_video-card-play-icon-link">
                    <div className="ms_video-card-icon-container b-rad4">
                        <BsFillPlayFill className="ms_video-card-play-icon" />
                    </div>
                </Link>
                <div
                    className="ms_video-card-options-icon-container b-rad4"
                    onClick={() => {
                        eachVideo._id === videoIdOfCard ?
                            setVideoIdOfCard("") : setVideoIdOfCard(eachVideo._id)
                    }}>
                    <BiDotsVerticalRounded className="ms_video-card-options-icon" />
                    <div className="ms_video-card-options-popup b-rad1 ms_flex"
                        style={{
                            display: videoIdOfCard === eachVideo._id ?
                                "flex" : "none"
                        }}>
                        {
                            optionsPopUpList.map((eachOption, index) => (
                                <div
                                    className="ms_video-card-option ms_flex"
                                    key={index}>
                                    <span className="ms_video-card-options-popUp-container-icon">
                                        {eachOption.optionIcon}
                                    </span>
                                    <span>
                                        {eachOption.optionName}
                                    </span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="ms_video-card-detail">
                <p className="ms_video-card-title">
                    {eachVideo.music_title}
                </p>
                <p className="ms_video-card-subtitle ms_flex">
                    {eachVideo.music_description.release_date}
                    <span className="ms_video-card-music-duration">
                        ({eachVideo.music_description.music_duration})
                    </span>
                </p>
            </div>
        </div>
    );
}

export { VideoCard };