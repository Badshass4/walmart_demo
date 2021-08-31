import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch } from "react-redux";

import { addQuantity } from "../Item/ducks/action";

const AddQtyContainer = () => {
  const [itemQty, setItemQty] = useState(0);
  const route = useRoute();
  const { navigate } = useNavigation();
  const { itemName } = route.params;
  const dispatch = useDispatch();

  const addQty = () => {
    dispatch(addQuantity(itemName, itemQty));
    navigate("ItemPage");
  };

  return (
    <>
      <View style={styles.mainView}>
        <Text style={styles.text}>Add more {itemName}s</Text>
        <TextInput
          style={{ width: "90%", paddingBottom: 20 }}
          mode="outlined"
          label="Add Quantity"
          onChangeText={(val) => setItemQty(val)}
          keyboardType="number-pad"
        />
        <Button icon="plus" mode="contained" onPress={addQty}>
          Add
        </Button>
      </View>
    </>
  );
};

export default AddQtyContainer;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
  },
});
