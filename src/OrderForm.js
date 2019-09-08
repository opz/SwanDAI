import React from 'react';
import { derivativePrice } from './helpers'

function OrderForm ({ daiPrice }) {
  return (
    <div className="order-form">
      <div className="specs">
        <div className="contract-title">SwanDAI, Dec 20</div>
        <div className="contract-premium"></div>
      </div>
      <div className="dai-price">${daiPrice} DAI/USDC </div>
      <div className="ddai-price">${derivativePrice(daiPrice).toFixed(2)} SwanDAI/USDC <span>$+0.02 premium</span></div>
      <div className="actions">
        <button className="btn btn-primary">Buy SwanDAI</button>
      </div>
    </div>
  )
}

export default OrderForm