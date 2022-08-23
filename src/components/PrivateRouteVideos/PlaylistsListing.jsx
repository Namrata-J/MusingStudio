import "./playlistslisting.css";
import { useNavigate } from "react-router-dom";
import { usePlaylist } from "../../contexts/";
import { MdPlaylistPlay, AiFillDelete } from "../../utils/icons";

const PlaylistsListing = () => {

    const { userPlaylists, deletePlaylist, getPlaylist } = usePlaylist();
    const navigate = useNavigate();

    return (
        <div className="ms_playlistsListing-section ms_flex">
            {
                userPlaylists.length === 0 ?
                    <div className="no-playlists-created-component ms_flex-c">
                        <p className="ms_playlists-created-text ms_fw-b">
                            No playlists are created
                        </p>
                    </div> : userPlaylists.map((playlist) => (
                        <div
                            className="ms_playlist-card ms_cp"
                            key={playlist._id}
                            onClick={() => {
                                getPlaylist(playlist._id)
                                navigate(`/singlePlaylist/${playlist._id}`)
                            }}>
                            <div className="ms_playlist-card-cover-img-container b-rad1">
                                {
                                    playlist.videos.length > 0 ?
                                        <img
                                            className="ms_playlist-card-cover-img"
                                            src={playlist.videos[0].music_img} /> : ""
                                }
                                <div className="ms_playlist-icon-container ms_flex-c">
                                    <MdPlaylistPlay />
                                </div>
                                <div
                                    className="ms_playlist-delete-icon-container ms_flex-c b-rad4"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        deletePlaylist(playlist._id)
                                    }}>
                                    <AiFillDelete />
                                </div>
                            </div>
                            <div className="ms_playlist-card-info ms_flex">
                                <span className="ms_playlist-card-title ms_fw-b">
                                    {playlist.title}
                                </span>
                                <span className="ms_playlist-card-subtitle">
                                    {playlist.videos.length} videos
                                </span>
                            </div>
                        </div>
                    ))
            }
        </div>
    );
}

export { PlaylistsListing };