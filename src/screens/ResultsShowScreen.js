import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import zomato from "../api/zomato";

const ResultsShowScreen = ({ route, navigation }) => {
    const { id } = route.params;

    const [result, setResult] = useState(null);

    const getResult = async (id) => {
        const response = await zomato.get("/restaurant", {
            params: {
                res_id: id,
            },
        });

        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if(!result){
        return null;
    }

    return (
        <>
            <Text>{result.name}</Text>
        </>
    );
};

const styles = StyleSheet.create({});

export default ResultsShowScreen;
