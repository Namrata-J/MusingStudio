import React, { useState, useEffect, useContext, createContext } from "react";
import { useAuth } from "./";
import axios from "axios";

const likedVideosContext = createContext({ likedVideo: {} });

const LikedVideosProvider = ({ children }) => {

    const { encodedData } = useAuth();
    const [addedLikedVideos, setAddedLikedVideos] = useState([]);
    const [userLikedVideos, setUserLikedVideos] = useState([]);

    const addToLikedVideos = async (likedVideo) => {
        try {
            const response = await axios.post("/api/user/likes",
                {
                    video: { ...likedVideo }
                },
                {
                    headers: { authorization: encodedData }
                }
            )
            setAddedLikedVideos(response.data.likes)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const getLikedVideos = async () => {
            try {
                const response = await axios.get("/api/user/likes", {
                    headers: { authorization: encodedData }
                })

                setUserLikedVideos(response.data.likes)
            } catch (error) {
                console.log(error)
            }
        }

        getLikedVideos();
    }, [addedLikedVideos]);

    const removeFromLikedVideos = async (videoId) => {
        try {
            const response = await axios.delete(`/api/user/likes/${videoId}`, {
                headers: { authorization: encodedData }
            })
            setUserLikedVideos(response.data.likes)
        } catch (error) {
            console.log(error)
        }
    }

    const checkIfVideoIsAlreadyLiked = (userLikedVideos, eachVideo) => userLikedVideos.some((eachLikedVideo) => eachLikedVideo._id === eachVideo._id)

    return <likedVideosContext.Provider value={{ addToLikedVideos, userLikedVideos, removeFromLikedVideos, checkIfVideoIsAlreadyLiked}}>
        {children}
    </likedVideosContext.Provider>
}

const useLikedVideos = () => useContext(likedVideosContext);

export { useLikedVideos, LikedVideosProvider };