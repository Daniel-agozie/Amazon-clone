import { NavLink } from "react-router-dom";
import { useContext } from "react"
import { AddContext } from "../../Context/ContextProvider"

const CartPayment = () => {

  const {addCart} = useContext(AddContext);

  const total = addCart.reduce((acc, cart) => {
     return acc + (cart.priceCents * cart.quantity) / 100
  },0)

  
  return (
    <div>
    {addCart.length === 0 ? "": (
    <div className="border-4 px-5 mr-3 ml-3">
      <div className="font-bold mb-3">Order Summary</div>


        <div className="grid grid-cols-2 mb-2">
          <div>Items({addCart.length}):</div>
          <div className="text-right">${total.toFixed(2)}</div>
        </div>

        <div className="grid grid-cols-2 mb-2">
          <div>Shopping & Handling:</div>
          <div className="text-right">$42.75</div>
        </div>

        <div className="grid grid-cols-2 mb-2">
          <div>Total before tax:</div>
          <div className="text-right">$42.75</div>
        </div>

        <div className="grid grid-cols-2 mb-2">
          <div>Estimated Tax(10%):</div>
          <div className="text-right">$42.75</div>
        </div>

        <div className="grid grid-cols-2 mt-5 border-t-4 font-bold text-red-600">
          <div>Order Total:</div>
          <div className="text-right">$52.51</div>
        </div>
        <NavLink to="/orders">
          <button className="bg-yellow-400 text-sm rounded-lg font-bold w-full pt-3 pb-2 mt-2 mb-2">Place Your order</button>
        </NavLink>

    </div>
    )}
    </div>
  )
}

export default CartPayment