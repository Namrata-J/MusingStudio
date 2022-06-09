import "./singleVideoListing.css";
import { Link } from "react-router-dom";
import { useVideo } from "../../contexts/";
import { BiDotsVerticalRounded } from "../../utils/icons";

const VideoRecommendation = (msSingleVideoCardDetail) => {

    const { msVideos } = useVideo();
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
                                    <div className="ms_recommended-video-icon-container b-rad4">
                                        <BiDotsVerticalRounded />
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