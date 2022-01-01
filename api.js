import uuid from "uuid";
import Constants from "expo-constants";

const { manifest } = Constants;
const api = manifest.packagerOpts.dev
  ? manifest.debuggerHost.split(`:`).shift().concat(`:3000`)
  : `api.example.com`;

//const url = `http://${api}/products`;

const url = "http://c3a6-89-136-44-30.ngrok.io/products";

export function getProducts() {
  const IMAGES = [
    require("./assets/images/1.jpg"),
    require("./assets/images/2.jpg"),
    require("./assets/images/3.jpg"),
    require("./assets/images/4.jpg"),
  ];

  return fetch(url)
    .then((response) => response.json())
    .then((products) => products.map((p) => ({ ...p, image: IMAGES[p.id] })));
}

export function saveProduct({ product }) {
  const productUrl = `${url}/${product.id}`;

  return fetch(productUrl, {
    method: "PUT",
    body: JSON.stringify({
      ...product,
    }),
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  })
    .then((res) => res.json())
    .catch((error) => console.error("Error:", error));
}
