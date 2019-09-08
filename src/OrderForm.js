import React from 'react';

function OrderForm ({ daiPrice }) {
  return (
    <div className="order-form">
      <div className="specs">
        <div className="contract-title">SwanDAI, Dec 20</div>
        <div className="contract-premium">Current Premium</div>
      </div>

      <div className="actions">
        <button className="btn btn-success">Long</button>
      </div>
      <div className="dai-price">DAI/USDC ${daiPrice}</div>
      <div className="ddai-price">DDAI/USDC ${daiPrice}</div>
    </div>
  )
}

export default OrderForm