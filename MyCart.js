import React, { Component, useState, useEffect, useContext } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ProductCard from "./ProductCard";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/AntDesign";
import { StateContext } from "./App";

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

function ListEmptyComponent() {
  return <View />;
}

export default function MyCart({ navigation }) {
  const { products, setProducts } = useContext(StateContext);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cart_aux = products.filter((p) => p.cart == true);
    if (cart_aux.length == 0) {
      setCart([
        {
          title: "-",
          price: "-",
          id: "-1",
          favourite: false,
          cart: false,
        },
      ]);
    } else {
      setCart(cart_aux);
    }
  }, []);

  function handleAddPress() {
    navigation.navigate("ProductList");
  }

  function handler() {
    const products_aux = [...products];
    setProducts(products_aux);
  }

  return [
    <FlatList
      key="flatlist2"
      style={styles.list}
      data={cart}
      renderItem={({ item }) =>
        item.id != "-1" ? (
          <ProductCard product={item} products={products} handler={handler} />
        ) : (
          ListEmptyComponent
        )
      }
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
