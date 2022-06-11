import "./carousel.css";
import { Carousel } from "../";
import { useNavigate } from "react-router-dom";
import { useCategory, useFilter } from "../../contexts/";

const HomePageCarousel = () => {

    const navigate = useNavigate();
    const { msCategories } = useCategory();
    const { dispatchOfVideosFilter } = useFilter();

    return (
        <Carousel className="ms_main-carousel">
            {
                msCategories.carouselImages.map(
                    (eachObj) => (
                        <div className="ms_main-carousel-img-container"
                            key={eachObj._id}
                            onClick={() => { dispatchOfVideosFilter({ type: "FILTER_BY_CATEGORY", payload: eachObj.category }); navigate("/videoListing") }}>
                            <img src={eachObj.img} alt="image" />
                        </div>
                    ))
            }
        </Carousel>
    );
}

export { HomePageCarousel };