import { Route,Routes} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Cartpage from "./pages/Cartpage";
import Notfoundpage from "./pages/Notfoundpage";
import Orderpage from "./pages/Orderpage";


const App = () => {
  
    
  return (
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/cart" element={<Cartpage />} />
    <Route path="*" element={<Notfoundpage />} />
    <Route path="/orders" element={<Orderpage />} />
  </Routes>
  )
}

export default App;