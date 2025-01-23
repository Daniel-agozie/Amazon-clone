import React,{ useState,useEffect ,useContext} from "react";
import Spinner from "../Spinner"
import { AddContext } from "../../context/Contextprovider";
import AOS from "aos";
import "aos/dist/aos.css";

const Features = () => {
  const {AddToCart,button,showButton,products,loading} = useContext(AddContext);

  useEffect(() => {
    AOS.init({
      duration: 3000,
      offset: 100,
    })
  },[]);

  return (  
  <div className="mt-10">
    {loading ? (<Spinner loading={loading} />) : (
      <> 
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7  2xl:grid-cols-8 mt-20" data-aos="fade-right"> 

          {products.map((product) => (    
            <div className="pt-28 sm:pt-16 px-5 pb-10 flex flex-col border items-center text-xs " key={product.key} id={product.key}>

              <div className="flex justify-center items-center mb-2">
                <img className="w-full mb-4 h-20" src={product.image} alt = {product.name}/>
              </div>
 
              <div className="md:text-sm text-3xl line-clamp-2">{product.name}</div>

            <div className="flex flex-col items-center mt-2 gap-2">
              <div className="flex items-center"> 
                <img className="md:w-14 w-28 mr-2" src={`src/assets/images/ratings/rating-${product.rating.stars * 10}.png`}/>
                <div className="md:text-sm text-3xl">{product.rating.count}</div>
              </div>

              <div className="md:text-sm text-3xl">
                ${(product.priceCents /100).toFixed(2)}
              </div>

              <div className="border mb-6">
                <select className="md:text-sm text-2xl">
                  {[...Array(10).keys()].map((n) => (
                      <option key={n} value={n+1}>
                        {n+1}
                      </option>
                  ))}
                </select>
              </div>
              </div>

              <div className="flex flex-1"></div>

              {button.has(product.key) && (
                <div className="flex items-center text-xs text-green-700 animate-slideright">
                <img className="h-5" src="src/assets/images/icons/checkmark.png"/>
                  Added
                </div>
              ) } 
          
              <div className="mt-2">
                <button className="bg-yellow-400 rounded-lg w-full md:text-lg md:font-bold text-2xl hover:bg-yellow-300 p-2" 
                onClick={() => {
                  showButton(product.key)
                  AddToCart(product)
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