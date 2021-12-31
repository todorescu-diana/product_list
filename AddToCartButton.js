import React, { useContext } from "react";
import { Pressable } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { StateContext } from "./App";
import { getProducts } from "./api";

export default function AddToCartButton({ handler, product }) {
  const { products, setProducts } = useContext(StateContext);

  function handleAddToCartButton() {
    //console.log("check1");
    product.cart = !product.cart;
    handler({ product });
    getProducts()
      .then((products) => setProducts(products))
      .catch((err) => console.log(err));
  }

  return (
    <Pressable style={{ padding: 10 }} onPress={handleAddToCartButton}>
      <Fontisto
        name={
          product.cart == false
            ? "shopping-basket-add"
            : "shopping-basket-remove"
        }
        size={26}
        color={"black"}
      />
    </Pressable>
  );
}

//style={({pressed}) => [{ borderRadius: 5, padding: 10, backgroundColor: pressed? 'rgba(27, 70, 49, 0.54)': 'white' }]}
