import { Route,createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom";
import React,{useState} from "react";
import Homepage from "./pages/Homepage";
import Cartpage from "./pages/Cartpage";
import Notfoundpage from "./pages/Notfoundpage";

const App = () => {
  
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
        return [...prevCart, {...item, quantity:1}]
      }
    })  
  }
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
          <Route path="/" element={<Homepage AddToCart={AddToCart}/>} />
          <Route path="/cart" element={<Cartpage addCart={addCart}/>} />
          <Route path="*" element={<Notfoundpage />} />
      </Route>
    
    ));
    

   
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;