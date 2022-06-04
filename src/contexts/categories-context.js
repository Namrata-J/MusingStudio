import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

const categoryContext = createContext({ msCategories: [] });

const CategoryProvider = ({ children }) => {

    const [msCategories, setMsCategories] = useState({ carouselImages: [], musicGenres: [], musicArtists: [] });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/api/categories")
                setMsCategories({
                    ...msCategories,
                    carouselImages: response?.data?.categories[0]?.carosel_images,
                    musicGenres: response?.data?.categories[1]?.different_genres,
                    musicArtists: response?.data?.categories[2]?.artists
                })
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, []);

    return <categoryContext.Provider value={{ msCategories, setMsCategories }}>
        {children}
    </categoryContext.Provider>
}

const useCategory = () => useContext(categoryContext);

export { useCategory, CategoryProvider };