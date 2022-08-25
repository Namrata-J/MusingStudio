import "./playlistslisting.css";
import { PrivateRouteCard } from "../";
import { usePlaylist } from "../../contexts/";

const SinglePlaylistListing = (playlistId) => {

    const { userPlaylistObj } = usePlaylist();

    return (
        <div className="ms_privateRouteVideoCard-listing-section ms_flex">
            {
                userPlaylistObj?.videos?.length === 0 ?
                    <div className="ms_no-playlist-videos-text-container ms_flex-c">
                        <p className="ms_no-playlist-videos-text ms_fw-b">
                            This playlist is empty
                        </p>
                    </div> :
                    userPlaylistObj?.videos?.map((eachVideo) => (
                        <PrivateRouteCard
                            {...{ eachVideo }}
                            {...playlistId}
                            key={eachVideo._id} />
                    ))
            }
        </div>
    );
}

export { SinglePlaylistListing };