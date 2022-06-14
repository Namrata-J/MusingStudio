import "./privateRouteVideos.css";
import { PrivateRouteCard } from "../";
import { useHistory } from "../../contexts/";

const HistoryVideosListing = () => {

    const { userHistory } = useHistory();

    return (
        <div className="ms_privateRouteVideoCard-listing-section ms_flex">
            {
                userHistory.length === 0 ? <div className="ms_no-liked-videos-text-container ms_flex-c">
                <p className="ms_no-liked-videos-text ms_fw-b">
                    Looks like you haven't watched any videos yet
                </p>
            </div> :
                userHistory.map((eachVideo) => (
                    <PrivateRouteCard {...{ eachVideo }} key={eachVideo._id} />
                ))
            }
        </div>
    );
}

export { HistoryVideosListing };