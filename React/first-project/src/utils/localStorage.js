export const isItemAddedToCart = (id) => {
  let productsInStorage = localStorage.getItem("products");
  if (!productsInStorage) return false;
  productsInStorage = JSON.parse(productsInStorage);
  let productIndex = productsInStorage.findIndex((obj) => obj.id == id);

  if (productIndex == -1) {
    return false;
  } else {
    return true;
  }
};

export const addItemToLocalStorage = (product) => {
  let productsInStorage = localStorage.getItem("products");
  // if items are there in storage
  if (productsInStorage) {
    productsInStorage = JSON.parse(productsInStorage);
    let productIndex = productsInStorage.findIndex(
      (obj) => obj.id === product.id
    );
    if (productIndex == -1) {
      productsInStorage.push(product);
    } else {
      productsInStorage[productIndex].quantity++;
    }
  } else {
    // if not then create an array and add one item in it
    productsInStorage = [product];
  }
  localStorage.setItem("products", JSON.stringify(productsInStorage));

  return productsInStorage;
};

export const getItemsFromLocalStorage = () => {
  let productsInStorage = localStorage.getItem("products");
  if (productsInStorage) return JSON.parse(productsInStorage);
  if (!productsInStorage) return [];
};

export const updateItemInLocalStorage = (id, updateObj) => {
  let productsInStorage = localStorage.getItem("products");
  productsInStorage = JSON.parse(productsInStorage);
  let productIndex = productsInStorage.findIndex((obj) => obj.id === id);
  if (productIndex == -1) {
    return "No Product Found";
  }
  productsInStorage[productIndex] = updateObj;
  localStorage.setItem("products", JSON.stringify(productsInStorage));
};

export const deleteItemInLocalStorage = (id) => {
  let productsInStorage = localStorage.getItem("products");
  productsInStorage = JSON.parse(productsInStorage);
  let productIndex = productsInStorage.findIndex((obj) => obj.id === id);
  if (productIndex == -1) {
    return "No Product Found";
  }
  productsInStorage.splice(productIndex, 1);
  localStorage.setItem("products", JSON.stringify(productsInStorage));
};
