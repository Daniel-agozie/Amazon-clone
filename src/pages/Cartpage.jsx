import CartFeature from "../components/cart/Cartfeature";
import CartNavbar from "../components/cart/CartNavbar";


const Cartpage = ({addCart}) => {
 
  return (
    <div>
      <CartNavbar />
      <CartFeature addCart={addCart}/>
    </div>
  )
}

export default Cartpage;