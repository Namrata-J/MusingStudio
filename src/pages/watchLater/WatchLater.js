import "./watchLater.css";
import { Header, SideBar, WatchLaterVideosListing } from "../../components";

const WatchLaterPage = () => {
    return (
        <div className="ms_watchlaterpage page">
            <div className="ms_watchlaterpage-header-section">
                <Header />
            </div>
            <div className="ms_watchlaterpage-main-section ms_flex">
                <SideBar />
                <div className="ms_privateVideoPage-content-section content-section ms_flex">
                    <h4 className="ms_fw-b">Liked Videos</h4>
                    <WatchLaterVideosListing />
                </div>
            </div>
        </div>
    );
}

export { WatchLaterPage };