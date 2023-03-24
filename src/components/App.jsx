import React, { useState, useEffect } from "react";
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

export const App=()=> {
  const [formValue, setFormValue] = useState('');
  const [image, setImage] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const [page, setPage] = useState(1);


  useEffect(()=>{
    if (!formValue) {
      return;
  }

setStatus(Status.PENDING);

     imagesApi
     .fetchImages(formValue,page)
     .then(r =>{
     setImage((prev) =>
      [...prev,...r.hits]
    )
     setStatus(Status.RESOLVED)
   
    if (page * 12>=r.totalHits){
      setStatus(Status.IDLE )
      return alert('It`s all');
          }

  })
  .catch(error => {
    setError(error)
    setStatus(Status.REJECTED)
  }) 
}, [formValue, page]);


 const formSubmitHendler =data=> {
   setFormValue(data)
      // this.setState ({
      //   formValue: data.value,
      //   page:1,
      //   image:[],
      //   error: null,
      //   status: Status.IDLE,
      //  })
      console.log(data);
     }

 const onLoadMore = ()=> {
   setPage(( page ) => {
      return page += 1
    });
  }


  return (
    <div className="App" >
    <Searchbar onSubmit={formSubmitHendler} />
    {status === Status.PENDING &&
      (<Loader/>)
    }
    <ImageGallary images={image}  />
    {image.length > 0 && status === Status.RESOLVED && 
      (<button onClick = {onLoadMore} className="Button">Load more</button>
      )
    }
   </div>
  ); 
}

 

