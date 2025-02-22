import React, { useState, useEffect } from 'react';
import Link from 'next/link';


import { useStateContext } from '../context/StateContext';


const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
         
        </p>
        <h2>You have cancelled your order!!!</h2>
       
        <p className="description">
          If you have any questions, please email
          <a className="email" href="mailto:saheedsh2@gmail.com">
            saheedsh2@gmail.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Success