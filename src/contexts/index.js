import { useHeader, HeaderProvider } from "./header-context";
import { useCategory, CategoryProvider } from "./categories-context";
import { useVideo, VideoProvider } from "./videos-context";
import { useFilter, FilterProvider } from "./filtersContext";
import { useAuth, AuthProvider } from "./auth-context";
import { useLikedVideos, LikedVideosProvider } from "./likedVideos-context";
import { useVideoCard, VideoCardProvider } from "./videoCard-context";
import { useWatchLater, WatchLaterProvider } from "./watchLater-context";
import { useOptionsIcon, OptionsIconProvider } from "./optionsIcon-context";

export {
    useHeader,
    HeaderProvider,
    useCategory,
    CategoryProvider,
    useVideo,
    VideoProvider,
    useFilter,
    FilterProvider,
    useAuth,
    AuthProvider,
    useLikedVideos,
    LikedVideosProvider,
    useVideoCard,
    VideoCardProvider,
    useWatchLater,
    WatchLaterProvider,
    useOptionsIcon,
    OptionsIconProvider
};