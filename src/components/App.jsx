import React, { Component } from "react";
import Searchbar from './Searchbar';
import ImageGallary from './ImageGallery';
import imagesApi from './ImageApi'
import Loader  from "./Loader";

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export class App extends Component {
  state ={
    formValue : '',
    image: [],
    error: null,
    status: Status.IDLE,
    page: 1,
 }

  componentDidUpdate(prevProps, prevState) {
  const {formValue, page, image} = this.state;
  if(prevState.formValue!==formValue || prevState.page!== page){
  this.setState({ status: Status.PENDING });
     imagesApi
     .fetchImages(formValue,page)
     .then(r =>{
    
    this.setState(prevState =>({
      image:[...prevState.image,...r.hits],
      status: Status.RESOLVED
    }))
  
    if (page * 12>=r.totalHits){
      this.setState(prevState=>({ status: Status.IDLE }))
      return alert('It`s all');
     
       }

  })
  .catch(error => this.setState({ error, status: Status.REJECTED  }))
  
}

  }

  formSubmitHendler =data=> {
   
      this.setState ({
        formValue: data.value,
        page:1,
        image:[],
        error: null,
        status: Status.IDLE,
       })
     }

  onLoadMore = ()=> {
   this.setState(({ page }) => {
      return { page: (page += 1) };
    });
  }

render () {
  const {status, image,} = this.state;
  const {formSubmitHendler, imageHendler, onLoadMore} = this;
  return (
    <div className="App" >
    <Searchbar onSubmit={formSubmitHendler} />
    {status === 'pending'&&
      (<Loader/>)
    }
    <ImageGallary images={image} onImg={imageHendler} />
    {image.length > 0 && status === 'resolved' && 
      (<button onClick = {onLoadMore} className="Button">Load more</button>
      )
    }
   </div>
  );
}

 
};
