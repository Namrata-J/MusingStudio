import React, { useState, useEffect, createContext, useContext } from "react";
import { toastStyle } from "../utils/customToastTheme";
import toast from 'react-hot-toast';
import { useAuth } from "./";
import axios from "axios";

const playlistContext = createContext(null);

const PlaylistProvider = ({ children }) => {

    const [createPlaylistPopUpDisplay, setCreatePlaylistPopUpDisplay] = useState("none");
    const [playlistName, setPlaylistName] = useState("");
    const [addedPlaylists, setAddedPlaylists] = useState([]);
    const [userPlaylists, setUserPlaylists] = useState([]);
    const [modifiedPlaylist, setModifiedPlaylist] = useState([]);
    const [userPlaylistObj, setUserPlaylistObj] = useState({});
    const [videoToBeAddedInPlaylist, setVideoToBeAddedInPlaylist] = useState({});
    const { encodedData } = useAuth();

    const doAddAPlaylistOptionOperation = (eachVideo) => {
        setVideoToBeAddedInPlaylist(eachVideo)
        setCreatePlaylistPopUpDisplay("block")
    }

    const createPlaylist = async (playlistName) => {
        try {
            const response = await axios.post("/api/user/playlists",
                {
                    playlist: { title: playlistName, description: "" }
                },
                {
                    headers: { authorization: encodedData }
                })
            setAddedPlaylists(response.data.playlists)
            toast.success('New Playlist Created', toastStyle)
        } catch (error) {
            toast.error('Server Error: Failed Attempt', toastStyle)
        }
    }

    useEffect(() => {
        const getUserPlaylists = async () => {
            try {
                const response = await axios.get("/api/user/playlists", {
                    headers: { authorization: encodedData }
                })
                setUserPlaylists(response.data.playlists)
            } catch (error) {
                toast.error('Server Error: Failed Attempt', toastStyle)
            }
        }

        getUserPlaylists();
    }, [addedPlaylists, modifiedPlaylist, userPlaylistObj])

    const deletePlaylist = async (playlistId) => {
        try {
            const response = await axios.delete(`/api/user/playlists/${playlistId}`, {
                headers: { authorization: encodedData }
            })
            setUserPlaylists(response.data.playlists)
            toast.success('Playlist deleted', toastStyle)
        } catch (error) {
            toast.error('Server Error: Failed Attempt', toastStyle)
        }
    }

    const addVideoToPlaylist = async (playlistId) => {
        try {
            const response = await axios.post(`/api/user/playlists/${playlistId}`,
                {
                    video: { ...videoToBeAddedInPlaylist }
                },
                {
                    headers: { authorization: encodedData }
                })
            setModifiedPlaylist(response.data.playlist)
            toast.success('Video Added To Playlist', toastStyle)
        } catch (error) {
            toast.error('Server Error: Failed Attempt', toastStyle)
        }
    }

    const getPlaylist = async (playlistId) => {
        try {
            const response = await axios.get(`/api/user/playlists/${playlistId}`, {
                headers: { authorization: encodedData }
            })
            setUserPlaylistObj(response.data.playlist)
        } catch (error) {
            toast.error('Server Error: Failed Attempt', toastStyle)
        }
    }

    const deleteVideoFromPlaylist = async (playlistId, videoId) => {
        try {
            const response = await axios.delete(`/api/user/playlists/${playlistId}/${videoId}`, {
                headers: { authorization: encodedData }
            })
            setUserPlaylistObj(response.data.playlist)
            toast.success('Video Deleted From Playlist', toastStyle)
        } catch (error) {
            toast.error('Server Error: Failed Attempt', toastStyle)
        }
    }

    return <playlistContext.Provider
        value={{
            createPlaylistPopUpDisplay,
            setCreatePlaylistPopUpDisplay,
            playlistName,
            setPlaylistName,
            createPlaylist,
            addedPlaylists,
            setAddedPlaylists,
            userPlaylists,
            deletePlaylist,
            videoToBeAddedInPlaylist,
            setVideoToBeAddedInPlaylist,
            doAddAPlaylistOptionOperation,
            addVideoToPlaylist,
            getPlaylist,
            userPlaylistObj,
            deleteVideoFromPlaylist
        }}>
        {children}
    </playlistContext.Provider>
}

const usePlaylist = () => useContext(playlistContext);

export { usePlaylist, PlaylistProvider };