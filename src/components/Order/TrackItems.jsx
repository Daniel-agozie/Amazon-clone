import React,{useContext} from 'react'
import {AddContext} from "../../context/Context-provider"
import {NavLink} from "react-router-dom"

const TrackItems = () => {
  const {orders} = useContext(AddContext)

  return (
    <div>
      <NavLink to="/">
        <div className='ml-4 mt-6 font-bold text-2xl text-red-500'>
         Your Orders
        </div>
      </NavLink>

      <div className=' mx-4 mt-10 border-2 border-gray-400'>
        <div className='bg-gray-500 font-bold text-2xl p-2'>Tracking Items</div>

          {orders.map((order) => (
                <div className='p-4 flex' key={order.key}>
                <img className='w-16 ml-4 mb-4' src={order.image}/>
                  <div className='ml-7'>
                    <div className='font-bold text-lg'>{order.name.slice(0,30)}</div>
                    <div>Arriving on: may 2</div>
                    <div>Quantity : {order.quantity}</div>
                  </div>
                <div className='mr-4 flex flex-1 justify-end h-10'>
                  <button className="bg-gray-200 px-6 py-1 rounded-lg drop-shadow-xl filter text-sm">Track Package</button>
                </div>
              </div>

          ))}




      </div>
    </div>
  )
}

export default TrackItems