import React from 'react'
import catcss from "../styles/CategoryBar.module.css"
const wishlistbar = () => {
  return (
    <>
    <div className={catcss.container}>
    <div className={catcss.dropdown}>
      <button className={catcss.dropbtn}>All Categories
        <i className="fa fa-caret-down"></i>
      </button>
      <div className={catcss.dropdowncontent}>
        <a href="/AllCategory">STEEL</a>
        <a href="/AllCategory">ALUMINIUM</a>
        <a href="/AllCategory">COPPER</a>
        <a href="/AllCategory">AUTOPARTS</a>
      </div>
    </div>
    <div className={catcss.list}>
    <a href="/AllCategory">STEEL &emsp; |</a><a href="/AllCategory">ALUMINIUM  
    &emsp; |</a><a href="/AllCategory">COPPER &emsp; |</a><a href="/AllCategory">AUTOPARTS </a>
    </div>
    </div>
    </>

  )
}

export default wishlistbar