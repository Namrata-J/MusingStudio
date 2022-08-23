import React, { useState, useEffect, useContext, createContext } from "react";
import { toastStyle } from "../utils/customToastTheme";
import toast from 'react-hot-toast';
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
            toast.success('Added To Liked', toastStyle)
        } catch (error) {
            toast.error('Server Error: Failed Attempt', toastStyle)
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
                toast.error('Server Error: Failed Attempt', toastStyle)
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
            toast.success('Removed From Liked', toastStyle)
        } catch (error) {
            toast.error('Server Error: Failed Attempt', toastStyle)
        }
    }

    const checkIfVideoIsAlreadyLiked = (userLikedVideos, eachVideo) => userLikedVideos.some(
        (eachLikedVideo) => eachLikedVideo._id === eachVideo._id
    )

    return <likedVideosContext.Provider
        value={{
            addToLikedVideos,
            userLikedVideos,
            removeFromLikedVideos,
            checkIfVideoIsAlreadyLiked
        }}>
        {children}
    </likedVideosContext.Provider>
}

const useLikedVideos = () => useContext(likedVideosContext);

export { useLikedVideos, LikedVideosProvider };