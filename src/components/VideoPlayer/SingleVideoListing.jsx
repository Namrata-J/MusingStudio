import "./singleVideoListing.css";
import { VideoPlayer, VedioPlayerMainInfo, VideoPlayerMetaInfo, VideoRecommendation } from "../";

const SingleVideoListing = (msSingleVideoCardDetail) => {
    return (
        <div className="ms_single-video-listing-component ms_flex">
            <div className="ms_vedio-player-section ms_flex">
                <VideoPlayer {...msSingleVideoCardDetail} />
                <VedioPlayerMainInfo {...msSingleVideoCardDetail} />
                <VideoPlayerMetaInfo {...msSingleVideoCardDetail} />
            </div>
            <VideoRecommendation {...msSingleVideoCardDetail} />
        </div>
    );
}

export { SingleVideoListing };