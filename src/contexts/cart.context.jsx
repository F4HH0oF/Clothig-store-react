import { createContext, useState } from 'react';

const addCartItem = (cartItems, productToAdd) => {
  //Find if cartItems contain the productToAdd
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === productToAdd.id
  );

  //Increment if found
  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === productToAdd.id
        ?  {...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem 
    )
  }
  
  //For a new product
  return [
    ...cartItems,
    {
      ...productToAdd,
      quantity:  1,
    },
  ];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [12,3],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const addItemToCart = productToAdd => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};