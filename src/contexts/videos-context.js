import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

const videoContext = createContext({ msVideos: [] });

const VideoProvider = ({ children }) => {

    const [msVideos, setMsVideos] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/api/videos")
                setMsVideos(response?.data?.videos)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, []);

    return <videoContext.Provider value={{ msVideos, setMsVideos }}>
        {children}
    </videoContext.Provider>
}

const useVideo = () => useContext(videoContext);

export { useVideo, VideoProvider };