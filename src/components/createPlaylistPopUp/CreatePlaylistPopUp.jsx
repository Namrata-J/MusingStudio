import "./createPlaylistPopUp.css";
import { VscClose, MdAdd } from "../../utils/icons";
import { usePlaylist } from "../../contexts/";

const CreatePlaylistPopUp = () => {

    const {
        createPlaylistPopUpDisplay,
        setCreatePlaylistPopUpDisplay,
        playlistName,
        setPlaylistName,
        createPlaylist,
        userPlaylists,
        addVideoToPlaylist
    } = usePlaylist();

    return (
        <div className="ms_createPlaylist-popUp-container"
            style={{ display: createPlaylistPopUpDisplay }}>
            <div className="ms_createPlaylist-close-icon-container">
                <VscClose className="ms_createPlaylist-close-icon ms_cp"
                    onClick={() => setCreatePlaylistPopUpDisplay("none")} />
            </div>
            <div className="ms_createPlaylist-popUp-innercontainer ms_flex-c">
                <div className="ms_createPlaylist-popUp b-rad1">
                    <h4>Create Playlist</h4>

                    <div className="ms_cpp-input-container ms_flex">
                        <input
                            type="text"
                            className="ms_cpp-input ms_input"
                            placeholder="Playlist Name..."
                            value={playlistName}
                            onChange={(e) => setPlaylistName(e.target.value)} />
                        <button
                            className="ms_cpp-create-btn ms_fw-b ms_input ms_cp"
                            onClick={() => {
                                playlistName === "" ? "" :
                                createPlaylist(playlistName)
                                setPlaylistName("")
                            }}>
                            Create
                        </button>
                    </div>

                    <div className="ms_created-playlists-container b-rad1">
                        {
                            userPlaylists?.length === 0 ? "" :
                            userPlaylists?.map((eachPlaylist) => (
                                    <div
                                        className="ms-created-playlist b-rad1 ms_flex"
                                        key={eachPlaylist._id}>
                                        <p className="ms_fw-b">{eachPlaylist.title}</p>
                                        <p className="ms_videos-countInPlaylist">
                                            {eachPlaylist.videos.length} videos
                                        </p>
                                        <div className="ms_add-videoToPlaylist-icon-container b-rad4 ms_cp"
                                        onClick={() => addVideoToPlaylist(eachPlaylist._id, )}>
                                            <MdAdd className="ms_add-videoToPlaylist-icon" />
                                        </div>
                                    </div>
                                ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export { CreatePlaylistPopUp };