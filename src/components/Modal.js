import React, { useState, useEffect} from "react";
import  "./styles.css"
import { createPortal } from "react-dom";

const modalRoot= document.querySelector('#modal-root')

const Modal =({onClose,item}) => {
  
const [showModal, setShowModal] = useState(false);

useEffect(() => {
  window.addEventListener('keydown',onKeydownHandler)

 }, []);

useEffect(() => {
  window.removeEventListener('keydown',onKeydownHandler)

}, []);

const onKeydownHandler = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

 const onOverlayClickHandle = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

    return (
        createPortal(
 <div className="Overlay" onClick={onOverlayClickHandle}>
<div className="Modal">
 <img src={item.largeImageURL}  alt={item.tags} />
 </div>
</div>, modalRoot
        )
    )

}


export default Modal;