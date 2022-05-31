import "./videoListing.css";
import { Header, SideBar } from "../../components";

const VideoListingPage = () => {
    return (
        <div className="ms_videolistingpage page">
            <div className="ms_videolistingpage-header-section">
                <Header />
            </div>
            <div className="ms_videolistingpage-main-section ms_flex">
                <SideBar />
            </div>
        </div>
    );
}

export { VideoListingPage };