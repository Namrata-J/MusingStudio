import React, { useState, useEffect, useContext, createContext } from "react";
import { toastStyle } from "../utils/customToastTheme";
import toast from 'react-hot-toast';
import { useAuth } from "./";
import axios from "axios";

const watchLaterContext = createContext({ watchLaterVideos: [] });

const WatchLaterProvider = ({ children }) => {

    const { encodedData } = useAuth();
    const [addedToWatchLaterVideos, setAddedToWatchLaterVideos] = useState([]);
    const [userWatchLaterVideos, setUserWatchLaterVideos] = useState([]);

    const addToWatchLater = async (watchLaterVideo) => {
        try {
            const response = await axios.post("/api/user/watchlater",
                {
                    video: { ...watchLaterVideo }
                },
                {
                    headers: { authorization: encodedData }
                }
            )
            setAddedToWatchLaterVideos(response.data.watchlater)
            toast.success('Added To WatchLater', toastStyle)
        } catch (error) {
            toast.error('Server Error: Failed Attempt', toastStyle)
        }
    }

    useEffect(() => {
        const getWatchLaterVideos = async () => {
            try {
                const response = await axios.get("/api/user/watchlater", {
                    headers: { authorization: encodedData }
                })
                setUserWatchLaterVideos(response.data.watchlater)
            } catch (error) {
                toast.error('Server Error: Failed Attempt', toastStyle)
            }
        }

        getWatchLaterVideos();
    }, [addedToWatchLaterVideos]);

    const deleteFromWatchLaterVideos = async (videoId) => {
        try {
            const response = await axios.delete(`/api/user/watchlater/${videoId}`, {
                headers: { authorization: encodedData }
            })
            setUserWatchLaterVideos(response.data.watchlater)
            toast.success('Removed From WatchLater', toastStyle)
        } catch (error) {
            toast.error('Server Error: Failed Attempt', toastStyle)
        }
    }

    const checkIfVideoIsAlreadyAddedToWatchLater = (userWatchLaterVideos, eachVideo) => userWatchLaterVideos.some(
        (eachWatchLaterVideo) => eachWatchLaterVideo._id === eachVideo._id
    )

    return <watchLaterContext.Provider
        value={{
            addToWatchLater,
            userWatchLaterVideos,
            deleteFromWatchLaterVideos,
            checkIfVideoIsAlreadyAddedToWatchLater
        }}>
        {children}
    </watchLaterContext.Provider>
}

const useWatchLater = () => useContext(watchLaterContext);

export { useWatchLater, WatchLaterProvider };