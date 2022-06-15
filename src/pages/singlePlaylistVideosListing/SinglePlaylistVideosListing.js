import "./singlePlaylistVideosListing.css";
import { SinglePlaylistListing } from "../../components/";
import { useParams } from "react-router-dom";

const SinglePlaylistVideosListingPage = () => {

    const { playlistId } = useParams();

    return (
        <div className="ms_singlePlaylistVideosListing-page page ms_flex">
            <h4>Your Playlist Videos</h4>
            <SinglePlaylistListing playlistId= {playlistId} />
        </div>
    );
}

export { SinglePlaylistVideosListingPage };