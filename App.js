import React from 'react';
import ProductList from './ProductList';
import MyCart from './MyCart';

import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator({
  list: {
    screen: ProductList,
      navigationOptions: () => ({
      //title: "Available Products",
      headerShown: false
    })
  },
  cart: {
    screen: MyCart,
      navigationOptions: () => ({
        headerShown: false
    }),
  }
});

const App = createAppContainer(MainNavigator);
export default App;
/*
export default function App() {
  return (
    <ProductList/>
  );
}*/