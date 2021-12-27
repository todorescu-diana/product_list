import React from "react";
import ProductList from "./ProductList";
import MyCart from "./MyCart";
import Favourites from "./Favourites";

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import  {NavigationContainer}  from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
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

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
      <Stack.Screen name="ProductList" component={ProductList} />
      <Stack.Screen name="MyCart" component={MyCart} />
      <Stack.Screen name="Favourites" component={Favourites} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}