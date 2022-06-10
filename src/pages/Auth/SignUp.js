import "./auth.css";

const SignUpPage = () => {
    return (
        <div className="ms_auth-page ms_flex-c page">
            <div className="ms_auth-container b-rad1">
                <h4>SignUp</h4>
                <form className="ms_auth-form ms_flex">
                    <label htmlFor="ms_signIn-email" className="ms_authForm-label ms_fw-b">Email:</label>
                    <input type="email" id="ms_signIn-email" className="ms_authFormInput ms_input b-rad1" required />

                    <label htmlFor="ms_signIn-pwd" className="ms_authForm-label ms_fw-b">Password:</label>
                    <input type="password" id="ms_signIn-pwd" className="ms_authFormInput ms_input b-rad1" required />

                    <button type="submit" className="ms_auth-submit-button ms_cp ms_fw-b b-rad1">SignUp</button>
                </form>

                <p className="ms_auth-navigationToOtherAuth ms_fw-b ms_cp">Already have an account:-)</p>
            </div>
        </div>
    );
}

export { SignUpPage };