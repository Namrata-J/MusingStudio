import { BsFillPlayCircleFill } from "../../utils/icons";

const Logo = () => {
    return (
        <div className="ms_header-logo ms_flex">
            <BsFillPlayCircleFill className="ms_header-logo-icon" />
            <div className="ms_header-logo-text ms_flex">
                <p className="ms_logo-macro-text ms_fw-b">MUSING</p>
                <p className="ms_logo-mini-text ms_fw-b">STUDIO</p>
            </div>
        </div>
    );
}

export { Logo };