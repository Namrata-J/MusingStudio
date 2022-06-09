import "./carousel.css";
import { Carousel } from "../";
import { useCategory } from "../../contexts/";

const HomePageCarousel = () => {

    const { msCategories } = useCategory();

    return (
        <Carousel className="ms_main-carousel">
            {
                msCategories.carouselImages.map(
                    (eachObj) => (
                        <div className="ms_main-carousel-img-container" key={eachObj._id}>
                            <img src={eachObj.img} alt="image" />
                        </div>
                    ))
            }
        </Carousel>
    );
}

export { HomePageCarousel };