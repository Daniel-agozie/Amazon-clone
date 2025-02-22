import CartPayment from "./Cart-payment";
import { useContext} from "react";
import { AddContext } from "../../context/Context";
// import DeliverySelection from "./DeliverySelection";
import CartEmpty from "./Cart-empty";
import dayjs from "dayjs"


const CartFeature = () => {
  const {addCart,removeFromCart} = useContext(AddContext);

  const today = dayjs();
  const now = today.format("dddd, MMMM D")
  console.log(now)

  return (
    <div className="mr-auto ml-auto">
      <div className="ml-2 mt-12 font-bold text-3xl italic">Review Your Order</div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 items-start mr-3">
      <div className="flex flex-col" >

        {addCart.length === 0 ? <CartEmpty />
        :(
          addCart.map((cart) => {  
      
            return (
              <div className="flex ml-4 mt-4 p-8 border-4 rounded mb-4 animate-slideup" key={cart.id} id={cart.id}>
              
              <div className="flex flex-col font-bold md:text-sm text-2xl">Ordered Date: <span>{now}</span></div>

              <div className="grid grid-cols-2">
                <img className="w-20" src={cart.image} />
       
              <div className="md:text-sm text-3xl">
                <div className="mb-5 font-bold mr-4">{cart.name}</div>
                <div className="font-bold text-red-700"> ${(cart.priceCents /100).toFixed(2)}</div>
                <div className="mt-5 flex md:text-sm">
                  <span> Quantity:<span>{cart.quantity}</span> </span>
               
                  <div className="cursor-pointer text-blue-600 font-bold md:text-sm text-2xl">
                  <span className="ml-2">Update</span>
                  <span className="ml-2"
                   onClick = {() => removeFromCart(cart.id)}
                  >Delete</span>
                  </div>
                  </div>
              </div>
           
              {/* <div className="text-sm ml-9">
                <div className="mb-3 -ml-7 font-bold whitespace-nowrap">Choose a delivery Option:</div>
                <DeliverySelection />
            </div> */}

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