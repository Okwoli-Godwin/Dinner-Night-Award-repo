
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