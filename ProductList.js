import React, { Component, useEffect, useState, useContext } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ProductCard from "./ProductCard";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/AntDesign";
import { StateContext } from "./App";
import { getProducts, saveProduct } from "./api";

const styles = StyleSheet.create({
  list: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 90,
    backgroundColor: "#F0FCE2",
  },
  header: {
    padding: 20,
    margin: 10,
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  footer: {
    padding: 15,
    margin: 50,
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  text: {
    textAlign: "center",
    color: "#080A05",
    fontSize: 22,
    padding: 7,
  },
});

function ListHeader() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Product List</Text>
    </View>
  );
}

function ListFooter() {
  return <View style={styles.footer}></View>;
}
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
export default function ProductList({ navigation }) {
  const { products, setProducts } = useContext(StateContext);
  //const [list, setList] = useState([]);

  //useEffect(() => {
  //console.log("NEW", products);
  //}, [products]);

  handleGoToCart = () => {
    navigation.navigate("MyCart");
  };

  handleGoToFavourites = () => {
    navigation.navigate("Favourites");
  };
  /*
  useEffect(() => {
    setList(products);
  }, [products]);
  */

  /*
  function handler() {
    const products_aux = [...products];
    setProducts(products_aux);
  }*/

  return [
    <FlatList
      style={styles.list}
      key="flatlist"
      data={products}
      renderItem={({ item }) => (
        <ProductCard handler={saveProduct} product={item} />
      )}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={ListHeader}
      ListFooterComponent={ListFooter}
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
    />,
  ];
}
