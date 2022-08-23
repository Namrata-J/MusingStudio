import "./auth.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/";

const LogInPage = () => {

    const {
        formData,
        setFormData,
        logInHandler,
        logInErrMsg,
        setLogInErrMsg,
        guestLogInHandler
    } = useAuth();
    const navigate = useNavigate();

    return (
        <div className="ms_auth-page ms_flex-c page">
            <div className="ms_auth-container b-rad1">
                <h4>LogIn</h4>
                <form className="ms_auth-form ms_flex">
                    <label
                        htmlFor="ms_logIn-email"
                        className="ms_authForm-label ms_fw-b">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="ms_logIn-email"
                        className="ms_authFormInput ms_input b-rad1"
                        value={formData.userEmail}
                        onChange={
                            (e) => {
                                setLogInErrMsg("");
                                setFormData(
                                    {
                                        ...formData,
                                        userEmail: e.target.value
                                    }
                                )
                            }
                        }
                        required />

                    <label
                        htmlFor="ms_logIn-pwd"
                        className="ms_authForm-label ms_fw-b">
                        Password:
                    </label>
                    <input
                        type="password"
                        id="ms_logIn-pwd"
                        className="ms_authFormInput ms_input b-rad1"
                        value={formData.userPwd}
                        onChange={
                            (e) => {
                                setLogInErrMsg("");
                                setFormData(
                                    {
                                        ...formData,
                                        userPwd: e.target.value
                                    }
                                )
                            }
                        }
                        required />

                    <button
                        type="submit"
                        className="ms_auth-submit-button ms_cp ms_fw-b b-rad1"
                        onClick={(e) => logInHandler(e)}>LogIn</button>
                </form>
                <button
                    className="ms_auth-guestLogIn ms_cp ms_fw-b b-rad1"
                    onClick={() => guestLogInHandler()}>Guest LogIn</button>

                <p
                    className="ms_auth-navigationToOtherAuth ms_fw-b ms_cp"
                    onClick={() => {
                        setLogInErrMsg("");
                        navigate("/signup");
                        setFormData({ ...formData, userEmail: "", userPwd: "" })
                    }}>
                    Do not have an account:-)
                </p>
            </div>

            <p className="ms_auth-err-msg">{logInErrMsg}</p>
        </div>
    );
}

export { LogInPage };