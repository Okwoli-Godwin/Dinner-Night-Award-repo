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
      <div className="w-[100%] h-[100%] bg-[#000000d3] flex justify-around p-[40px]">
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
          <Typography variant="body2">Our Lady Of The Rosary (OLR).</Typography>
        </div>

        {/* Div B: Contact and Social Icons */}
        <div className={styles.footerSection}>
          <Typography variant="h4">Contact Us</Typography>

          <div className={styles.contactItem}>
            <FaWhatsapp size={18} />
            <Typography variant="body2">+234 808 182 5445</Typography>
          </div>

          <div className={styles.contactItem}>
            <FaPhone size={18} />
            <Typography variant="body2">+234 903 927 7687</Typography>
          </div>

          <div className={styles.socialIcons}>
            <FaFacebook />
            <FaInstagram />
            <FaLinkedin />
            <FaTiktok />
            <FaTwitter />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
