import { useState,createContext } from "react";

export const AddContext = createContext();

const ContextProvider = ({children}) => {
  const [addCart, setAddCart] = useState([]);



const AddToCart = (item) => {
  
  setAddCart((prevCart) => {
    const matchingProduct = prevCart.find((cartItem) => {
      return cartItem.id === item.id
      
    });

    if (matchingProduct) {
      return prevCart.map((cartItem) => {
       return cartItem.id === item.id ? {...cartItem, quantity: cartItem.quantity + 1}
        : cartItem
      })
    } else{
      return [...prevCart, {...item, quantity:1}]
    }
  });
 
}

  return (
    <div>
      <AddContext.Provider value={{addCart,AddToCart}}>
        {children}
      </AddContext.Provider>
    </div>
  )
}

export default ContextProvider