import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Cartpage from "./pages/Cartpage";
import Notfoundpage from "./pages/Notfoundpage";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<Cartpage />} />
        <Route path="*" element={<Notfoundpage />} />
    </Route>

  ));

const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App;