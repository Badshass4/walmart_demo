import React from "react";
import { View, Text } from "react-native";
import { Headline, Subheading, TextInput, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const HomeContainer = () => {
  const { navigate } = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button mode="outlined" onPress={() => navigate("ItemPage")}>
        Check all Items
      </Button>
    </View>
  );
};

export default HomeContainer;
