import { SearchBar } from "react-native-elements";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/AntDesign";
import React, { Component, useEffect, useState, useContext } from "react";
import { StateContext } from "./App";
import ProductCard from "./ProductCard";
import { saveProduct } from "./api";

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

function ListEmptyComponent() {
  return <View />;
}
const SearchFooter = () => {
  return <View style={styles.footer}></View>;
};

export default function Search({ navigation }) {
  function handleAddPress() {
    navigation.navigate("ProductList");
  }

  const [search, setSearch] = useState("");
  const { products, setProducts } = useContext(StateContext);
  const [filtered, setFiltered] = useState([]);

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = products.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFiltered(newData);
      setSearch(text);
    } else {
      setSearch(text);
    }
  };

  return [
    <SearchBar
      containerStyle={{
        backgroundColor: "#F0FCE2",
        borderBottomColor: "transparent",
        borderTopColor: "transparent",
        paddingTop: 40,
        paddingBottom: 15,
      }}
      round="true"
      inputContainerStyle={{ backgroundColor: "white", borderRadius: 90 }}
      placeholder="Search product..."
      cancelButtonTitle="Cancel"
      value={search}
      onChangeText={(text) => searchFilterFunction(text)}
    />,
    <FlatList
      style={styles.list}
      data={filtered}
      renderItem={({ item }) =>
        item.id != "-1" ? (
          <ProductCard
            product={item}
            products={products}
            handler={saveProduct}
          />
        ) : (
          ListEmptyComponent
        )
      }
      keyExtractor={(item) => item.id}
      ListFooterComponent={SearchFooter}
    />,
    <ActionButton
      onPress={handleAddPress}
      renderIcon={() => <Icon size={24} color="white" name="caretleft" />}
      buttonColor="#63736B"
      key="fab"
      offsetX={160}
    ></ActionButton>,
  ];
}
