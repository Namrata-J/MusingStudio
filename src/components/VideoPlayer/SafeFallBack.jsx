import { useNavigate } from "react-router-dom";

const SafeFallBack = () => {

    const navigate = useNavigate();

    return (
        <div className="ms_safe-fallback-msg-component ms_flex-c ms_fw-b">
            <div className="ms_safe-fallback-msg">
                Seems like something went wrong!
            </div>
            <button
                className="ms_fw-b ms_cp b-rad1"
                onClick={() => navigate("/videoListing")}>
                Go Back
            </button>
        </div>
    );
}

export { SafeFallBack };