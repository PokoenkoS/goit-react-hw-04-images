import React from "react";
import ImageGallaryItem from "./ImageGalleryItem";
import PropTypes from 'prop-types'
import  "./styles.css"

const ImageGallary = ({images})=>{
 
    return(
        <ul className="ImageGallery">
            {images.map(item => <ImageGallaryItem key = {item.id} item={item}/>)}
  
 
</ul>
    )
    
}

export default ImageGallary;


  ImageGallary.propTypes = {
    imagesData: PropTypes.arrayOf(
      PropTypes.shape({
        // id: PropTypes.number.isRequired,
        tags: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
        webformatURL: PropTypes.string.isRequired,
      })
    ).isRequired,
  }.isRequired;
  