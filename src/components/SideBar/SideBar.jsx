import "./sideBar.css";
import { Link } from "react-router-dom";
import { useHeader } from "../../contexts/";

const SideBar = () => {

    const { hamburgerPopUpContainerList, hamburgerPopUpContainerDisplay } = useHeader();

    return (
        <div className="ms_sideBar-component" style={{ display: hamburgerPopUpContainerDisplay }}>
            <ul>
                {
                    hamburgerPopUpContainerList.map((item, index) => (
                        <Link to={item.itemLink} key={index} >
                            <li className="ms_sideBar-list-item ms_flex">
                                <div>{item.itemIcon}</div>
                                <div className="ms_sideBar-item ms_fw-b">{item.itemName}</div>
                            </li>
                        </Link>
                    ))
                }
            </ul>
        </div>
    );
}

export { SideBar };