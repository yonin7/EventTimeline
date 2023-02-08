import React from "react";
import  ReactDOM from "react-dom";

import { BackdropContainer,ContentContainer,ModalContainer } from './ModalStyles';

const Backdrop: React.FC<{onClose:(setPopupIsShown:boolean)=>void }> = (props) => {
  return <BackdropContainer onClick={()=>props.onClose(false)} />;
};

const ModalOverlay: React.FC<{ children:any}> = (props) => {
  return (
    <ModalContainer>
      <ContentContainer>{props.children}</ContentContainer>
    </ModalContainer>
  );
};

const portalElement:any = document.getElementById("overlays");

const Modal: React.FC<{children:any,onClose:(setPopupIsShown:boolean)=>void}> = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;