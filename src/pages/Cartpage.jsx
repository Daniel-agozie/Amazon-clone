import CartFeature from "../components/cart/Cart-feature";
import CartNavbar from "../components/cart/Cart-navbar";


const Cartpage = ({addCart}) => {
 
  return (
    <div>
      <CartNavbar />
      <CartFeature addCart={addCart}/>
    </div>
  )
}

export default Cartpage;