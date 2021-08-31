import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import Cards from "../../components/Cards";

const ItemContainer = () => {
  const { items } = useSelector((state) => state.itemReducer);

  return (
    <View style={styles.mainView}>
      <Text style={styles.text}>Walmart Demo Store</Text>
      <SafeAreaView style={styles.itemView}>
        <FlatList
          data={Object.keys(items)}
          renderItem={({ item }) => (
            <Cards key={item} itemName={item} itemQty={items[item]} />
          )}
          keyExtractor={(item) => item}
        />
      </SafeAreaView>
    </View>
  );
};

export default ItemContainer;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: StatusBar.currentHeight + 10,
  },
  itemView: {
    margin: 10,
    padding: 10,
    width: "90%",
  },
  text: {
    fontSize: 20,
  },
});
