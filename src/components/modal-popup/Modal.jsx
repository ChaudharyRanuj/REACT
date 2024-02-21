import "./Modal.css";
function Modal({ id, body, header, footer, onClose }) {
  return (
    <div id={id || "modal"}>
      <div className="modal_content">
        <span onClick={onClose} className="close-modal">&times;</span>
        <div className="header">{!header ? <h1>Header</h1> : header}</div>
        <div className="body">{!body ? <h1>Body</h1> : body}</div>
        <div className="footer">{!footer ? <h1>Footer</h1> : footer}</div>
      </div>
    </div>
  );
}

export default Modal;
