import "./likedVideos.css";
import { Header, SideBar, LikedVideosListing } from "../../components";

const LikedVideosPage = () => {
    return (
        <div className="ms_likedVideospage page">
            <div className="ms_likedVideospage-header-section">
                <Header />
            </div>
            <div className="ms_likedVideospage-main-section ms_flex">
                <SideBar />
                <div className="ms_privateVideoPage-content-section ms_likedVideospage-content-section content-section ms_flex">
                    <h4 className="ms_fw-b">Liked Videos</h4>
                    <LikedVideosListing />
                </div>
            </div>
        </div>
    );
}

export { LikedVideosPage };