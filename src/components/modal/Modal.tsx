import { motion, AnimatePresence } from "framer-motion";
import "./Modal.css"; // CSS file for styling
import { X } from "lucide-react";
import { ReactElement } from "react";

interface Card {
  id: number;
  image: string;
  name: string;
  buttonLabel: string;
  address: string;
  location: string;
  website: string;
  businessDescription?: string | null;
  socialMediaLink?: string | null;
  socialMedia?: ReactElement[];
}

interface ModalProps {
  cards: Card | null;
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
              src={cards.image}
              alt={cards.name}
              className="modal-image"
              loading="lazy"
            />
            <h2>{cards.name}</h2>
            <p>
              <strong>Address:</strong> {cards.address}
            </p>
            <p>
              <strong>Location:</strong> {cards.location}
            </p>
            <p>
              <strong>Website:</strong>{" "}
              <a
                href={`https://${cards.website}`}
                target="_blank"
                rel="noopener noreferrer"
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
