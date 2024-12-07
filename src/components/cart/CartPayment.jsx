

const CartPayment = () => {
  return (
    <div className="border-4 px-10 ml-6 mr-5 container py-10 h-full">
      <div className="font-bold mb-3">Order Summary</div>


        <div className="grid grid-cols-2 mb-2">
          <div>Items(3):</div>
          <div className="ml-auto">$42.75</div>
        </div>

        <div className="grid grid-cols-2 mb-2">
          <div>Shopping & Handling:</div>
          <div className="ml-auto">$42.75</div>
        </div>

        <div className="grid grid-cols-2 mb-2">
          <div>Total before tax:</div>
          <div className="ml-auto">$42.75</div>
        </div>

        <div className="grid grid-cols-2 mb-2">
          <div>Estimated Tax(10%):</div>
          <div className="ml-auto">$42.75</div>
        </div>

        <div className="grid grid-cols-2 mt-5 border-t-4 font-bold text-red-600">
          <div>Order Total:</div>
          <div className="ml-auto">$52.51</div>
        </div>

        <div className="flex justify-center items-center mt-10">
          <button className="bg-yellow-400 px-48 py-2 text-sm whitespace-nowrap rounded-lg font-bold">Place Your order</button>
        </div>


    </div>
  )
}

export default CartPayment