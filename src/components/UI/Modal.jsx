import "./Modal.css";
import React from "react";
import ReactDOM from "react-dom";


const Backdrop = (props) => {
  return <div className="backdrop"></div>;
};

const ModalOverlay = (props) => {
  // console.log(props);
  return <div className="modal-overlay">{props.children}</div>;
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById("overlay"))}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("overlay")
      )}
    </React.Fragment>
  );
};

export default Modal;
