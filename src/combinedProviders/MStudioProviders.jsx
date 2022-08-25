import {
    HeaderProvider,
    CategoryProvider,
    VideoProvider,
    FilterProvider,
    AuthProvider,
    VideoCardProvider,
    LikedVideosProvider,
    WatchLaterProvider,
    OptionsIconProvider,
    HistoryProvider,
    PlaylistProvider
} from "../contexts";

const MStudioProviders = ({ children }) => {
    return (
        <AuthProvider>
            <VideoProvider>
                <CategoryProvider>
                    <HeaderProvider>
                        <FilterProvider>
                            <VideoCardProvider>
                                <LikedVideosProvider>
                                    <WatchLaterProvider>
                                        <OptionsIconProvider>
                                            <HistoryProvider>
                                                <PlaylistProvider>
                                                    {children}
                                                </PlaylistProvider>
                                            </HistoryProvider>
                                        </OptionsIconProvider>
                                    </WatchLaterProvider>
                                </LikedVideosProvider>
                            </VideoCardProvider>
                        </FilterProvider>
                    </HeaderProvider>
                </CategoryProvider>
            </VideoProvider>
        </AuthProvider>
    );
}

export { MStudioProviders };