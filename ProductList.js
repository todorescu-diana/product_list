import React, { Component, useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ProductCard from "./ProductCard";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/AntDesign";

const IMAGES = [
  require("./assets/images/1.jpg"),
  require("./assets/images/2.jpg"),
  require("./assets/images/3.jpg"),
  require("./assets/images/4.jpg"),
];

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

function ListHeader (){
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Product List</Text>
    </View>
  );
};
/*
export default class ProductList extends Component {
  state = {
    products: [],
  };

  constructor(props) {
    super(props);

    this.handler = this.handler.bind(this);
  }

  componentDidMount() {
    console.log(this.props.st);
    console.log(IMAGES);
    const products = require("./db.json").products.map((p) => ({
      ...p,
      image: IMAGES[p.id],
    }));

    this.setState({ products });
  }

  handleGoToCart = () => {
    this.props.navigation.navigate("cart");
  };

  handleGoToFavourites = () => {
    this.props.navigation.navigate("favourites");
  };

  handler(products) {
    this.setState(
      products
    );

    console.log(this.state);
  }

  render() {
    return [
      <FlatList
        numColumns={2}
        style={styles.list}
        key="flatlist"
        data={this.state.products}
        renderItem={({ item }) => <ProductCard products = {this.state.products} handler = {this.handler} product={item} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={ListHeader}
      />,
      <ActionButton
        key="fab"
        onPress={this.handleGoToCart}
        buttonColor="#242820"
        renderIcon={() => <Icon size={24} color="white" name="shoppingcart" />}
      />,
      <ActionButton
        key="fab1"
        onPress={this.handleGoToFavourites}
        buttonColor="#242820"
        renderIcon={() => <Icon size={24} color="white" name="hearto" />}
        offsetX={100}
      />,
    ];
  }
}
*/
export default function ProductList ({navigation}) {
    [state,setState] = useState({
      products: [],
    });
  
    useEffect(() => {
      const products = require("./db.json").products.map((p) => ({
        ...p,
        image: IMAGES[p.id],
      }));
  
      setState({ products });
    }, []);
  
    handleGoToCart = () => {
      navigation.navigate("MyCart");
    };
  
    handleGoToFavourites = () => {
      navigation.navigate("Favourites");
    };
  
    function handler(products) {
      setState(
        products
      );
    }

      return [
        <FlatList
          numColumns={2}
          style={styles.list}
          key="flatlist"
          data={state.products}
          renderItem={({ item }) => <ProductCard products = {this.state.products} handler = {this.handler} product={item} />}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={ListHeader}
        />,
        <ActionButton
          key="fab"
          onPress={handleGoToCart}
          buttonColor="#242820"
          renderIcon={() => <Icon size={24} color="white" name="shoppingcart" />}
        />,
        <ActionButton
          key="fab1"
          onPress={handleGoToFavourites}
          buttonColor="#242820"
          renderIcon={() => <Icon size={24} color="white" name="hearto" />}
          offsetX={100}
        />
      ];
  }
  