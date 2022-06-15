import React, { useState, useEffect, createContext, useContext } from "react";
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
        } catch (error) {
            console.log(error)
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
                console.log(error)
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
        } catch (error) {
            console.log(error)
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
        } catch (error) {
            console.log(errror)
        }
    }

    const getPlaylist = async (playlistId) => {
        try {
            const response = await axios.get(`/api/user/playlists/${playlistId}`, {
                headers: { authorization: encodedData }
            })
            setUserPlaylistObj(response.data.playlist)
        } catch (error) {
            console.log(error)
        }
    }

    const deleteVideoFromPlaylist = async (playlistId, videoId) => {
        try {
            const response = await axios.delete(`/api/user/playlists/${playlistId}/${videoId}`, {
                headers: { authorization: encodedData }
            })
            setUserPlaylistObj(response.data.playlist)
        } catch (error) {
            console.log(error)
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