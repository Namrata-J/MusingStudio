import React, { useState, useEffect, useContext, createContext } from "react";
import { toastStyle } from "../utils/customToastTheme";
import toast from 'react-hot-toast';
import { useAuth } from "./";
import axios from "axios";

const historyContext = createContext({ historyVideos: [] });

const HistoryProvider = ({ children }) => {

    const { encodedData } = useAuth();
    const [videosAddedToHistory, setVideosAddedToHistory] = useState([]);
    const [userHistory, setUserHistory] = useState([]);

    const addVideoToHistory = async (watchedVideo) => {
        try {
            const response = await axios.post("/api/user/history",
                {
                    video: { ...watchedVideo }
                },
                {
                    headers: { authorization: encodedData }
                })
            setVideosAddedToHistory(response.data.history)
            toast.success('Video Added To History', toastStyle)
        } catch (error) {
            toast.error('Server error: cannot add video to history', toastStyle)
        }
    }

    useEffect(() => {
        const getVideosOfUserHistory = async () => {
            try {
                const response = await axios.get("/api/user/history", {
                    headers: { authorization: encodedData }
                })
                setUserHistory(response.data.history)
            } catch (error) {
                toast.error('Server error: cannot add video to history', toastStyle)
            }
        }

        getVideosOfUserHistory();
    }, [videosAddedToHistory])

    const removeVideoFromHistory = async (videoId) => {
        try {
            const response = await axios.delete(`/api/user/history/${videoId}`, {
                headers: { authorization: encodedData }
            })
            setUserHistory(response.data.history)
            toast.success('A Video Removed From History', toastStyle)
        } catch (error) {
            toast.error('Server error occurred', toastStyle)
        }
    }

    const clearWholeHistory = async () => {
        try {
            const response = await axios.delete("/api/user/history/all", {
                headers: { authorization: encodedData }
            })
            setUserHistory(response.data.history)
            toast.success('Whole History Cleared', toastStyle)
        } catch (error) {
            toast.error('Server error occurred', toastStyle)
        }
    }

    return <historyContext.Provider value={{ addVideoToHistory, removeVideoFromHistory, clearWholeHistory, userHistory }}>
        {children}
    </historyContext.Provider>
}

const useHistory = () => useContext(historyContext);

export { useHistory, HistoryProvider };