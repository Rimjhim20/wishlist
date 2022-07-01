import React , {useState} from 'react'
import cartCss from '../styles/Cart.module.css'
import Card from "../components/CartCard"
import Image from 'next/image'
import Link from 'next/link'
const Cartpage = () => {
	const initialCount=1
	const[count,setCount]=useState(initialCount)
	return (
		<div>
			<div className={cartCss.contain}>
			  <Link href="/home">
          <a>Home &gt;</a>
          </Link>
		  <Link href="/home">
          <a>Ecommerce Buy &gt;</a>
          </Link>
		  <Link href="/cartpage">
          <a ><b>Cart</b></a>
          </Link>
		  <br/>
			<span className='goback'><i className="fa-solid fa-arrow-left-long goback"></i> Go back</span>
			</div>
			<div className={cartCss.wrapper}>
				<div className={cartCss.project}>
					<div className={cartCss.shop}>
						<div className={cartCss.display}>
						
							<h2>Selected Items</h2>
							<button type="button" className="btn btn-outline-primary"><i className="fa-solid fa-heart redcolor "></i>Add more items from wishlist</button>
						</div>
						<div className={cartCss.box}>
							<Image src="/metal.png"
								height={300}
								width={350} alt="metal"
							/>
							<div className={cartCss.content}>
								<h3 className={cartCss.producttitle}>Aluminium Scrap</h3>
								<p className="unit">Quantity :
								<button onClick = {()=> setCount(count-1)} className={cartCss.btn}>  <i className="fa-solid fa-minus"></i></button>
								<span>{count}</span>
								<button onClick = {()=> setCount(count+1)} className={cartCss.btn}>  <i className="fa-solid fa-plus"></i></button>
								 <small className={cartCss.ton}>Tons</small></p>
								<h4 className={cartCss.price}> 1,39,999</h4>
								<p>Delivered by &nbsp;<span className={cartCss.bold}> 18 june 2022</span></p>

							</div>
							<button className={cartCss.btn2}>Remove</button>
						</div>
						<div className={cartCss.box}>
							<Image src="/metal.png"
								height={300}
								width={350} alt="metal"
							/>
							<div className={cartCss.content}>
								<h3 className={cartCss.producttitle}>Aluminium Scrap</h3>
								<p className="unit">Quantity :
								<button onClick = {()=> setCount(count-1)} className={cartCss.btn}>  <i className="fa-solid fa-minus"></i></button>
								<span>{count}</span>
								<button onClick = {()=> setCount(count+1)} className={cartCss.btn}>  <i className="fa-solid fa-plus"></i></button>
								 <small className={cartCss.ton}>Tons</small></p>
								<h4 className={cartCss.price}> 1,39,999</h4>
								<p>Delivered by &nbsp;<span className={cartCss.bold}> 18 june 2022</span></p>
							</div>
							<button className={cartCss.btn2}>Remove</button>
						</div>
						<div className={cartCss.box}>
							<Image src="/metal.png"
								height={300}
								width={350}  alt="metal"
							/>
							<div className={cartCss.content}>
								<h3 className={cartCss.producttitle}>Aluminium Scrap</h3>
								<p className="unit">Quantity :
								<button onClick = {()=> setCount(count-1)} className={cartCss.btn}>  <i className="fa-solid fa-minus"></i></button>
								<span>{count}</span>
								<button onClick = {()=> setCount(count+1)} className={cartCss.btn}>  <i className="fa-solid fa-plus"></i></button>
								 <small className={cartCss.ton}>Tons</small></p>
								<h4 className={cartCss.price}> 1,39,999</h4>
								<p>Delivered by &nbsp;<span className={cartCss.bold}> 18 june 2022</span></p>
							</div>
							<button className={cartCss.btn2}>Remove</button>
						</div>
					</div>
					

					<div className={cartCss.rightbar}>
						<h2>PRICE DETAILS <small>(3 items)</small></h2>
						<hr />
						<p><span>Total MRP</span> <span>₹1,39,999</span></p>

						<p><span>Convenience Fee</span> <span>₹1,39,999</span></p>

						<p><span>Delivery Fee</span> <span>₹1,39,999</span></p>
						<hr />
						<p><span>Total</span> <span>₹1,39,999</span></p>
						<button className={cartCss.button}>Continue to select address</button>
					</div>
				</div>
			</div>

<div className={cartCss.bottomsection}>
			<h2 className={cartCss.Title}>  Would you like to add any of these :</h2>
			<div className={cartCss.Card}>
				<Card />
				<Card />
			</div>
			</div>
			<div className={cartCss.footersec}>
			<footer className={cartCss.footer}>
				&copy; All Right Reserved @bismillaenterprises. Privacy, Terms of use, Security Overview. 
			</footer>
			</div>
		</div>
	)
}

export default Cartpage