import React, { useState, useEffect } from "react";
import zomato from "../api/zomato";

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const searchAPI = async (searchterm) => {
        try {
            const response = await zomato.get("/search", {
                params: {
                    entity_id: 8,
                    entity_type: "city",
                    q: searchterm,
                },
            });
            setResults(response.data.restaurants);
        } catch (err) {
            setErrorMessage("Some error Occured.");
        }
    };

    useEffect(() => {
        searchAPI("pasta");
    }, []);

    return [searchAPI, results, errorMessage];
};
