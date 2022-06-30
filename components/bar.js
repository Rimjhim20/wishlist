import React from 'react'
import catcss from "../styles/CategoryBar.module.css"
const wishlistbar = () => {
  return (
    <>
    <div className={catcss.dropdown}>
      <button className={catcss.dropbtn}>All Categories
        <i className="fa fa-caret-down"></i>
      </button>
      <div className={catcss.dropdowncontent}>
        <a href="#">STEEL</a>
        <a href="#">ALUMINIUM</a>
        <a href="#">COPPER</a>
        <a href="#">AUTOPARTS</a>
      </div>
    </div>
    <div className={catcss.list}>
    <a href="#">STEEL &emsp; |</a><a href="#">ALUMINIUM  
    &emsp; |</a><a href="#">COPPER &emsp; |</a><a href="#">AUTOPARTS </a>
    </div>
    </>

  )
}

export default wishlistbar