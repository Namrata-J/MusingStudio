import "./home.css";
import { Header, SideBar, HomePageCarousel, CollectionByDiffCategories, CollectionByArtists } from "../../components";

const HomePage = () => {
    return (
        <div className="ms_homepage page">
            <div className="ms_homepage-header-section">
                <Header />
            </div>
            <div className="ms_homepage-main-section ms_flex">
                <SideBar />
                <div className="ms_homepage-content-section content-section ms_flex">
                    <HomePageCarousel />
                    <CollectionByDiffCategories />
                    <CollectionByArtists />
                </div>
            </div>
        </div>
    );
}

export { HomePage };