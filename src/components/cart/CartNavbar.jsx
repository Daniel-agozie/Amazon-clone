import Amazonlogo from "../navbar/amazonlogo";
import Amazonmobilelogo from "../navbar/Amazonmobilelogo";

const CartNavbar = () => {
  return (
  <div className="flex">
    <Amazonlogo />
    <Amazonmobilelogo />
    <div className="block m-auto">
      <div className="flex justify-center"> Checkout (3 items)</div>
    </div>
    
  </div>
  )
}

export default CartNavbar;