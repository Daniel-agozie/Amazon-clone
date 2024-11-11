import { useState,useEffect } from "react"
import Spinner from "../spinner"

const Features = () => {
  const [addCart, setAddCart] = useState(false)
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch('/api/products');
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log('Error in fetching', error);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [])

  function showAddCart() {
    setAddCart(true)
  }

  return (  
  <div className="mt-10">
    {loading ? (<Spinner loading={loading} />) : (
      <> 
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6"> 

          {products.map((product) => (    
            <div className="pt-16 px-5 pb-10 flex flex-col border items-center" key={product.key}>
              <div className="flex justify-center items-center mb-2 border px-2 py-2 shadow-inner border-gray-400">
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
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                  <option value={8}>8</option>
                  <option value={9}>9</option>
                  <option value={10}>10</option>
                </select>
              </div>
                
              {addCart ? (
                <div className="flex items-center text-xs text-green-700 -ml-20 mt-2">
                <img className="w-5" src="src/assets/images/icons/checkmark.png"/>
                  Added
                </div>
              ) : ''} 
          
                
              <div className="mt-5">
                <button className="bg-yellow-400 rounded-xl w-32 text-xs hover:bg-yellow-300 p-2" onClick={showAddCart}>Add to Cart</button>
              </div>
              
          </div>
          
          ))}
       
        </div>  
      </>
    )}
  </div>

  )

}

export default Features;