import Navbar from "../components/navbar/Navbar";
import Features from "../components/Features/Features";

const Homepage = ({AddToCart}) => {

  return (
    <div>
      <Navbar />
      <Features AddToCart={AddToCart}/>
    </div>
  )
}

export default Homepage;