import "./singleVideoListing.css";
import { Link, useNavigate } from "react-router-dom";
import { useVideo, useVideoCard, useAuth, useOptionsIcon } from "../../contexts/";
import { BiDotsVerticalRounded } from "../../utils/icons";

const VideoRecommendation = (msSingleVideoCardDetail) => {

    const navigate = useNavigate();
    const { msVideos } = useVideo();
    const { isUserLoggedIn } = useAuth();
    const { getTheEachOptionOperation } = useOptionsIcon();
    const { optionsPopUpList, videoIdOfCard, setVideoIdOfCard } = useVideoCard();
    let filteredRecommendations = [];

    if (msSingleVideoCardDetail.category_type !== undefined) {
        filteredRecommendations = msVideos.filter(eachVideoObj => eachVideoObj.category_type.some(eachType => msSingleVideoCardDetail.category_type.includes(eachType)))
    }

    return (
        <div className="ms_other-video-recommendations">
            {
                msSingleVideoCardDetail.category_type !== undefined && <div className="ms_recommendations-container ms_flex">
                    {
                        filteredRecommendations.map((eachRecommendation) => (
                            <Link className="ms_recommended-video-link" to={`/videoDetail/${eachRecommendation._id}`} key={eachRecommendation._id}>
                                <div className="ms_recommended-video ms_flex ms_cp b-rad1">
                                    <img src={eachRecommendation.music_img} />
                                    <div className="ms_recommended-video-info ms_flex">
                                        <p className="ms_recommended-video-title ms_fw-b">{eachRecommendation.music_title}</p>
                                        <p className="ms_recommended-video-duration">{eachRecommendation.music_description.music_duration}</p>
                                    </div>
                                    <div
                                        className="ms_recommended-video-icon-container b-rad4"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            e.preventDefault();
                                            eachRecommendation._id === videoIdOfCard ?
                                                setVideoIdOfCard("") : setVideoIdOfCard(eachRecommendation._id)
                                        }}>
                                        <BiDotsVerticalRounded />
                                        <div
                                            className="ms_recommended-video-options-popUp b-rad1 ms_flex"
                                            style={{
                                                display: videoIdOfCard === eachRecommendation._id ?
                                                    "flex" : "none"
                                            }}>
                                            {
                                                optionsPopUpList.map((eachOption, index) => (
                                                    <div
                                                        className="ms_recommended-video-popUp-eachOption"
                                                        key={index}
                                                        onClick={() => {
                                                            isUserLoggedIn ?
                                                                getTheEachOptionOperation(eachOption, eachRecommendation, "FOR_OPERATION") :
                                                                navigate("/login")
                                                        }}
                                                        style={
                                                            getTheEachOptionOperation(eachOption, eachRecommendation, "FOR_STYLE")
                                                        }>
                                                        {eachOption.optionIcon}
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            }
        </div>
    );
}

export { VideoRecommendation };