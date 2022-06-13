import "./singleVideoCardDetail.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SingleVideoListing, SafeFallBack } from "../../components";

const SingleVideoCardDetailPage = () => {

    const { videoId } = useParams();

    const [msSingleVideoCardDetail, setMsSingleVideoCardDetail] = useState({});

    useEffect(() => {
        const findVedioDetail = async () => {
            try {
                const response = await axios.get(`/api/video/${videoId}`)
                setMsSingleVideoCardDetail(response?.data?.video)

            } catch (error) {
                setMsSingleVideoCardDetail(undefined)
                console.log(error)
            }
        }
        findVedioDetail();
    }, [videoId]);

    return (
        <div className="ms_single-videoCard-detail-page page">
            {
                msSingleVideoCardDetail !== undefined ? <SingleVideoListing {...msSingleVideoCardDetail} /> : <SafeFallBack />
            }
        </div>
    );
}

export { SingleVideoCardDetailPage };