import React from 'react'
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';


const CartEmpty = () => {
  return (
    <div className='flex flex-col justify-center items-center '>
      <ProductionQuantityLimitsIcon />
      <div className='font-bold text-red-600'>THE CART IS EMPTY</div>
    </div>
  )
}

export default CartEmpty