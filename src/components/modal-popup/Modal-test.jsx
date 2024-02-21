import { useState } from "react";
import Modal from "./Modal";
import "./Modal.css";
function ModalTest() {
  const [showModal, setModal] = useState(false);
  

  function handleShowModal() {
    setModal(!showModal);
  }
function handleCloseModal() {
  setModal(false)
}
  return (
    <div className="modal_test">
     
        <button className="btn" onClick={handleShowModal}>
          Open Modal
        </button>


      {showModal && <Modal onClose={handleCloseModal}  header={<h1>This is custom header</h1>} />}
    </div>
  );
}

export default ModalTest;
