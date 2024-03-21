import React, { useState } from "react";
import Modal from "./Modal";
import "./Modal.css";

const ModalTest = () => {
  const [showModalPopup, setShowModalPopup] = useState(false);

  const handleToggleModalPopup = () => {
    setShowModalPopup(!showModalPopup);
  };

  const handleClose = () => {
    setShowModalPopup(false);
  };

  return (
    <div>
      <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
      {showModalPopup && (
        <Modal
          body={
            "Yooo what up my name is Trey and I wanna catch some sick waves"
          }
          onClose={handleClose}
        />
      )}
    </div>
  );
};

export default ModalTest;
