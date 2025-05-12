import { motion, AnimatePresence } from "framer-motion";
import "./Modal.css"; // CSS file for styling
import { X } from "lucide-react";
// import { ReactElement } from "react";
import Typography from "../typography/Typography";

// interface Card {
//   id: number;
//   image: string;
//   name: string;
//   buttonLabel: string;
//   address: string;
//   location: string;
//   website: string;
//   businessDescription?: string | null;
//   socialMediaLink?: string | null;
//   socialMedia?: ReactElement[];
// }

interface Business {
  phoneNumber: number;
  image: any;
  id: number;
 url: string;
  name: string;
  email: string;
  buttonLabel: string;
  address: string;
  location: string;
  website: string;
  description?: string;
  socialMediaLink?: string;
  socialMedia?: [];
}

interface ModalProps {
  cards: Business | null;
  onClose: () => void;
}

const Modal = ({ cards, onClose }: ModalProps) => {
  return (
    <AnimatePresence>
      {cards && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.5 }}
        >
          <motion.div
            className="modal-content"
            initial={{ scale: 0.8, opacity: 0.5 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0.5 }}
          >
            <button className="modal-close" onClick={onClose}>
              <X size={35} color="red" />
            </button>
            <img
              src={cards.image.url}
              alt={cards.name}
              className="modal-image"
              loading="lazy"
            />
            <Typography variant="h3">{cards.name}</Typography>
            <p>
              <strong>Description:</strong> {cards.description}
            </p>
            <p>
              <strong>Address:</strong> {cards.address}
            </p>
            <p>
              <strong>Phone:</strong> {cards.phoneNumber}
            </p>
            <p>
              <strong>Email:</strong> {cards.email}
            </p>
            <p>
              <strong>Website:</strong>{" "}
              <a
                href={`https://${cards.website}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "blue" }}
              >
                {cards.website}
              </a>
            </p>

            {cards.socialMedia?.map((social, index) => (
              <a key={index}>{social}</a>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
