import { Link } from "react-router-dom";
import { useHeader } from "../../contexts/";

const ProfilePopUp = () => {

    const {
        profilePopUpContainerDisplay,
        profilePopUpContainerList
    } = useHeader();

    return (
        <div className="ms_profile-popUp-container b-rad1" style={{ display: profilePopUpContainerDisplay }}>
            <ul>
                {
                    profilePopUpContainerList.map((item, index) => (
                        <Link to={item.itemLink} key={index}><li className="ms_fw-b">{item.itemName}</li></Link>
                    ))
                }
            </ul>
        </div>
    );
}

export { ProfilePopUp };