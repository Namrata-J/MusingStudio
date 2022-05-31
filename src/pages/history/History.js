import "./history.css";
import { Header, SideBar } from "../../components";

const HistoryPage = () => {
    return (
        <div className="ms_historypage page">
            <div className="ms_historypage-header-section">
                <Header />
            </div>
            <div className="ms_historypage-main-section ms_flex">
                <SideBar />
            </div>
        </div>
    );
}

export { HistoryPage };