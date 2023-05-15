import React from "react";
import { motion } from "framer-motion";
import "./AltLogin.css";

function AltLogin(props) {
  return (
    <motion.div
      className="alt-content"
      whileHover={{ scale: [null, 1.1, 1.1] }}
      transition={{ duration: 0.3 }}>
      <props.icon className="icon" />
      <p>{props.info}</p>
    </motion.div>
  );
}

export default AltLogin;
