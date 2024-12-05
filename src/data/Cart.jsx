import { useState, createContext} from "react"

export const AddCartContent = createContext();

 const CartContent = ({Children}) => {

  const [addCart, setAddCart] = useState([]);

  const AddToCart = (item) => {
    console.log(item);
    
    setAddCart((prevCart) => {
      const matchingProduct = prevCart.find((cartItem) => {
        cartItem.id === item.id
      });
      
      if (matchingProduct) {
        return prevCart.map((cartItem) => {
          cartItem.id === item.id ? {...cartItem, quantity: cartItem.quantity + 1}
          : cartItem
        })
      } else{
        return [...prevCart, {...item, quantity:1}];
      }
    })  
  }
 

  return (
    <AddCartContent.Provider value={{addCart,AddToCart}}>
      <Children />
    </AddCartContent.Provider>
  )
}

export default CartContent;