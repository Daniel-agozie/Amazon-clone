import Amazonlogo from "../navbar/amazonlogo";
import Amazonmobilelogo from "../navbar/Amazonmobilelogo";
import { useContext } from "react";
import { AddContext } from "../../context/Context-provider";

const CartNavbar = () => {
  const {addCart} = useContext(AddContext)

  return (
  <div className="flex">
    <Amazonlogo />
    <Amazonmobilelogo />
    <div className="block m-auto">
      <div className="flex justify-center font-bold text-lg italic"> Checkout ({addCart.length} items)</div>
    </div>
  </div>
  )
}

export default CartNavbar;