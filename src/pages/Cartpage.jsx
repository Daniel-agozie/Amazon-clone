import CartNavbar from "../components/cart/CartNavbar";
import CartFeature from "../components/cart/CartFeature";



const Cartpage = ({addCarts}) => {
 
  return (
    <div>
      <CartNavbar />
      <CartFeature addCarts={addCarts}/>
    </div>
  )
}

export default Cartpage;