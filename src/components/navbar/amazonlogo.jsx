import { NavLink } from "react-router-dom";

const Amazonlogo = () => {
  return (
    <div>
        <NavLink to="/">
        <img className="h-8 mt-4 mx-3 hidden sm:block" src="src/assets/images/amazon-logo.png"/>
      </NavLink>
    </div>
  )
}

export default Amazonlogo