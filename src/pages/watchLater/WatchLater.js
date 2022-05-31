import "./watchLater.css";
import { Header, SideBar } from "../../components";

const WatchLaterPage = () => {
    return (
        <div className="ms_watchlaterpage page">
            <div className="ms_watchlaterpage-header-section">
                <Header />
            </div>
            <div className="ms_watchlaterpage-main-section ms_flex">
                <SideBar />
            </div>
        </div>
    );
}

export { WatchLaterPage };