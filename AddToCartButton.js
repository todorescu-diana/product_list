import React, { useContext } from "react";
import { Pressable } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { StateContext } from "./App";

export default function AddToCartButton({ handler, product }) {
  const { products, setProducts } = useContext(StateContext);

  function handleAddToCartButton() {
    //console.log("check1");
    product.cart = !product.cart;
    handler();
  }

  return (
    <Pressable style={{ paddingTop: 10 }} onPress={handleAddToCartButton}>
      <Fontisto name={"shopping-basket-add"} size={26} color={"black"} />
    </Pressable>
  );
}
