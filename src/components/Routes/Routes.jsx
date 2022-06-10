import { Routes, Route } from "react-router-dom";
import { RequiresAuth } from "../";
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
    SingleVideoCardDetailPage,
    NoRouteMatchPage
} from "../../pages/";

const RoutesComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/history" element={<RequiresAuth><HistoryPage /></RequiresAuth>} />
            <Route path="/likedVideos" element={<RequiresAuth><LikedVideosPage /></RequiresAuth>} />
            <Route path="/playlist" element={<RequiresAuth><PlaylistPage /></RequiresAuth>} />
            <Route path="/videoListing" element={<VideoListingPage />} />
            <Route path="/watchLater" element={<RequiresAuth><WatchLaterPage /></RequiresAuth>} />
            <Route path="/login" element={<LogInPage />} />
            <Route path="/logout" element={<LogOutPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/videoDetail/:videoId" element={<SingleVideoCardDetailPage />} />
            <Route path="*" element={<NoRouteMatchPage />} />
        </Routes>
    );
}

export { RoutesComponent };