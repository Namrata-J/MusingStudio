import "./playlist.css";
import { Header, SideBar, PlaylistsListing } from "../../components";

const PlaylistPage = () => {
    return (
        <div className="ms_playlistpage page">
            <div className="ms_playlistpage-header-section">
                <Header />
            </div>
            <div className="ms_playlistpage-main-section ms_flex">
                <SideBar />
                <div className="ms_privateVideoPage-content-section content-section ms_flex">
                    <h4 className="ms_fw-b">Playlists</h4>
                    <PlaylistsListing />
                </div>
            </div>
        </div>
    );
}

export { PlaylistPage };