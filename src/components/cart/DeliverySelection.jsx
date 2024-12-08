import dayjs from "dayjs";
import { useState} from "react";


const DeliverySelection = () => {

const [deliveryOption, setDeliveryOption] = useState(null);


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
    setDeliveryOption(id)
  }

  const selectedDeliveryOption = deliverySelections.find = (option) => {
   return option.id === deliveryOption
  }

  return (
    <div>
      {deliverySelections.map((deliverySelection) => {
       return (
          <div className="ml-8 mb-5" key={deliverySelection.id} >
          <div className="flex">
            <input type="radio" 
            checked={deliveryOption === deliverySelection.id} 
            onChange={() => handleDeliveryOption(deliverySelection.id)}/>

            <div className="ml-3">
              <div>{showDate(deliverySelection.deliveryDays)}</div>
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
    </div>
  )
}

export default DeliverySelection