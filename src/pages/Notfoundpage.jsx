// import { FaExclamationTriangle } from "react-icons/fa";
import { NavLink } from "react-router-dom"

const Notfoundpage = () => {
  return (
   <section className="flex flex-col items-center mt-12 font-bold">
    {/* <FaExclamationTriangle /> */}
    <h1>404 Not Found</h1>
    <p>This Page does not exist</p>
    <button className="bg-blue-500 rounded px-1 py-1 font-bold">
    <NavLink to="/">
      Go Back
    </NavLink>
    </button>

   </section>
  )
}

export default Notfoundpage