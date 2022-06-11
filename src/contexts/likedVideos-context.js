import React, { useState, useContext, createContext } from "react";

const likedVideosContext = createContext({ likedVideoData: {} });

const LikedVideosProvider = ({ children }) => {
    return <likedVideosContext.Provider>
        { children }
    </likedVideosContext.Provider>
}

const useLikedVideos = () => useContext(likedVideosContext);

export { useLikedVideos, LikedVideosProvider };