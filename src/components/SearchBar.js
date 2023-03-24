import React from "react";
import { useState } from "react";
import { BsSearch} from "@react-icons/all-files/bs/BsSearch";
import  "./styles.css"



const Searchbar =({onSubmit})=> {
const [value, setValue] = useState('');

const handleChange = e => setValue(e.currentTarget.value);
   
const handleSubmit = e => {
    e.preventDefault();
    if(value.trim() ===""){
        return alert('Введите название картинки')
    }
    onSubmit(value);
    setValue("")
  }

  return (
<header className="Searchbar">
  <form onSubmit={handleSubmit} className="SearchForm">
    <button type="submit" className="SearchForm-button">< BsSearch/>
      <span className="SearchForm-button-label ">Search</span>
    </button>

    <input
      className="SearchForm-input "
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      onChange={handleChange}
    />
  </form>
</header>
        )
    }


export default Searchbar