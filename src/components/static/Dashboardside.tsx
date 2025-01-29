<<<<<<< HEAD

import { LucideTicketsPlane } from 'lucide-react'
import logo from '../../images/cyonlogo.png'
import { NavLink } from 'react-router-dom'

const Dashboardside = () => (
    <div className="w-full h-[100%] bg-gray-300 flex items-center justify-between flex-col p-3">
        <div className="w-[95%] h-[20%]  flex items-center justify-start gap-3">
            <img src={logo} alt="" className='md:w-10 w-7' />
            <p className='md:text-3xl text-2xl  font-extrabold text-black'>OLR CYON</p>
        </div>

        <div className='w-[95%] h-[35%] flex items-start justify-between  flex-col text-black text-2xl '>
            <NavLink to="/dashboard" className={({ isActive}) => ` className='font-extrabold py-2 px-2 w-[100%]  cursor-pointer list-none hover:bg-gray-400 rounded hover:shadow  flex gap-'> ${isActive ?` text-yellow-400 shadow shadow-yellow-600 bg-gray-400 `: `text-black`}`}><LucideTicketsPlane/> <span className='font-bold'>Ticket sold out</span></NavLink>
            {/* <NavLink
          to="/gallery"
          className={({ isActive }) =>
            isActive
              ? `${styles.navLink} ${styles.activeNavLink}`
              : styles.navLink
          }
          onClick={closeMobileMenu}
        >
          Gallery
        </NavLink> */}
             <NavLink to="/visitor" className={({ isActive}) => ` className='font-extrabold py-2 px-2 w-[100%]  cursor-pointer list-none hover:bg-gray-400 rounded hover:shadow  flex gap-'>${isActive ?` text-yellow-400 shadow shadow-yellow-600 bg-gray-400 `: `text-black`}`}> <span className='font-bold'>Visitors</span></NavLink>

             <NavLink to="/" className={({ isActive}) => ` className='font-extrabold py-2 px-2 w-[100%]  cursor-pointer list-none hover:bg-gray-400 rounded hover:shadow  flex gap-'><LucideTicketsPlane/> <span>Ticket sold out</span> ${isActive ?` text-yellow-400 shadow shadow-yellow-600 bg-gray-400 `: `text-black`}`}><LucideTicketsPlane/> <span className='font-bold'>Ticket sold out</span></NavLink>
            
        </div>
        <div className='w-[95%] h-[10%] flex items-center justify-start px-2 '>
           
            <button className='text-red-500 font-extrabold rounded bg-black py-2 px-12 shadow shadow-red-400 hover:shadow-black hover:bg-red-600 hover:text-black'>LOGOUT</button>
        </div>
    </div>
)

export default Dashboardside
=======
import { LucideTicketsPlane } from "lucide-react";
import logo from "../../images/cyonlogo.png";
import { NavLink } from "react-router-dom";

interface DashboardsideProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Dashboardside: React.FC<DashboardsideProps> = ({ open, setOpen }) => (
  <div className={`w-full h-full bg-gray-300 flex flex-col p-3 ${open ? "block" : "hidden"} md:block`}>
    {/* Logo Section */}
    <div className="w-[95%] h-[20%] flex items-center gap-3">
      <img src={logo} alt="Logo" className="md:w-10 w-7" />
      <p className="md:text-3xl text-2xl font-extrabold text-black">OLR CYON</p>
    </div>

    {/* Navigation Links */}
    <div className="w-[95%] h-[35%] flex flex-col gap-2 text-black text-2xl">
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          `font-extrabold py-2 px-2 w-full cursor-pointer hover:bg-gray-400 rounded hover:shadow flex gap-2 ${
            isActive ? "text-yellow-400 shadow shadow-yellow-600 bg-gray-400" : "text-black"
          }`
        }
      >
        <LucideTicketsPlane />
        <span className="font-bold">Ticket Sold Out</span>
      </NavLink>
      <NavLink
        to="/visitor"
        className={({ isActive }) =>
          `font-extrabold py-2 px-2 w-full cursor-pointer hover:bg-gray-400 rounded hover:shadow flex gap-2 ${
            isActive ? "text-yellow-400 shadow shadow-yellow-600 bg-gray-400" : "text-black"
          }`
        }
      >
        <span className="font-bold">Visitors</span>
      </NavLink>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `font-extrabold py-2 px-2 w-full cursor-pointer hover:bg-gray-400 rounded hover:shadow flex gap-2 ${
            isActive ? "text-yellow-400 shadow shadow-yellow-600 bg-gray-400" : "text-black"
          }`
        }
      >
        <LucideTicketsPlane />
        <span className="font-bold">Home</span>
      </NavLink>
    </div>

    {/* Logout Button */}
    <div className="w-[95%] h-[10%] flex items-center px-2">
      <button
        onClick={() => setOpen(false)} // Example to close sidebar
        className="text-red-500 font-extrabold rounded bg-black py-2 px-12 shadow shadow-red-400 hover:shadow-black hover:bg-red-600 hover:text-black"
      >
        LOGOUT
      </button>
    </div>
  </div>
);

export default Dashboardside;
>>>>>>> cfe9d4f55d0f356942908fef81016e091a764a03
