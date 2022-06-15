import { Link } from "react-router-dom";
import { useHeader, useAuth } from "../../contexts/";

const ProfilePopUp = () => {

    const {
        profilePopUpContainerDisplay,
        profilePopUpContainerList
    } = useHeader();
    const { isUserLoggedIn } = useAuth();

    return (
        <div className="ms_profile-popUp-container b-rad1" style={{ display: profilePopUpContainerDisplay }}>
            <ul>
                {
                    isUserLoggedIn ? profilePopUpContainerList.filter(
                        (item) => item.itemName === "LogOut").map((eachItem, index) => (
                            <Link to={eachItem.itemLink} key={index}>
                                <li className="ms_fw-b">
                                    {eachItem.itemName}
                                </li>
                            </Link>
                        )) : profilePopUpContainerList.filter((item) => item.itemName !== "LogOut").map((eachItem, index) => (
                            <Link to={eachItem.itemLink} key={index}>
                                <li className="ms_fw-b">
                                    {eachItem.itemName}
                                </li>
                            </Link>
                        ))
                }
            </ul>
        </div>
    );
}

export { ProfilePopUp };