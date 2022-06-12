import React, { useContext, createContext, useState } from "react";
import { AiFillLike, BsFillCollectionPlayFill, MdWatchLater } from "../utils/icons";

const videoCardContext = createContext({ optionsPopUpList: [] });

const VideoCardProvider = ({ children }) => {

    const optionsPopUpList = [
        {
            optionIcon: <AiFillLike />,
            optionName: "Add To Liked",
            optionFor: "LIKE_OPERATION"
        },
        {
            optionIcon: <BsFillCollectionPlayFill />,
            optionName: "Add To Playlist",
            optionFor: "PLAYLIST_OPERATION"
        },
        {
            optionIcon: <MdWatchLater />,
            optionName: "Add To WatchLater",
            optionFor: "WATCH_LATER_OPERATION"
        }
    ];

    const [videoIdOfCard, setVideoIdOfCard] = useState("");

    return <videoCardContext.Provider value={{
        optionsPopUpList,
        videoIdOfCard,
        setVideoIdOfCard
    }}>
        {children}
    </videoCardContext.Provider>
}

const useVideoCard = () => useContext(videoCardContext);

export { useVideoCard, VideoCardProvider };