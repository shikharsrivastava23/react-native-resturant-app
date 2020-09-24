import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({ title, results, navigation }) => {
    //console.log(results[0].restaurant.name);

    if(!results.length){
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}> {title} </Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={results}
                keyExtractor={(result) => {
                    result.restaurant.id;
                }}
                renderItem={(i) => {
                    //return <Text>{(i.item.restaurant.name)}</Text>
                    return (
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Restaurant",{id: i.item.restaurant.id})}
                        >
                            <ResultsDetail result={i.item.restaurant} />
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 15,
        marginBottom: 10,
    },
    container: {
        marginBottom: 15,
    },
});

export default ResultsList;
