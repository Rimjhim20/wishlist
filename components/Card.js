import React from 'react'
import Image from 'next/image'
import cardCss from '../styles/Card.module.css'
const Card = () => {
  return (
    <div>
<ul className={cardCss.cards}>
    <li className={cardCss.cards_item}>
      <div className={cardCss.card}>
      <div className={cardCss.Product}>
                <Image src="/metal.png" alt="steel" className={cardCss.cardimg}
                  width={400}
                  height={200} />
                <div className={cardCss.bottom_right_detail}>
                  <small>
                    4.9 <i className="bi bi-star-fill"></i> (1349)
                  </small>
                </div>
               
              </div>
              <i className="fa-solid fa-ellipsis"></i>
              <div className={cardCss.Product_detail}>
                <div className={cardCss.Product_Title}>
                  <h3>Aluminum Scrap</h3>
                  <p className={cardCss.wishlist}> <i className="fa-solid fa-heart "></i></p>
                </div>
                <div className={cardCss.Product_Description}>
                  <small>Recycled Aluminium scrap from blast furnace.</small>
                </div>
                <ul className={`${cardCss.Product_Quantity} ${cardCss.display}`}>
                  <li>1 Ton <small>(min order)</small></li>
                  <li className={cardCss.Product_Price}>
                    ₹ 1,39,999
                  </li>
                </ul>
              </div>

      </div>
    </li>
    
     <li className={cardCss.cards_item}>
      <div className={cardCss.card}>
      <div className={cardCss.Product}>
                <Image src="/metal.png" alt="steel" className={cardCss.cardimg}
                  width={400}
                  height={200} />
                <div className={cardCss.bottom_right_detail}>
                  <small>
                    4.9 <i className="bi bi-star-fill"></i> (1349)
                  </small>
                </div>
              </div>
               <i className="fa-solid fa-ellipsis"></i>
              <div className={cardCss.Product_detail}>
                <div className={cardCss.Product_Title}>
                  <h3>Aluminum Scrap</h3>
                  <p className={cardCss.wishlist}> <i className="fa-solid fa-heart "></i></p>
                </div>
                <div className={cardCss.Product_Description}>
                  <small>Recycled Aluminium scrap from blast furnace.</small>
                </div>
                <ul className={`${cardCss.Product_Quantity} ${cardCss.display}`}>
                  <li>1 Ton <small>(min order)</small></li>
                  <li className={cardCss.Product_Price}>
                    ₹ 1,39,999
                  </li>
                </ul>
              </div>

      </div>
    </li>
     <li className={cardCss.cards_item}>
      <div className={cardCss.card}>
      <div className={cardCss.Product}>
                <Image src="/metal.png" alt="steel" className={cardCss.cardimg}
                  width={400}
                  height={200} />
                <div className={cardCss.bottom_right_detail}>
                  <small>
                    4.9 <i className="bi bi-star-fill"></i> (1349)
                  </small>
                </div>
              </div>
               <i className="fa-solid fa-ellipsis"></i>
              <div className={cardCss.Product_detail}>
                <div className={cardCss.Product_Title}>
                  <h3>Aluminum Scrap</h3>
                  <p className={cardCss.wishlist}> <i className="fa-solid fa-heart "></i></p>
                </div>
                <div className={cardCss.Product_Description}>
                  <small>Recycled Aluminium scrap from blast furnace.</small>
                </div>
                <ul className={`${cardCss.Product_Quantity} ${cardCss.display}`}>
                  <li>1 Ton <small>(min order)</small></li>
                  <li className={cardCss.Product_Price}>
                    ₹ 1,39,999
                  </li>
                </ul>
              </div>

      </div>
    </li>
  </ul>
    </div>
  )
}

export default Card