import "./singleVideoListing.css";
import { BsFillPlayCircleFill, AiFillLike, AiFillEye } from "../../utils/icons";

const VedioPlayerMainInfo = (msSingleVideoCardDetail) => {
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
            <div className="ms_vp-likes ms_flex ms_fw-b">
                {msSingleVideoCardDetail.likes}
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