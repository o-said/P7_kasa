import React, { useState } from "react";
import '../../src/styles/collapse.css';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  // Fonction pour mettre en majuscule la première lettre de la chaîne
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className={`collapse ${isOpen ? 'isOpen' : ''}`}>
      <div className="collapse-header" onClick={toggleCollapse}>
        <h3>{capitalizeFirstLetter(title)}</h3>
        <span>{isOpen ? <IoIosArrowDown className="arrow" /> : <IoIosArrowUp className="arrow" />}</span>
      </div>
      <div className="collapse-content-wrapper" style={{ height: isOpen ? "auto" : "0" }}>
        <div className="collapse-content">{content}</div>
      </div>
    </div>
  );
}

export default Collapse;
