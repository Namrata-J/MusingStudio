import "./videoCard.css";
import { Link, useNavigate } from "react-router-dom";
import { useVideoCard, useLikedVideos, useAuth } from "../../contexts/";
import { BsFillPlayFill, BiDotsVerticalRounded } from "../../utils/icons";

const VideoCard = (eachVideo) => {

    const {
        optionsPopUpList,
        videoIdOfCard,
        setVideoIdOfCard } = useVideoCard();
    const { addToLikedVideos,
        userLikedVideos,
        removeFromLikedVideos,
        checkIfVideoIsAlreadyLiked } = useLikedVideos();
    const { isUserLoggedIn } = useAuth();
    const navigate = useNavigate();

    const getTheEachOptionOperation = (eachOption, checkIfVideoIsAlreadyLiked, description) => {
        switch (eachOption.optionFor) {
            case "LIKE_OPERATION":
                if (description === "FOR_OPERATION") {
                    checkIfVideoIsAlreadyLiked(userLikedVideos, eachVideo) ? removeFromLikedVideos(eachVideo._id) : addToLikedVideos(eachVideo)
                } else
                    if (description === "FOR_STYLE") {
                        return checkIfVideoIsAlreadyLiked(userLikedVideos, eachVideo) ? { color: "var(--action)" } : { color: "var(--black)" }
                    } else
                        return checkIfVideoIsAlreadyLiked(userLikedVideos, eachVideo) ? "Remove" : `${eachOption.optionName}`
        }
    }

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
                    onClick={(e) => {
                        e.stopPropagation();
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
                                    key={index}
                                    onClick={() => {
                                        isUserLoggedIn ?
                                            getTheEachOptionOperation(eachOption, checkIfVideoIsAlreadyLiked, "FOR_OPERATION") :
                                            navigate("/login")
                                    }}
                                    style={
                                        getTheEachOptionOperation(eachOption, checkIfVideoIsAlreadyLiked, "FOR_STYLE")
                                    }>
                                    <span className="ms_video-card-options-popUp-container-icon">
                                        {eachOption.optionIcon}
                                    </span>
                                    <span>
                                        {getTheEachOptionOperation(eachOption, checkIfVideoIsAlreadyLiked, "FOR_INNERTEXT")}
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