import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Cartpage from "./pages/Cartpage";
import Notfoundpage from "./pages/Notfoundpage";
import CartContent from "./data/cartContent";
  


const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
          <Route path="/" element={<Homepage />} />
          <Route path="/cart" element={<Cartpage />} />
          <Route path="*" element={<Notfoundpage />} />
      </Route>
    )

    
      // <Route>
      //     <Route path="/" element={<Homepage AddToCart={AddToCart}/>} />
      //     <Route path="/cart" element={<Cartpage addCarts={addCart}/>} />
      //     <Route path="*" element={<Notfoundpage />} />
      // </Route>
    );
  return (
    
    <CartContent>
      <RouterProvider router={router} />
    </CartContent>
  )
}

export default App;