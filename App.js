import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./component/Home";
import MoviePage from "./component/MoviePage";

const { Navigator, Screen } = createStackNavigator();
export default function App() {
  return (
    <>
      <NavigationContainer>
        <Navigator initialRouteName="Home">
          <Screen name="Home" component={Home} />
          <Screen name="Movie Detail" component={MoviePage} />
        </Navigator>
      </NavigationContainer>
    </>
  );
}
