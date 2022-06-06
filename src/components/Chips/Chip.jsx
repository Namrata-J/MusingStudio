import "./chips.css";

const Chip = (genre) => {
    return (
        <label htmlFor={genre._id} className="b-rad1 ms_cp">
            <input type="checkbox"
                id={genre._id}
                className="ms_chip"
                value={genre.category ? genre.category : genre.artist_name}
                name={genre.category ? "filterByCategory" : "filterByArtist"} />
            {genre.category ? genre.category : genre.artist_name}
        </label>
    );
}

export { Chip };