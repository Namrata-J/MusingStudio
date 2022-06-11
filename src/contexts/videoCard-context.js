import React, { useContext, createContext, useState } from "react";
import { AiFillLike, BsFillCollectionPlayFill, MdWatchLater } from "../utils/icons";

const videoCardContext = createContext({ optionsPopUpList: [] });

const VideoCardProvider = ({ children }) => {

    const optionsPopUpList = [
        {
            optionIcon: <AiFillLike />,
            optionName: "Add To Liked"
        },
        {
            optionIcon: <BsFillCollectionPlayFill />,
            optionName: "Add To Playlist"
        },
        {
            optionIcon: <MdWatchLater />,
            optionName: "Add To WatchLater"
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