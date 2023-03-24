import React, {useEffect} from "react";
import  "./styles.css"


const Modal =({onClose,item}) => {

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

    return  (
        
 <div className="Overlay" onClick={onOverlayClickHandle}>
<div className="Modal">
 <img src={item.largeImageURL}  alt={item.tags} />
 </div>
</div>
        
    )
}

export default Modal;