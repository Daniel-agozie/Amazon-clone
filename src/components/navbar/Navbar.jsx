import { NavLink } from "react-router-dom";
import Amazonlogo from "./amazonlogo";
import Amazonmobilelogo from "./Amazonmobilelogo";

const Navbar = () => {

  return (
    <div className="bg-gray-800 fixed mb-96 w-full h-20 top-0 flex items-center italic">
      <Amazonlogo />
      <Amazonmobilelogo />
      <div className="flex flex-1 items-center justify-center">
      <input type="text" className="flex flex-1 rounded-xl sm:w-10 placeholder-gray-800 placeholder-opacity-75 h-9 outline-none font-bold ml-4 max-w-3xl" placeholder="search" />

      <button className="bg-yellow-500 rounded-xl -ml-9 h-9">
      <img className="w-6 ml-3" src="src/assets/images/icons/search-icon.png" />
      </button>
      </div>

      <div className="flex">
        <NavLink className="flex flex-col items-center justify-center mx-6 text-white border-2 hover:border-white border-transparent px-1 py-1 transition-all duration-700 rounded-lg"
         to="/orders">
        <p className="text-sm font-bold">Return</p>
        <p className="text-sm font-bold">& Orders</p>
        </NavLink>

      <div>
      <NavLink className="flex items-center text-white 
        border-2 hover:border-white border-transparent px-1 py-1 transition-all duration-700 rounded-lg" to="/cart">
        <div className="relative">
          <p className="absolute left-10 top-2 right-24 text">0</p>
          <img className="w-18" src="src/assets/images/icons/cart-icon.png"/>
        </div>
        <p className="mr-7 font-bold text-sm">cart</p>
        </NavLink>
        </div>
      </div>

    
    </div>
  )
}

export default Navbar