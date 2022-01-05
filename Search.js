import { CheckBox, SearchBar } from "react-native-elements";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/AntDesign";
import React, { Component, useEffect, useState, useContext } from "react";
import { StateContext } from "./App";
import ProductCard from "./ProductCard";
import { saveProduct } from "./api";
import { Icon as IconElements } from "react-native-elements";

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

const Header = ({ check1, check2, setCheck1, setCheck2 }) => {
  //useEffect(() => {
  //console.log(check1);
  //}, [check1]);

  //useEffect(() => {
  //console.log(check2);
  //}, [check2]);

  const handlePressCheck1 = () => {
    if ((check1 == false) && (check2 == true)) {
      setCheck2(!check2);
    }
    setCheck1(!check1);
  };

  const handlePressCheck2 = () => {
    if ((check2 == false) && (check1 == true)) {
      setCheck1(!check1);
    }
    setCheck2(!check2);
  };

  return (
    <View style={{ backgroundColor: "#F0FCE2", height: 160 }}>
      <Text
        style={{
          backgroundColor: "#F0FCE2",
          height: 40,
          marginBottom: 10,
          paddingLeft: 130,
          fontSize: 20,
        }}
      >
        Sort by Price:
      </Text>
      <View
        style={{ backgroundColor: "#F0FCE2", width: "100%", width: "100%" }}
      >
        <CheckBox
          center
          title="Low to high"
          checkedIcon={
            <IconElements
              name="radio-button-checked"
              type="material"
              color="#4A5D54"
            />
          }
          uncheckedIcon={
            <IconElements
              name="radio-button-unchecked"
              type="material"
              color="grey"
            />
          }
          containerStyle={{ backgroundColor: "#FFFEF7" }}
          checked={check1}
          onPress={handlePressCheck1}
          color="green"
        />
        <CheckBox
          center
          title="High to low"
          checkedIcon={
            <IconElements
              name="radio-button-checked"
              type="material"
              color="#4A5D54"
            />
          }
          uncheckedIcon={
            <IconElements
              name="radio-button-unchecked"
              type="material"
              color="grey"
            />
          }
          containerStyle={{ backgroundColor: "#FFFEF7" }}
          checked={check2}
          onPress={handlePressCheck2}
          color="green"
        />
      </View>
    </View>
  );
};

export default function Search({ navigation }) {
  function handleAddPress() {
    navigation.navigate("ProductList");
  }

  const [search, setSearch] = useState("");
  const { products, setProducts } = useContext(StateContext);
  const [filtered, setFiltered] = useState(products);

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = products.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      if (check1 == true) {
        //console.log("1ok");
        newData.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        const newData_aux = newData.map((obj) => ({ ...obj }));
        setFiltered(newData_aux);
      } else if (check2 == true) {
        //console.log("1ok");
        newData.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        const newData_aux = newData.map((obj) => ({ ...obj }));
        setFiltered(newData_aux);
      } else {
        setFiltered(newData);
      }
      setSearch(text);
    } else {
      if (check1 == true) {
        //console.log("1ok");
        const products_aux = filtered
          .sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
          .map((obj) => ({ ...obj }));
        setFiltered(products_aux);
      } else if (check2 == true) {
        //console.log("1ok");
        const products_aux = filtered
          .sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
          .map((obj) => ({ ...obj }));
        setFiltered(products_aux);
      } else {
        const products_aux = products.map((obj) => ({ ...obj }));
        setFiltered(products_aux);
      }
      setSearch(text);
    }
  };

  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);

  useEffect(() => {
    console.log(check1);
    if (check1 == true) {
      //console.log("1ok");
      filtered.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      const filtered_aux = filtered.map((obj) => ({ ...obj }));
      setFiltered(filtered_aux);
    } else {
      const products_aux = products.map((obj) => ({ ...obj }));
      setFiltered(products_aux);
    }
  }, [check1]);

  useEffect(() => {
    console.log(check2);
    if (check2) {
      filtered.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
      const filtered_aux = filtered.map((obj) => ({ ...obj }));
      setFiltered(filtered_aux);
    } else {
      const products_aux = products.map((obj) => ({ ...obj }));
      setFiltered(products_aux);
    }
  }, [check2]);

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
      ListHeaderComponent={
        <Header
          check1={check1}
          check2={check2}
          setCheck1={setCheck1}
          setCheck2={setCheck2}
        />
      }
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
