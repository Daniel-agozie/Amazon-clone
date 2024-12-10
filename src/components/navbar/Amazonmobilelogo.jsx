import { NavLink } from "react-router-dom"

const Amazonmobilelogo = () => {
  return (
    <div>
  <NavLink to="/">
        <img className="h-20 m-5 block sm:hidden w-28" src="src/assets/images/amazon-mobile-logo.png" />
      </NavLink>    
    </div>
  )
}

export default Amazonmobilelogo