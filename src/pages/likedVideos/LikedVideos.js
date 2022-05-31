import "./likedVideos.css";
import { Header, SideBar } from "../../components";

const LikedVideosPage = () => {
    return (
        <div className="ms_likedVideospage page">
            <div className="ms_likedVideospage-header-section">
                <Header />
            </div>
            <div className="ms_likedVideospage-main-section ms_flex">
                <SideBar />
            </div>
        </div>
    );
}

export { LikedVideosPage };