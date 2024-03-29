import "./musingStudioCollection.css";
import { useNavigate } from "react-router-dom";
import { useCategory, useFilter } from "../../contexts/";

const CollectionByDiffCategories = () => {

    const { msCategories } = useCategory();
    const navigate = useNavigate();
    const { dispatchOfVideosFilter } = useFilter();

    return (
        <div className="ms_different-categories-component">
            <h2 className="ms_dcc-section-title">Music & Memories</h2>
            <p className="ms_dcc-section-subtitle">LET YOUR EMOTIONS FLOW. WE'VE GOT YOU.</p>
            <div className="ms_dcc-content-container ms_flex">
                {
                    msCategories.musicGenres.map((eachObj) => (
                        <div
                            className="ms_dcc_card ms_cp"
                            key={eachObj._id}
                            onClick={
                                () => {
                                    dispatchOfVideosFilter(
                                        {
                                            type: "FILTER_BY_CATEGORY",
                                            payload: eachObj.category
                                        }
                                    );
                                    navigate("/videoListing")
                                }
                            }>
                            <img className="ms_dcc_card-img b-rad1" src={eachObj.img} />
                            <p className="ms_dcc_card-title">{eachObj.category}</p>
                            <p className="ms_dcc_card-subtitle">{eachObj.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export { CollectionByDiffCategories };