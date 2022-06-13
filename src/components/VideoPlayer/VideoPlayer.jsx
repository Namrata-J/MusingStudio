import "./videoPlayer.css";
import ReactPlayer from 'react-player';
import { useNavigate } from "react-router-dom";
import { useAuth, useHistory } from "../../contexts/";

const VideoPlayer = (msSingleVideoCardDetail) => {

    const { isUserLoggedIn } = useAuth();
    const { addVideoToHistory } = useHistory();
    const navigate = useNavigate();

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
                controls={true}
                onStart={() => {
                    isUserLoggedIn ?
                        addVideoToHistory(msSingleVideoCardDetail) :
                        navigate("/login")
                }} />
        </div>
    );
}

export { VideoPlayer };