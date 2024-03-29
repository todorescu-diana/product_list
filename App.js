import React, { useContext } from "react";
import ProductList from "./ProductList";
import MyCart from "./MyCart";
import Favourites from "./Favourites";
import Search from "./Search";
import { Component, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

import { getProducts } from "./api";
/*
{
  'ProductList': ProductList,
  'MyCart':MyCart,
  'Favourites': Favourites,
},
{
  initialRouteName: 'ProductList',

}
{
  list: {
    screen: ProductList,
    navigationOptions: () => ({
      headerShown: false,
    }),
  },
  cart: {
    screen: MyCart,
    navigationOptions: () => ({
      headerShown: false,
    }),
  },
  favourites: {
    screen: Favourites,
    navigationOptions: () => ({
      headerShown: false,
    }),
  },
}
*/

//const App = createAppContainer(MainNavigator);

export const StateContext = React.createContext({
  products: [],
  setProducts: (p) => {},
});

export default function App() {
  const [products, setProducts] = useState([]);
  /*
  const IMAGES = [
    require("./assets/images/1.jpg"),
    require("./assets/images/2.jpg"),
    require("./assets/images/3.jpg"),
    require("./assets/images/4.jpg"),
  ];*/

  /*useEffect(() => {
    const productsReq = require("./db.json").products.map((p) => ({
      ...p,
      image: IMAGES[p.id],
    }));

    setProducts(productsReq);
  }, []);*/

  useEffect(() => {
    getProducts()
      .then((products) => setProducts(products))
      .catch((err) => console.log(err));
  }, []);

  //useEffect(() => {
  //console.log("CHANGED ", products);
  //}, [products]);

  return (
    <StateContext.Provider value={{ products, setProducts }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="ProductList" component={ProductList} />
          <Stack.Screen name="MyCart" component={MyCart} />
          <Stack.Screen name="Favourites" component={Favourites} />
          <Stack.Screen name="Search" component={Search} />
        </Stack.Navigator>
      </NavigationContainer>
    </StateContext.Provider>
  );
}
