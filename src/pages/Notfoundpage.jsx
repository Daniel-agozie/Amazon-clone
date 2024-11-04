// import { FaExclamationTriangle } from "react-icons/fa";
import { NavLink } from "react-router-dom"
import "../index.css"

const Notfoundpage = () => {
  return (
   <section className="notfound">
    {/* <FaExclamationTriangle /> */}
    <h1>404 Not Found</h1>
    <p>This Page does not exist</p>
    <button>
    <NavLink to="/">
      Go Back
    </NavLink>
    </button>

   </section>
  )
}

export default Notfoundpage