import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { NavLink } from "react-router-dom"

const Notfoundpage = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <section className="flex flex-col items-center mt-12 font-bold">
        <WarningAmberIcon />
        <h1>404 Not Found</h1>
        <p>This Page does not exist</p>
        <button className="bg-blue-500 rounded px-1 py-1 font-bold">
        <NavLink to="/">
        <div>
          Go Back
        </div>
        </NavLink>
        </button>

      </section>
    </div>

  )
}

export default Notfoundpage