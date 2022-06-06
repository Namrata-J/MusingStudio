import { Routes, Route } from "react-router-dom";
import {
    HistoryPage,
    HomePage,
    LikedVideosPage,
    PlaylistPage,
    VideoListingPage,
    WatchLaterPage,
    LogInPage,
    LogOutPage,
    SignUpPage,
    SingleVideoCardDetailPage
} from "../../pages/";

const RoutesComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/likedVideos" element={<LikedVideosPage />} />
            <Route path="/playlist" element={<PlaylistPage />} />
            <Route path="/videoListing" element={<VideoListingPage />} />
            <Route path="/watchLater" element={<WatchLaterPage />} />
            <Route path="/login" element={<LogInPage />} />
            <Route path="/logout" element={<LogOutPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/videoDetail/:videoId" element={<SingleVideoCardDetailPage />} />
        </Routes>
    );
}

export { RoutesComponent };