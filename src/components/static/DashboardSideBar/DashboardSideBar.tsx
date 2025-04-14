// // DashboardSideBar.tsx
// import { NavLink, useNavigate } from 'react-router-dom';
// import { useState } from 'react';
// import styles from './DashboardSideBar.module.css';

// import {
//   MdConfirmationNumber,
//   MdBusinessCenter,
//   MdCategory,
//   MdBarChart,
//   MdCloudUpload,
//   MdLogout,
// } from 'react-icons/md';

// const DashboardSideBar = () => {

//   const navigate = useNavigate();
//   const [isOpen, setIsOpen] = useState(false);

//   const navLinks = [
//     { name: 'Ticket Sold Out', path: '/dashboard/ticketSold', icon: <MdConfirmationNumber /> },
//     { name: 'Set Business', path: '/dashboard/setBusiness', icon: <MdBusinessCenter /> },
//     { name: 'Create Category', path: '/dashboard/vote/createCategory', icon: <MdCategory /> },
//     { name: 'Visitor Stats', path: '/dashboard/visitor-stats', icon: <MdBarChart /> },
//     { name: 'Upload Images', path: '/dashboard/uploadImage', icon: <MdCloudUpload /> },
//   ];

//   const toggleSidebar = () => setIsOpen(!isOpen);

//   const handleLogout = () => {
//     navigate('/login');
//   };

//   return (
//     <>

//       <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
//         <div>
//           <div className={styles.logo}>D&A Night</div>
//           <nav className={styles.nav}>
//             {navLinks.map(link => (
//               <NavLink
//                 key={link.path}
//                 to={link.path}
//                 className={({ isActive }) =>
//                   isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
//                 }
//                 onClick={() => setIsOpen(false)}
//               >
//                 <span style={{ marginRight: '0.5rem', display: 'inline-flex', alignItems: 'center' }}>
//                   {link.icon}
//                 </span>
//                 {link.name}
//               </NavLink>
//             ))}
//           </nav>
//         </div>

//         <button className={styles.logout} onClick={handleLogout}>
//           <MdLogout style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />
//           Logout
//         </button>
//       </div>
//     </>
//   );
// };

// export default DashboardSideBar;

import { NavLink, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './DashboardSideBar.module.css';
import {
	MdConfirmationNumber,
	MdBusinessCenter,
	MdCategory,
	MdBarChart,
	MdCloudUpload,
	MdLogout,
	MdMenu,
  MdClose,
  MdWhereToVote
} from 'react-icons/md';

import { motion, AnimatePresence } from 'framer-motion';

import Logo from '../../../images/cyonlogo1.png';

const navLinks = [
	{
		name: 'Ticket Sold Out',
		path: '/dashboard/ticket-sold',
		icon: <MdConfirmationNumber size={20} />,
	},
	{
		name: 'Set Business',
		path: '/dashboard/setBusiness',
		icon: <MdBusinessCenter size={20} />,
	},
	{
		name: 'Create Category',
		path: '/dashboard/vote/createCategory',
		icon: <MdCategory size={20} />,
	},
	{
		name: 'Visitor Stats',
		path: '/dashboard/visitor-stats',
		icon: <MdBarChart size={20} />,
  },
  
  {
		name: 'See All Votes',
		path: '/dashboard/vote/seeAllVotes',
		icon: <MdWhereToVote size={20} />,
	},

	{
		name: 'Upload Images',
		path: '/dashboard/uploadImage',
		icon: <MdCloudUpload size={20} />,
	},
];

const DashboardSideBar = () => {
	const navigate = useNavigate();
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleLogout = () => {
		navigate('/');
	};

	const renderLinks = () => (
		<AnimatePresence>
			<motion.nav
				initial={{ x: 10, opacity: 0.5 }}
				animate={{ x: 0, opacity: 1 }}
				exit={{ x: 10, opacity: 0.5 }}
				transition={{
					staggerChildren: 0.5,
				}}
				className={styles.nav}
			>
				{navLinks.map((link) => (
					<NavLink
						key={link.path}
						to={link.path}
						className={({ isActive }) =>
							isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
						}
						onClick={() => setMobileOpen(false)} // close mobile on click
					>
						<span className={styles.icon}>{link.icon}</span>
						{link.name}
					</NavLink>
				))}
			</motion.nav>
		</AnimatePresence>
	);

	// Close sidebar if screen becomes wider
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 768) {
				setMobileOpen(false);
			}
		};
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<>
			{/* ==== Desktop Sidebar ==== */}
			<div className={styles.sidebarDesktop}>
				<div className={styles.logo}>
					<img
						className={styles.logoImg}
						src={Logo}
						alt="
            Grand-dinner-logo"
					/>{' '}
					Mega-Hub
        </div>
        <AnimatePresence>
        {renderLinks()}
        </AnimatePresence>
				
				<button className={styles.logout} onClick={handleLogout}>
					<MdLogout size={20} className={styles.icon} />
					Logout
				</button>
			</div>

			{/* ==== Mobile Menu Button ==== */}
			<button className={!mobileOpen ? `${styles.menuBtn}` : styles.close} onClick={() => setMobileOpen(true)}>
				<MdMenu size={28} />
			</button>

			{/* ==== Mobile Sidebar ==== */}
			<div
				className={`${styles.sidebarMobile} ${
					mobileOpen ? styles.show : styles.hide
				}`}
			>
				<div className={styles.mobileTop}>
					<div className={styles.logo}>
						<img
							className={styles.logoImg}
							src={Logo}
							alt="
            Grand-dinner-logo"
						/>{' '}
						Mega-Hub
					</div>
					<button
						className={styles.closeBtn}
						onClick={() => setMobileOpen(false)}
					>
						<MdClose color='red' size={32} fontWeight='bolder' />
					</button>
				</div>
				<AnimatePresence>
        {renderLinks()}
        </AnimatePresence>
				<button className={styles.logout} onClick={handleLogout}>
					<MdLogout size={20} className={styles.icon} />
					Logout
				</button>
			</div>
		</>
	);
};

export default DashboardSideBar;
