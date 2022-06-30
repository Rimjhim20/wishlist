/* eslint-disable react/no-unknown-property */
import React from 'react'

const Filter = () => {
  return (
    <div className="">
    <h1>Filters</h1>
    <div className=" border-box">
    <h3> PRICE</h3>
<div className="form-check">   
<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
<label className="form-check-label" for="flexCheckDefault">₹25,000 - ₹40,000</label>
</div>
<div className="form-check ">
<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
<label className="form-check-label" for="flexCheckDefault">₹25,000 - ₹40,000</label>
</div>
<div className="form-check ">
<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
<label className="form-check-label" for="flexCheckDefault">₹25,000 - ₹40,000</label>
</div>
<div className="form-check ">
<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
<label className="form-check-label" for="flexCheckDefault">₹25,000 - ₹40,000</label>
</div>
<hr/>
<h3> CUSTOMER RATING</h3>
<div className="form-check">   
<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
<label className="form-check-label" for="flexCheckDefault">4★ &above</label>
</div>
<div className="form-check">   
<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
<label className="form-check-label" for="flexCheckDefault">3★ &above</label>
</div>
<div className="form-check">   
<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
<label className="form-check-label" for="flexCheckDefault">2★ &above</label>
</div>
<div className="form-check">   
<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
<label className="form-check-label" for="flexCheckDefault">1★ &above</label>
</div>
<hr/>
<h3> AVAILABILITY</h3>
<div className="form-check">   
<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
<label className="form-check-label" for="flexCheckDefault">Exclude out of stock</label>
</div>
<hr/>
<h3> ACCESSIBILITY</h3>
<div className="form-check">   
<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
<label className="form-check-label" for="flexCheckDefault">Show only products available to your location</label>
</div>
</div>
</div>
  )
}

export default Filter