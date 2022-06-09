import "./videoPlayer.css";
import ReactPlayer from 'react-player';

const VideoPlayer = (msSingleVideoCardDetail) => {
    return (
        <div className="ms_vedio-player">
            <ReactPlayer
                width={"100%"}
                height={"100%"}
                className="react-player"
                url={msSingleVideoCardDetail.music_video}
                muted={false}
                playing={true}
                light={msSingleVideoCardDetail.music_img}
                controls={true} />
        </div>
    );
}

export { VideoPlayer };