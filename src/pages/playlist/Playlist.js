import "./playlist.css";
import { Header, SideBar } from "../../components";

const PlaylistPage = () => {
    return (
        <div className="ms_playlistpage page">
            <div className="ms_playlistpage-header-section">
                <Header />
            </div>
            <div className="ms_playlistpage-main-section ms_flex">
                <SideBar />
            </div>
        </div>
    );
}

export { PlaylistPage };