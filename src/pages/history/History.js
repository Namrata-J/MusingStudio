import "./history.css";
import { useHistory } from "../../contexts/";
import { MdAutoDelete } from "../../utils/icons";
import { Header, SideBar, HistoryVideosListing } from "../../components";

const HistoryPage = () => {

    const { clearWholeHistory } = useHistory();

    return (
        <div className="ms_historypage page">
            <div className="ms_historypage-header-section">
                <Header />
            </div>
            <div className="ms_historypage-main-section ms_flex">
                <SideBar />
                <div className="ms_privateVideoPage-content-section content-section ms_flex">
                    <h4 className="ms_fw-b">History Videos</h4>
                    <HistoryVideosListing />
                    <div className="ms_clearAllHistory-icon-container ms_cp b-rad4"
                    onClick={clearWholeHistory}>
                        <MdAutoDelete className="ms_clearAllHistory-icon" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export { HistoryPage };