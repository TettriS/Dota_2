import React from "react";
import ReactDOM from "react-dom";

import './popup.css';

const Popup = ({ children, open, className = '' }) => {
  const el = React.useMemo(() => document.createElement("div"), []);
  const target = document.body;

  React.useEffect(() => {
    const classList = ["popup", ...className.split(" ")];
    classList.forEach((item) => el.classList.add(item));

    if (open) {
      target.appendChild(el);

      return () => {
        target.removeChild(el);
      };
    }
  }, [open, className]);

  return ReactDOM.createPortal(children, el);
}

export default Popup;