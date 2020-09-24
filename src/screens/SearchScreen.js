import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import zomato from "../api/zomato";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";
import { ScrollView } from "react-native-gesture-handler";

const SearchScreen = ({ navigation }) => {
    //console.log(props);
    const [term, setTerm] = useState("");
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter((result) => {
            return result.restaurant.price_range === price;
        });
    };

    return (
        <>
            <SearchBar
                term={term}
                onTermChange={(newTerm) => setTerm(newTerm)}
                onTermSubmit={() => searchApi(term)}
            />

            {errorMessage ? <Text>{errorMessage}</Text> : null}

            <ScrollView>
                <ResultsList
                    navigation={navigation}
                    results={filterResultsByPrice(2)}
                    title="Cheap"
                />
                <ResultsList
                    navigation={navigation}
                    results={filterResultsByPrice(3)}
                    title="Medium"
                />
                <ResultsList
                    navigation={navigation}
                    results={filterResultsByPrice(4)}
                    title="Ameeri"
                />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;
