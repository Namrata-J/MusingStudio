import { useHeader, HeaderProvider } from "./header-context";
import { useCategory, CategoryProvider } from "./categories-context";
import { useVideo, VideoProvider } from "./videos-context";
import { useFilter, FilterProvider } from "./filtersContext";
import { useAuth, AuthProvider } from "./auth-context";
import { useLikedVideos, LikedVideosProvider } from "./likedVideos-context";
import { useVideoCard, VideoCardProvider } from "./videoCard-context";

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
    VideoCardProvider
};