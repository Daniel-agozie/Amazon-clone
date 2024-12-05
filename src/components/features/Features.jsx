import { useState,useEffect,useContext } from "react";
import { AddCartContent } from "../../data/Cart";
import Spinner from "../spinner"

const Features = () => {
  const [button, setButton] = useState(new Map())
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const {AddToCart} = useContext(AddCartContent);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch('/api/products');
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        // console.log('Error in fetching data', error);
        res.status(404).send(error.response.data);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [setProducts])


  function showButton(key) {
      // setAddCart((prev) => new Set (prev).add (key) )

      setButton((prev) => {
        const updated = new Map(prev);
        updated.set(key, true)
        return updated;
      })

      setTimeout(() => {
        setButton((prev) => {
          const updated = new Map(prev);
          updated.delete(key);
          return updated;
        });
      }, 1000)
  }

  return (  
  <div className="mt-10">
    {loading ? (<Spinner loading={loading} />) : (
      <> 
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6"> 

          {products.map((product) => (    
            <div className="pt-16 px-5 pb-10 flex flex-col border items-center text-xs font-bold" key={product.key} id={product.key}>
              <div className="flex justify-center items-center mb-2">
                <img className="w-full mb-4 h-20" src={product.image} alt = {product.name}/>
              </div>
 
              <div className="text-sm">{product.name}</div>

              <div className="flex items-center mt-auto -ml-14"> 
                <img className="w-14" src={`src/assets/images/ratings/rating-${product.rating.stars * 10}.png`}/>
                <div className="ml-2 text-xs">{product.rating.count}</div>
              </div>

              <div className="-ml-24 mt-2 text-sm">
                ${(product.priceCents /100).toFixed(2)}
              </div>

              <div className="-ml-24 mt-2 border">
                <select>
                  {[...Array(10).keys()].map((n) => (
                      <option key={n} value={n+1}>
                        {n+1}
                      </option>
                  ))}
                </select>
              </div>
                
              {button.has(product.key) ? (
                <div className="flex items-center text-xs text-green-700 -ml-20 mt-2">
                <img className="w-5" src="src/assets/images/icons/checkmark.png"/>
                  Added
                </div>
              ) : ''} 
          
                
              <div className="mt-5">
                <button className="bg-yellow-400 rounded-3xl w-32 text-xs hover:bg-yellow-300 p-2" 
                onClick={() => {
                  showButton(product.key)
                  AddToCart(product,product.id)
                }
              }
                > Add to Cart</button>
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