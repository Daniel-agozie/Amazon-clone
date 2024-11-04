import CartFeatures from "../components/cart/CartFeatures";

const Cartpage = () => {
  return (
    <div className="flex">
      <CartFeatures />
      <div className="mt-3">Checkout (3 items)</div>
    </div>
  )
}

export default Cartpage;