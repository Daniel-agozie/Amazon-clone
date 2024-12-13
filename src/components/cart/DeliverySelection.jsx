import dayjs from "dayjs";
import { useState} from "react";


const DeliverySelection = () => {
  const [deliveryOption, setDeliveryOption] = useState(null);
  const [selectedPrice,setSelectedPrice] = useState(0)

   const deliverySelections = [
    {
      id: '1',
      deliveryDays: 7,
      priceCents: 0
    },
    {
      id: '2',
      deliveryDays: 3,
      priceCents:499
    },
    {
      id: '3',
      deliveryDays: 1,
      priceCents:999
    },
  ]

  
 const showDate = (daysToAdd) => {
  const today = dayjs();
  const deliveryDate = today.add(daysToAdd, 'days')
  const dateString = deliveryDate.format('dddd, MMMM D')
  return dateString;
}

const handleDeliveryOption = (id) => {
  const selectedDeliveryOption = deliverySelections.find((option) => option.id === id)
   
  setDeliveryOption(selectedDeliveryOption)
  setSelectedPrice(selectedDeliveryOption.priceCents)

  // setSelectedPrice((prev) => ({
  //   ...prev,
  //   [id]:
  //   selectedDeliveryOption.priceCents
  // }))
 
}

console.log(selectedPrice);


// const totalPrice = Object.values(selectedPrice).reduce((acc,price) => {
//   return (acc + price) / 100
// },0)

// console.log(totalPrice);



  return (
    <div>

      {deliverySelections.map((deliverySelection) => {
       return (
          <div className="-ml-8 mb-5" key={deliverySelection.id} id={deliverySelection.id}>
            
          <div className="flex">
            <input type="radio" 
            checked={deliveryOption?.id === deliverySelection.id} 
            onChange={() => handleDeliveryOption(deliverySelection.id)}/>

            <div className="ml-3 text-3xl sm:text-xs text-gray-500">
              <div className="text-green-800 font-bold whitespace-nowrap ">{showDate(deliverySelection.deliveryDays)}</div>
              <div>
                Arrive in  {deliverySelection.deliveryDays} {deliverySelection.deliveryDays === 1 ? "Day" : "Days"}
              </div>
  
              <div> 
                {deliverySelection.priceCents === 0  ? "FREE" : `$${deliverySelection.priceCents/100}`} - Shipping
                </div>
            
          
            </div>
          </div>
  
        </div>

        )
      })}
<div className="whitespace-nowrap font-bold sm:text-sm text-2xl -ml-28 text-green-900">{deliveryOption ?  (<div> Delivery Date: {showDate(deliveryOption.deliveryDays)}</div>) : (<div>select one option</div>)}</div>

</div>
  )
}

export default DeliverySelection