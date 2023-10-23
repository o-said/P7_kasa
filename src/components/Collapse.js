import React, { useState } from "react";
import '../../src/styles/collapse.css';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse ${isOpen ? 'isOpen' : ''}`}>
      <div className="collapse-header" onClick={toggleCollapse}>
        <h3>{title}</h3>
        <span>{isOpen ? <IoIosArrowDown className="arrow" /> : <IoIosArrowUp className="arrow" />}</span>
      </div>
      <div className="collapse-content-wrapper" style={{ height: isOpen ? "auto" : "0" }}>
        <div className="collapse-content">{content}</div>
      </div>
    </div>
  );
}

export default Collapse;
