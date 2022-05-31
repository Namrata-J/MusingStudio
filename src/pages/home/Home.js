import "./home.css";
import { Header, SideBar } from "../../components";

const HomePage = () => {
    return (
        <div className="ms_homepage page">
            <div className="ms_homepage-header-section">
                <Header />
            </div>
            <div className="ms_homepage-main-section ms_flex">
                <SideBar />
            </div>
        </div>
    );
}

export { HomePage };