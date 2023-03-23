import React, { Component } from "react";
import  "./styles.css"
import { createPortal } from "react-dom";

const modalRoot= document.querySelector('#modal-root')

class Modal extends Component  {

state= {
    showModal: false
}
componentDidMount() {
    window.addEventListener('keydown',this.onKeydownHandler)
}

componentWillUnmount(){
  window.removeEventListener('keydown',this.onKeydownHandler)
}
onKeydownHandler = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  onOverlayClickHandle = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };
render() {
    const {item}=this.props
    return (
        createPortal(
 <div className="Overlay" onClick={this.onOverlayClickHandle}>
<div className="Modal">
 <img src={item.largeImageURL}  alt={item.tags} />
 </div>
</div>, modalRoot
        )
    )

}

}
export default Modal;