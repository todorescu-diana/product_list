import React, { Component, useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ProductCard from "./ProductCard";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/AntDesign";

const styles = StyleSheet.create({
  list: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#F0FCE2",
  },
  header: {
    padding: 20,
    margin: 10,
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  text: {
    textAlign: "center",
    color: "#080A05",
    fontSize: 22,
    padding: 7,
  },
});

const IMAGES = [
  require("./assets/images/1.jpg"),
  require("./assets/images/2.jpg"),
  require("./assets/images/3.jpg"),
  require("./assets/images/4.jpg"),
];

const MyCartHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>My Cart</Text>
    </View>
  );
};
/*
export default class MyCart extends Component {
  state = {
    products: [],
    images: IMAGES,
  };

  componentDidMount() {
    const products = require("./db.json").products.map((p) => ({
      ...p,
      image: IMAGES[p.id],
    }));

    this.setState({ products });
  }

  handleAddPress = () => {
    this.props.navigation.navigate("list");
  };

  render() {
    return [
      <FlatList
        key="flatlist2"
        numColumns={2}
        style={styles.list}
        data={this.state.products}
        renderItem={({ item }) => <ProductCard product={item} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={MyCartHeader}
      />,
      <ActionButton
        onPress={this.handleAddPress}
        renderIcon={() => <Icon size={24} color="white" name="caretleft" />}
        buttonColor="#242820"
        key="fab"
      ></ActionButton>,
    ];
  }
}*/

export default function MyCart ({navigation}) {
    const [stateCart, setStateCart] = useState({
      products: [],
    });
  
    useEffect(() => {
      const products = require("./db.json").products.map((p) => ({
        ...p,
        image: IMAGES[p.id],
      }));
  
      setStateCart({ products });
    }, []);
  
    handleAddPress = () => {
      navigation.navigate("ProductList");
    };
  
      return [
        <FlatList
          key="flatlist2"
          numColumns={2}
          style={styles.list}
          data={state.products}
          renderItem={({ item }) => <ProductCard product={item} />}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={MyCartHeader}
        />,
        <ActionButton
          onPress={handleAddPress}
          renderIcon={() => <Icon size={24} color="white" name="caretleft" />}
          buttonColor="#242820"
          key="fab"
        ></ActionButton>,
      ];
  }
  
