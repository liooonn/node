npx create-react-app avatar-interactif
cd avatar-interactif
npm install framer-motion
import React, { useState } from "react";
import { motion } from "framer-motion";
import "./AvatarInteractif.css";

const AvatarInteractif = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="avatar-container">
      {/* Avatar avec animations */}
      <motion.div
        className="avatar"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src="/avatar.png" alt="Avatar de Synergi" className="avatar-img" />
      </motion.div>

      {/* Fenêtre de dialogue */}
      {isOpen && (
        <motion.div
          className="dialogue-box"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <p>Bonjour ! Comment puis-je vous aider ?</p>
          <button onClick={() => setIsOpen(false)}>Fermer</button>
        </motion.div>
      )}
    </div>
  );
};

export default AvatarInteractif;

  
