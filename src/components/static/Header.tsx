import Button from "../button/Button";
import Typography from "../typography/Typography";
import CyonLogo from "../../images/cyonlogo1.png";
import type React from "react";
import { useState, useEffect } from "react";
import styles from "./header.module.css";
import { NavLink } from "react-router-dom";
import { X } from "lucide-react";
import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) {
        closeMobileMenu();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobileMenuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img
          src={CyonLogo || "/placeholder.svg"}
          alt="Logo"
          className={styles.logo}
        />
        <Typography variant="h6" className={styles.brand}>
          CYON OLR
        </Typography>
      </div>

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
          to="/gallery"
          className={({ isActive }) => (isActive ? `${styles.navLink} ${styles.activeNavLink}` : styles.navLink)}
          onClick={closeMobileMenu}
        >
          Gallery
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
        
        <div className={styles.specialGetTicket}>
        <NavLink
          to="/get-ticket"
          className={({ isActive }) =>
            isActive
              ? `${styles.navLink} ${styles.activeNavLink}`
              : styles.navLink
          }
          onClick={closeMobileMenu}
        >
        Get Ticket
          </NavLink>
        </div>
          
        <div className={styles.buttonGroup}>
          {/* <Button
            onClick={() => {
              navigate("/gallery");
              closeMobileMenu();
            }}
            variant="special"
            text="Gallery"
          /> */}
          <Button
            onClick={() => {
              navigate("/get-ticket");
              closeMobileMenu();
            }}
            variant="special2"
            text="Get Ticket"
          />
        </div>
      </nav>

      <div className={styles.hamburger}>
        {isMobileMenuOpen ? (
          <div className={styles.closeMenu} onClick={closeMobileMenu}>
            <X size={30} />
          </div>
        ) : (
          <div onClick={toggleMobileMenu}>
            <Menu size={30} />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
