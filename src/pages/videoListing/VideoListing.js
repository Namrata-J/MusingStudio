import "./videoListing.css";
import { Header, SideBar, ChipsListingSection, VideoCardListingSection } from "../../components";

const VideoListingPage = () => {
    return (
        <div className="ms_videolistingpage page">
            <div className="ms_videolistingpage-header-section">
                <Header />
            </div>
            <div className="ms_videolistingpage-main-section ms_flex">
                <SideBar />
                <div className="ms_videolistingpage-content-section content-section ms_flex">
                    <ChipsListingSection />
                    <VideoCardListingSection />
                </div>
            </div>
        </div>
    );
}

export { VideoListingPage };
