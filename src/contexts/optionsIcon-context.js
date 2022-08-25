import React, { useContext, createContext } from "react";
import { useLikedVideos, useWatchLater } from "./";

const optionsIconContext = createContext(null);

const OptionsIconProvider = ({ children }) => {

    const {
        addToLikedVideos,
        userLikedVideos,
        removeFromLikedVideos,
        checkIfVideoIsAlreadyLiked
    } = useLikedVideos();
    const {
        addToWatchLater,
        userWatchLaterVideos,
        deleteFromWatchLaterVideos,
        checkIfVideoIsAlreadyAddedToWatchLater
    } = useWatchLater();

    const getTheEachOptionOperation = (eachOption, eachVideo, description) => {
        switch (eachOption.optionFor) {
            case "LIKE_OPERATION":
                if (description === "FOR_OPERATION") {
                    checkIfVideoIsAlreadyLiked(userLikedVideos, eachVideo) ?
                        removeFromLikedVideos(eachVideo._id) :
                        addToLikedVideos(eachVideo)
                    break;
                } else
                    if (description === "FOR_STYLE") {
                        return checkIfVideoIsAlreadyLiked(userLikedVideos, eachVideo) ?
                            { color: "var(--action)" } :
                            { color: "var(--black)" }
                    } else
                        return checkIfVideoIsAlreadyLiked(userLikedVideos, eachVideo) ?
                            "Remove" :
                            `${eachOption.optionName}`

            case "WATCH_LATER_OPERATION":
                if (description === "FOR_OPERATION") {
                    checkIfVideoIsAlreadyAddedToWatchLater(userWatchLaterVideos, eachVideo) ?
                        deleteFromWatchLaterVideos(eachVideo._id) :
                        addToWatchLater(eachVideo)
                    break;
                } else
                    if (description === "FOR_STYLE") {
                        return checkIfVideoIsAlreadyAddedToWatchLater(userWatchLaterVideos, eachVideo) ?
                            { color: "var(--action)" } :
                            { color: "var(--black)" }
                    } else
                        return checkIfVideoIsAlreadyAddedToWatchLater(userWatchLaterVideos, eachVideo) ?
                            "Remove" :
                            `${eachOption.optionName}`
        }
    }

    return <optionsIconContext.Provider value={{ getTheEachOptionOperation }}>
        {children}
    </optionsIconContext.Provider>
}

const useOptionsIcon = () => useContext(optionsIconContext);

export { useOptionsIcon, OptionsIconProvider };