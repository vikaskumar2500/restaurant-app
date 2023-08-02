import "./Modal.css";
import React, { useContext } from "react";
import ReactDOM from "react-dom";
import MyContext from "../../store/MyContext";

const Backdrop = (props) => {
  
  return <div className={props.showCart ? "backdrop" : ""}></div>;
};

const ModalOverlay = (props) => {
  console.log('ModalOverlay');
  return <div className="modal-overlay">{props.children}</div>;
};

const Modal = (props) => {
  const myCtx = useContext(MyContext);

  console.log(myCtx.showCart);
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop showCart={myCtx.showCart} />,
        document.getElementById("overlay")
      )}
      {myCtx.showCart &&
        ReactDOM.createPortal(
          <ModalOverlay>{props.children}</ModalOverlay>,
          document.getElementById("overlay")
        )}
    </React.Fragment>
  );
};

export default Modal;
