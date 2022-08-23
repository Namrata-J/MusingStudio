import "./sideBar.css";
import { Link, useNavigate } from "react-router-dom";
import { useHeader, useFilter } from "../../contexts/";

const SideBar = () => {

    const { hamburgerPopUpContainerList, hamburgerPopUpContainerDisplay } = useHeader();
    const { dispatchOfVideosFilter } = useFilter();
    const navigate = useNavigate();

    return (
        <div
            className="ms_sideBar-component"
            style={{ display: hamburgerPopUpContainerDisplay }}>
            <ul>
                {
                    hamburgerPopUpContainerList.map((item, index) =>
                        item.itemLink === "/videoListing" ?
                            <div className="ms_sidebar-link ms_cp ms_flex"
                                key={index}
                                onClick={
                                    () => {
                                        dispatchOfVideosFilter({ type: "CLEAR" });
                                        navigate("/videoListing")
                                    }}>
                                <li className="ms_sideBar-list-item ms_flex">
                                    <div>{item.itemIcon}</div>
                                    <div className="ms_sideBar-item ms_fw-b">{item.itemName}</div>
                                </li>
                            </div> :
                            <Link to={item.itemLink} key={index} state={{ from: item.itemLink }} >
                                <li className="ms_sideBar-list-item ms_flex">
                                    <div>{item.itemIcon}</div>
                                    <div className="ms_sideBar-item ms_fw-b">{item.itemName}</div>
                                </li>
                            </Link>
                    )
                }
            </ul>
        </div>
    );
}

export { SideBar };