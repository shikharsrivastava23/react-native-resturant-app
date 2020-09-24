import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ResultsDetail = ({ result }) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: result.featured_image }}
            />
            <Text>{result.name}</Text>
            <Text>Rating: {result.user_rating.aggregate_rating}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5,
    },
    name: {
        fontWeight: "bold",
    },
});

export default ResultsDetail;
