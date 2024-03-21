import React from "react";

const Modal = ({ id, header, body, footer, onClose }) => {
  return (
    <div id={id || "Modal"} className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <span className="close-modal-icon" onClick={onClose}>
            &times;
          </span>
          <h2>{header ? header : "Header"}</h2>
        </div>
        <div className="modal-body">{body ? body : "Body"}</div>
        <div className="modal-footer">{footer ? footer : "Footer"}</div>
      </div>
    </div>
  );
};

export default Modal;
