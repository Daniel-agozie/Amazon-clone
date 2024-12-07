import { Route,createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom";
import React,{useState} from "react";
import Homepage from "./pages/Homepage";
import Cartpage from "./pages/Cartpage";
import Notfoundpage from "./pages/Notfoundpage";

const App = () => {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
          <Route path="/" element={<Homepage />} />
          <Route path="/cart" element={<Cartpage />} />
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