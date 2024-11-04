import Navbar from "../components/navbar/Navbar";
import Features from "../components/Features/Features";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Features quantities={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}/>
    </div>
  )
}

export default Homepage;