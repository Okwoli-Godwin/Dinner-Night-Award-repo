// import React, { useState } from "react";
// import styles from "./header.module.css";
import Button from "../button/Button";
import Typography from "../typography/Typography";
// import { NavLink } from "react-router-dom";
import CyonLogo from "../../../public/cyonlogo 1.png";
// import { Menu } from "lucide-react";

// const Header: React.FC = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <header className={styles.header}>
//       <div className={styles.logoContainer}>
//         <img src={CyonLogo} alt="Logo" className={styles.logo} />
//         <Typography variant="h6" className={styles.brand}>
//           CYON OLR
//         </Typography>
//       </div>

//       <nav
//         className={`${styles.nav} ${
//           isMobileMenuOpen ? styles.navMobileOpen : ""
//         }`}
//       >
//         <NavLink
//           to="/"
//           className={({ isActive }) =>
//             isActive
//               ? `${styles.navLink} ${styles.activeNavLink}`
//               : styles.navLink
//           }
//         >
//           Home
//         </NavLink>
//         <NavLink
//           to="/ticket"
//           className={({ isActive }) =>
//             isActive
//               ? `${styles.navLink} ${styles.activeNavLink}`
//               : styles.navLink
//           }
//         >
//           Ticket
//         </NavLink>
//         <NavLink
//           to="/vote"
//           className={({ isActive }) =>
//             isActive
//               ? `${styles.navLink} ${styles.activeNavLink}`
//               : styles.navLink
//           }
//         >
//           Vote
//         </NavLink>
//         <NavLink
//           to="/gallery"
//           className={({ isActive }) =>
//             isActive
//               ? `${styles.navLink} ${styles.activeNavLink}`
//               : styles.navLink
//           }
//         >
//           Gallery
//         </NavLink>
//         <div className={styles.buttonGroup}>
//           <Button variant="outline" text="Sign In"></Button>
//           <Button variant="primary" text="Get Ticket"></Button>
//         </div>
//       </nav>

//       {/* Hamburger icon for mobile */}
//       <div className={styles.hamburger} onClick={toggleMobileMenu}>
//         <Menu />
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";

import { NavLink } from "react-router-dom";
import { X } from "lucide-react";
import { Menu } from "lucide-react";
// import { FaTimes } from "react-icons/fa"; // Import an X icon from react-icons

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Close the menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) {
        closeMobileMenu();
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobileMenuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={CyonLogo} alt="Logo" className={styles.logo} />
        <Typography variant="h6" className={styles.brand}>
          CYON OLR
        </Typography>
      </div>

      {/* Main navigation */}
      <nav
        className={`${styles.nav} ${
          isMobileMenuOpen ? styles.navMobileOpen : ""
        }`}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? `${styles.navLink} ${styles.activeNavLink}`
              : styles.navLink
          }
          onClick={closeMobileMenu}
        >
          Home
        </NavLink>
        <NavLink
          to="/ticket"
          className={({ isActive }) =>
            isActive
              ? `${styles.navLink} ${styles.activeNavLink}`
              : styles.navLink
          }
          onClick={closeMobileMenu}
        >
          Ticket
        </NavLink>
        <NavLink
          to="/vote"
          className={({ isActive }) =>
            isActive
              ? `${styles.navLink} ${styles.activeNavLink}`
              : styles.navLink
          }
          onClick={closeMobileMenu}
        >
          Vote
        </NavLink>
        <NavLink
          to="/gallery"
          className={({ isActive }) =>
            isActive
              ? `${styles.navLink} ${styles.activeNavLink}`
              : styles.navLink
          }
          onClick={closeMobileMenu}
        >
          Gallery
        </NavLink>
        <div className={styles.buttonGroup}>
          <Button variant="special" text="Sign In"></Button>
          <Button variant="special2" text="Get Ticket"></Button>
        </div>
      </nav>

      {/* Mobile menu overlay */}

      {/* Hamburger icon for mobile */}
      <div className={styles.hamburger}>
        {isMobileMenuOpen && (
          <div className={styles.closeMenu} onClick={closeMobileMenu}>
            <X size={30} />
          </div>
        )}
        {!isMobileMenuOpen && (
          <div onClick={toggleMobileMenu}>
            <Menu size={30} />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
