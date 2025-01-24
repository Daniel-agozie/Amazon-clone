import { NavLink } from "react-router-dom";
import Amazonlogo from "./amazonlogo";
import Amazonmobilelogo from "./Amazonmobilelogo";
import { useContext } from "react";
import { AddContext } from "../../context/Context-provider";

const Navbar = () => {

  const {addCart} = useContext(AddContext)

  return (
    <div className="bg-gray-800 fixed sm:h-20 right-0 left-0 top-0 flex items-center h-32 z-50 justify-between">
      <Amazonlogo />
      <Amazonmobilelogo />
        <div className="flex flex-1 max-w-xl min-w-min mx-6">
          <div className="flex flex-1 justify-end">
            <input type="text" className="flex flex-1 rounded-sm placeholder-gray-800 placeholder-opacity-75 h-9 outline-none font-bold" placeholder="search" />

              <button className="bg-yellow-500 rounded-sm h-9 absolute">
                <img className="w-6 ml-3" src="src/assets/images/icons/search-icon.png" />
              </button>
            </div>
        </div>



      <div className="flex mr-4">
        <NavLink className="flex flex-col justify-center text-white border-2 hover:border-white border-transparent px-1 py-1 transition-all duration-700 rounded-lg"
         to="/orders">
        <span className="md:text-sm text-3xl font-bold">Return</span>
        <span className="md:text-sm text-2xl font-bold">& Orders</span>
        </NavLink>

      <NavLink className="flex items-center text-white 
        border-2 hover:border-white border-transparent px-1 py-1 transition-all duration-700 rounded-lg relative" to="/cart">
          
          <img className="" src="src/assets/images/icons/cart-icon.png"/>
          <div className="absolute top-3 left-11 md:text-sm text-2xl">{addCart.length}</div>

        <div className="mr-4 font-bold text-5xl md:text-sm">cart</div>
        </NavLink>
      </div>

    
    </div>
  )
}

export default Navbar