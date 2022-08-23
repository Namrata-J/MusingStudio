import "./auth.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/";

const SignUpPage = () => {

    const { formData, setFormData, signUpHandler, signUpErrMsg, setSignUpErrMsg } = useAuth();
    const navigate = useNavigate();

    return (
        <div className="ms_auth-page ms_flex-c page">
            <div className="ms_auth-container b-rad1">
                <h4>SignUp</h4>
                <form className="ms_auth-form ms_flex">
                    <label htmlFor="ms_signIn-email" className="ms_authForm-label ms_fw-b">Email:</label>
                    <input
                        type="email"
                        id="ms_signIn-email"
                        className="ms_authFormInput ms_input b-rad1"
                        value={formData.userEmail}
                        onChange={
                            (e) => {
                                setSignUpErrMsg("");
                                setFormData({ ...formData, userEmail: e.target.value })
                            }
                        }
                        required />

                    <label htmlFor="ms_signIn-pwd" className="ms_authForm-label ms_fw-b">Password:</label>
                    <input
                        type="password"
                        id="ms_signIn-pwd"
                        className="ms_authFormInput ms_input b-rad1"
                        value={formData.userPwd}
                        onChange={
                            (e) => {
                                setSignUpErrMsg("");
                                setFormData({ ...formData, userPwd: e.target.value })
                            }
                        }
                        required />

                    <button
                        type="submit"
                        className="ms_auth-submit-button ms_cp ms_fw-b b-rad1"
                        onClick={(e) => signUpHandler(e)}>SignUp</button>
                </form>

                <p
                    className="ms_auth-navigationToOtherAuth ms_fw-b ms_cp"
                    onClick={() => {
                        setSignUpErrMsg("");
                        navigate("/login");
                        setFormData({ ...formData, userEmail: "", userPwd: "" })
                    }}>Already have an account:-)
                </p>
            </div>

            <p className="ms_auth-err-msg">{signUpErrMsg}</p>
        </div>
    );
}

export { SignUpPage };