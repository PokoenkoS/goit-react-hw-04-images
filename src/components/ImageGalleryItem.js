import React, { Component } from "react";
import  "./styles.css";
import Modal from "./Modal";

   class ImageGallaryItem extends Component  {

      state={
         isSelect:'',
      }

onToggle=()=>{
   this.setState(({ isSelect }) => ({ isSelect: !isSelect }));
}
      render() {
         const { isSelect } = this.state;
         const {item}=this.props
         return( <>
            
   <li className="ImageGalleryItem" key={item.id} >
      <img src={item.webformatURL} 
      alt={item.tags}
       className="ImageGalleryItem-image"
       onClick={this.onToggle}/>
   </li>
   {isSelect && <Modal onClose={this.onToggle} item={item}/>}
     </>
    )
      }
       
   
          
        }
  
export default ImageGallaryItem;