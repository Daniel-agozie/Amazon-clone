import CartPayment from "./CartPayment";
import { useContext} from "react";
import { AddContext } from "../../Context/ContextProvider";
import DeliverySelection from "./DeliverySelection";


const CartFeature = () => {


  const {addCart} = useContext(AddContext)

  return (
    <div className="mr-auto ml-auto">
      <div className="ml-2 mt-12 font-bold text-3xl italic">Review Your Order</div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 items-start mr-3">
      <div className="flex flex-col" >
        {addCart.length === 0 ? ""
        :(
          addCart.map((cart) => {
            return (
              <div className="flex flex-1 ml-4 mt-4 p-8 border-4 rounded mb-4" key={cart.id} id={cart.id} >
             
              <div className="grid grid-cols-3 gap-5">
              <img className="w-20" src={cart.image} />
       
              <div className="ml-5">
                <div className="font-bold italic mb-5">{cart.name}</div>
                <div className="font-bold text-red-700"> ${(cart.priceCents /100).toFixed(2)}</div>
                <div className="mt-2 font-bold">
                  <span> Quantity:<span>{cart.quantity}</span> </span>
                </div>
                  <div className="mt-4 -ml-2 font-bold italic cursor-pointer">
                  <span className="ml-2 text-blue-700">Update</span>
                  <span className="ml-2 text-blue-700">Delete</span>
                  </div>
              </div>
           
              <div className="italic text-xs font-bold">
                <div className="mb-3 ml-7">Choose a delivery Option:</div>
                <DeliverySelection />
            </div>
            <div className="whitespace-nowrap">Delivery Date</div>
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