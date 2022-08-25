import "./auth.css";
import toast from 'react-hot-toast';
import { useAuth } from "../../contexts/";
import { useNavigate } from "react-router-dom";
import { toastStyle } from "../../utils/customToastTheme";

const LogOutPage = () => {

    const navigate = useNavigate();
    const { setIsUserLoggedIn } = useAuth();

    return (
        <div className="ms_auth-page ms_flex-c page">
            <div className="ms_auth-container b-rad1">
                <p className="ms_logOut-container-text ms_fw-b">Are you sure you want to logOut!?</p>
                <div className="ms_logOut-container-action-btns ms_flex">
                    <button
                        className="ms_cp ms_fw-b b-rad1"
                        onClick={
                            () => {
                                setIsUserLoggedIn(false);
                                navigate("/");
                                toast.success("LoggedOut Successfully", toastStyle)
                            }
                        }>
                        LogOut
                    </button>
                    <button
                        className="ms_cp ms_fw-b b-rad1"
                        onClick={() => navigate(-1)}>Cancel</button>
                </div>
            </div>
        </div>
    );
}

export { LogOutPage };