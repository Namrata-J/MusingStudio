import "./musingStudioCollection.css";
import { useCategory } from "../../contexts/";

const CollectionByArtists = () => {

    const { msCategories } = useCategory();

    return (
        <div className="ms_artists_collection-component">
            <h2 className="ms_acc-section-title">Artists</h2>
            <p className="ms_acc-section-subtitle">THE LEGEND OF A FEARLESS WARRIOR..</p>
            <div className="ms_acc-content-container ms_flex">
                {
                    msCategories.musicArtists.map((eachObj) => (
                        <div className="ms_acc_card ms_cp" key={eachObj._id}>
                            <img className="ms_acc_card-img b-rad4" src={eachObj.img} />
                            <p className="ms_acc_card-title">{eachObj.category}</p>
                            <p className="ms_acc_card-subtitle">{eachObj.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export { CollectionByArtists };