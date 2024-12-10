import { useState,createContext,useEffect } from "react";

export const AddContext = createContext();

const ContextProvider = ({children}) => {
  const [addCart, setAddCart] = useState([]);
  const [button, setButton] = useState(new Map())
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)


const AddToCart = (product) => {
  
  setAddCart((prevCart) => {
    const matchingProduct = prevCart.find((cartItem) => {
      return cartItem.id === product.id
      
    });

    if (matchingProduct) {
      return prevCart.map((cartItem) => {
       return cartItem.id === product.id ? {...cartItem, quantity: cartItem.quantity + 1}
        : cartItem
      })
    } else{
      return [...prevCart, {...product, quantity:1}]
    }
  });
 
}

const removeFromCart = (itemFromCart) => {
  const removeItem =  addCart.map((item) => {
    if (item.id === itemFromCart) {
      return {...item, quantity: item.quantity -1};
    } return item;
  }) .filter((item) => {
    return item.quantity > 0
  })  
  setAddCart(removeItem)
}

function showButton(key) {
  // setAddCart((prev) => new Set (prev).add (key) )

  setButton((prev) => {
    const updated = new Map(prev);
    updated.set(key, true)
    return updated;
  })

  setTimeout(() => {
    setButton((prev) => {
      const updated = new Map(prev);
      updated.delete(key);
      return updated;
    });
  }, 1000)
}

useEffect(() => {
  const fetchProduct = async () => {
    try {
      const res = await fetch('/api/products');
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      // console.log('Error in fetching data', error);
      res.status(404).send(error.response.data);
    } finally {
      setLoading(false);
    }
  }
  fetchProduct();
}, [setProducts])

  return (
    <div>
      <AddContext.Provider value={{addCart,AddToCart,removeFromCart,button,showButton,products,loading}}>
        {children}
      </AddContext.Provider>
    </div>
  )
}

export default ContextProvider