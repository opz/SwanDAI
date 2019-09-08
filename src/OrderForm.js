import React, { useEffect } from 'react';
import { useWeb3Context } from 'web3-react';
import { abi, address } from './swanDAI';
import { derivativePrice } from './helpers'
import SwanDAISale from './contracts/SwanDAISale.json';

async function buySwanDAI(context) {
  const instance = await context.library.eth.Contract(abi, address);
}

function OrderForm ({ daiPrice }) {
  const context = useWeb3Context();

  useEffect(() => {
    context.setFirstValidConnector(['MetaMask', 'Infura']);
  });

  if (context.active) {
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
  } else {
    return <></>;
  }
}

export default OrderForm
