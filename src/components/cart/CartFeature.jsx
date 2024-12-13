import CartPayment from "./CartPayment";
import { useContext} from "react";
import { AddContext } from "../../Context/ContextProvider";
import DeliverySelection from "./DeliverySelection";
import CartEmpty from "./CartEmpty";


const CartFeature = () => {
  const {addCart,removeFromCart} = useContext(AddContext)

  return (
    <div className="mr-auto ml-auto">
      <div className="ml-2 mt-12 font-bold text-3xl italic">Review Your Order</div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 items-start mr-3">
      <div className="flex flex-col" >
        {addCart.length === 0 ? <CartEmpty />
        :(
          addCart.map((cart) => {  
      
            return (
              <div className="flex flex-1 ml-4 mt-4 p-8 border-4 rounded mb-4 animate-slideup" key={cart.id} id={cart.id} >
             
              <div className="grid grid-cols-3">
              <img className="w-20" src={cart.image} />
       
              <div className="sm:text-sm text-3xl">
                <div className="mb-5 font-bold mr-4">{cart.name}</div>
                <div className="font-bold text-red-700"> ${(cart.priceCents /100).toFixed(2)}</div>
                <div className="mt-5 flex sm:text-sm">
                  <span> Quantity:<span>{cart.quantity}</span> </span>
               
                  <div className="cursor-pointer text-blue-600 font-bold">
                  <span className="ml-2">Update</span>
                  <span className="ml-2"
                   onClick = {() => removeFromCart(cart.id)}
                  >Delete</span>
                  </div>
                  </div>
              </div>
           
              <div className="text-sm ml-9">
                <div className="mb-3 -ml-7 font-bold whitespace-nowrap">Choose a delivery Option:</div>
                <DeliverySelection />
            </div>

          </div>

           </div>
            )
       
      }))}

      </div>
      <CartPayment />
      </div>
    </div>
  )
}

export default CartFeature;