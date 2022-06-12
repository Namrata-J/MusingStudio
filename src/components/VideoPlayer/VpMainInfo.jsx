import "./singleVideoListing.css";
import { useNavigate } from "react-router-dom";
import { useAuth, useLikedVideos } from "../../contexts/";
import { BsFillPlayCircleFill, AiFillLike, AiFillEye } from "../../utils/icons";

const VedioPlayerMainInfo = (msSingleVideoCardDetail) => {

    const navigate = useNavigate();
    const { isUserLoggedIn } = useAuth();
    const { checkIfVideoIsAlreadyLiked, userLikedVideos, addToLikedVideos, removeFromLikedVideos } = useLikedVideos();

    return (
        <div className="ms_vedio-player-info ms_flex">
            <BsFillPlayCircleFill className="ms_vp-logo" />
            <div className="ms_vp-heading" >
                <p className="ms_vp-title ms_fw-b">
                    {msSingleVideoCardDetail.music_title}
                </p>
                {
                    msSingleVideoCardDetail.movie_name !== "" && <p className="ms_vp-subtitle">
                        ({msSingleVideoCardDetail.movie_name})
                    </p>
                }
            </div>
            <div className="ms_vp-likes ms_flex ms_fw-b ms_cp"
                onClick={() => {
                    isUserLoggedIn ?
                        checkIfVideoIsAlreadyLiked(userLikedVideos, msSingleVideoCardDetail) ?
                            removeFromLikedVideos(msSingleVideoCardDetail._id) : addToLikedVideos(msSingleVideoCardDetail) :
                        navigate("/login")
                }}
                style={
                    checkIfVideoIsAlreadyLiked(userLikedVideos, msSingleVideoCardDetail) ?
                        { color: "var(--action)" } : { color: "var(--gray-shade-three)" }
                }>
                {
                    checkIfVideoIsAlreadyLiked(userLikedVideos, msSingleVideoCardDetail) ?
                        `${msSingleVideoCardDetail.likes + 1}` : `${msSingleVideoCardDetail.likes}`
                }
                <AiFillLike />
            </div>
            <div className="ms_vp-views ms_flex ms_fw-b">
                {msSingleVideoCardDetail.views}
                <AiFillEye />
            </div>
        </div>
    );
}

export { VedioPlayerMainInfo };