import { NavLink } from "react-router-dom";
import Amazonlogo from "./amazonlogo";

const Navbar = () => {
  return (
    <div className="bg-gray-800 fixed mb-96 w-full h-20 top-0 flex items-center">
      <Amazonlogo />
      <NavLink to="/">
        <img className="h-14 m-5 block sm:hidden" src="src/assets/images/amazon-mobile-logo.png" />
      </NavLink>
      <div className="flex flex-1 items-center justify-center">
      <input type="text" className="flex flex-1 rounded-xl sm:w-10 placeholder-gray-800 placeholder-opacity-75 h-9 outline-none font-bold ml-4 max-w-3xl" placeholder="search" />

      <button className="bg-yellow-500 rounded-xl -ml-9 h-9">
      <img className="w-6 ml-3" src="src/assets/images/icons/search-icon.png" />
      </button>
      </div>

      <div className="flex">
        <NavLink className="flex flex-col items-center justify-center mx-6 text-white" to="/orders">
        <p className="text-sm font-bold">Return</p>
        <p className="text-sm font-bold">& Orders</p>
        </NavLink>

        <NavLink className="flex items-center text-white" to="/cart">
        <p className="absolute top-5 right-20 text">0</p>
        <img className="w-16" src="src/assets/images/icons/cart-icon.png"/>
        <p className="mr-7 font-bold text-sm">cart</p>
        </NavLink>
        </div>
    
    </div>
  )
}

export default Navbar