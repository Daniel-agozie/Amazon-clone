import CartNavbar from "../components/cart/CartNavbar";
import CartFeature from "../components/cart/CartFeature";



const Cartpage = ({addCart}) => {
 
  return (
    <div>
      <CartNavbar />
      <CartFeature addCart={addCart}/>
    </div>
  )
}

export default Cartpage;