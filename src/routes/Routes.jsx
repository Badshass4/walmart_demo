import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const Stack = createStackNavigator();
// const BottomTab = createMaterialBottomTabNavigator();

import ItemPage from "../pages/ItemPage";
import HomePage from "../pages/HomePage";
import AddQtyPage from "../pages/AddQtyPage";

const MainStackComponent = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="HomePage">
      <Stack.Screen
        name="ItemPage"
        component={ItemPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddQtyPage"
        component={AddQtyPage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
const Routes = () => {
  return (
    <NavigationContainer>
      <MainStackComponent />
    </NavigationContainer>
  );
};

export default Routes;
