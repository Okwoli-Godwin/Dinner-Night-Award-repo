import React from "react";
import styles from "./Footer.module.css";
import Typography from "../typography/Typography";
import {
  FaWhatsapp,
  FaPhone,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import FooterLogo from "../../images/cyonlogo.png";
// import FooterLogo from '../../images/c'

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      {/* Div A: Logo and Text */}
      <div className={styles.footerSection}>
        <img
          loading="eager"
          src={FooterLogo}
          alt="logo"
          className={styles.logo}
        />
        <Typography variant="h6">
          Catholic Youth Of Nigeria (CYON), Lagos.
        </Typography>
        <Typography variant="body">Our Lady Of The Rosary (OLR).</Typography>
      </div>

      {/* Div B: Contact and Social Icons */}
      <div className={styles.footerSection}>
        <Typography variant="h6">Contact Us</Typography>

        <div className={styles.contactItem}>
          <FaWhatsapp />
          <Typography variant="body">+234 808 182 5445</Typography>
        </div>

        <div className={styles.contactItem}>
          <FaPhone />
          <Typography variant="body">+234 903 927 7687</Typography>
        </div>

        <div className={styles.socialIcons}>
          <FaFacebook />
          <FaInstagram />
          <FaLinkedin />
          <FaTiktok />
          <FaTwitter />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
