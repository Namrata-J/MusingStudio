import "./singleVideoListing.css";

const VideoPlayerMetaInfo = (msSingleVideoCardDetail) => {
    return (
        <div className="ms_vedio-player-meta-info ms_flex">
            {
                msSingleVideoCardDetail.music_description !== undefined && <div className="ms_flex">
                    <p>Release date: {msSingleVideoCardDetail.music_description.release_date}</p>
                    <p>Singers: {msSingleVideoCardDetail.music_description.singers.map((eachSinger, index) => (
                        <span key={index}>{eachSinger}, </span>
                    ))}</p>
                    <p>Music duration: {msSingleVideoCardDetail.music_description.music_duration}</p>
                    <p>Lyrics By: {msSingleVideoCardDetail.music_description.lyrics_by}</p>
                    <p>Composer: {msSingleVideoCardDetail.music_description.composer}</p>
                </div>
            }
        </div>
    );
}

export { VideoPlayerMetaInfo };