import React, { useState } from "react";
import  "./styles.css";
import Modal from "./Modal";

   const ImageGallaryItem =({item})=> {
     const [isSelect, setIsSelect] = useState('');
    
     const onToggle=()=>{
   setIsSelect((prev) => (!isSelect));
  }
 
        return (
         <>
         <li className="ImageGalleryItem" key={item.id} >
         <img src={item.webformatURL} 
         alt={item.tags}
          className="ImageGalleryItem-image"
          onClick={onToggle}/>
      </li>
     { isSelect && (<Modal onClose={onToggle} item={item}/>)}
      </>
  )}
      
  
      
 
export default ImageGallaryItem;