import CartFeature from "../components/cart/CartFeature";
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