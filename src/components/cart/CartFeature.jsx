import produts from "../../data/products.json"
import CartPayment from "./cartPayment";

const CartFeature = () => {
  
  return (
    <div>
      <div className="ml-2 mt-12 font-bold text-3xl italic">Review Your Order</div>
      
      <div className="grid grid-cols-gridcols md:grid-cols-1">
        <div className="flex flex-1 ml-4 mt-4 border-4 p-8">
          <div className="w-20">
          <img className="w-24 mt-3" src="src/assets/images/products/athletic-cotton-socks-6-pairs.jpg" />
          </div>
       
          <div className="ml-5">
            <div className="font-bold italic">Black and Gray Athletic Cotton Socks - 6 Pairs</div>
            <p className="font-bold text-red-700">$10.90</p>
            <div className="flex">
              <div> Quantity: 2 </div>
              <button className="ml-2 text-blue-700">Update</button>
              <button className="ml-2 text-blue-700">Delete</button>
            </div>
          </div>

          <div className="italic text-xs font-bold whitespace-nowrap">
          <div className="ml-8 mb-5">
            <div className="mb-3">Choose a delivery Option:</div>
            <div className="flex">
              <input type="radio"/>
              <div className="ml-3">
                <div>Tuesday, June 21</div>
                <div>FREE SHIPPING</div>
              </div>
            </div>
          </div>

          <div className="ml-8 mb-5">
            <div className="flex">
              <input type="radio"/>
              <div className="ml-3">
                <div>Tuesday, June 21</div>
                <div>FREE SHIPPING</div>
              </div>
            </div>
          </div>

          <div className="ml-8">
            <div className="flex">
              <input type="radio"/>
              <div className="ml-3">
                <div>Tuesday, June 21</div>
                <div>FREE SHIPPING</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CartPayment />
      </div>
    </div>
  )
}

export default CartFeature;