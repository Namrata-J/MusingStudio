import React, { useState, useEffect, useContext, createContext } from "react";
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
        } catch (error) {
            console.log(error)
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
                console.log(error)
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
        } catch (error) {
            console.log(error)
        }
    }

    const clearWholeHistory = async () => {
        try {
            const response = await axios.delete("/api/user/history/all", {
                headers: { authorization: encodedData }
            })
            setUserHistory(response.data.history)
        } catch (error) {
            console.log(error)
        }
    }

    return <historyContext.Provider value={{ addVideoToHistory, removeVideoFromHistory, clearWholeHistory, userHistory }}>
        {children}
    </historyContext.Provider>
}

const useHistory = () => useContext(historyContext);

export { useHistory, HistoryProvider };