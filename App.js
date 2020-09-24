import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Search">
                <Stack.Screen
                    name="Search"
                    component={SearchScreen}
                    options={{
                        title: "Restraunt Search",
                        headerStyle: {
                            backgroundColor: "#124ab4",
                        },
                        headerTintColor: "#fff",
                        headerTitleStyle: {
                            fontWeight: "bold",
                        },
                        headerTitleAlign: "center",
                    }}
                />

                <Stack.Screen
                    name="Restaurant"
                    component={ResultsShowScreen}
                    options={{
                        title: "Restraunt Search",
                        headerStyle: {
                            backgroundColor: "#124ab4",
                        },
                        headerTintColor: "#fff",
                        headerTitleStyle: {
                            fontWeight: "bold",
                        },
                        headerTitleAlign: "center",
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
