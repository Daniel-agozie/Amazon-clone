import Products from "../../data/Product"

const Features = ({quantities}) => {
  return (  
<div className="mt-10">
<div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6"> 
   {Products.map((product) => (    
  <div className="pt-16 px-5 pb-10 flex flex-col flex-1 border-r-2 border-b-2 items-center" key = {product.key}>
        <div className="flex justify-center items-center">
        <img className="w-full mb-4 h-20" src={product.image} alt = {product.name}/>
        </div>

        <div className="text-xs font-medium">{product.name}</div>

        <div className="flex items-center mt-auto -ml-14"> 
          <img className="w-14" src={`src/assets/images/ratings/rating-${product.rating.stars * 10}.png`}/>
          <div className="ml-2 text-xs">{product.rating.count}</div>
        </div>

        <div className="-ml-20 mt-2 text-sm">
          ${(product.priceCents /100).toFixed(2)}
        </div>

        <div className="-ml-28 mt-2">
          <select>
            {quantities.map((quantity) => {
              <option key={quantity} value={quantity}>
                {quantity}
              </option>
            })}
          </select>
        </div>
          <div className="mt-5">
            <button className="bg-yellow-400 rounded-xl w-32 text-xs hover:bg-yellow-300 p-2">Add to Cart</button>
            </div>
    </div>

    ))}
</div>  
</div>
  )
}

export default Features;