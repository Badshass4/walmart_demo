import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Cards = (props) => {
  const { navigate } = useNavigation();
  let { itemName, itemQty } = props;

  const addQty = (itemName) => {
    navigate("AddQtyPage",{itemName});
  };
  return (
    <Card style={styles.card}>
      <TouchableOpacity onPress={() => addQty(itemName)}>
        <Card.Content>
          <Title>{itemName.toUpperCase()}</Title>
          <Paragraph>Total Quantity : {itemQty}</Paragraph>
        </Card.Content>
      </TouchableOpacity>
    </Card>
  );
};

export default Cards;

const styles = StyleSheet.create({
  card: {
    width: "95%",
    margin: 10,
    padding: 10,
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
});
