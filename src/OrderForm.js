import React, { useEffect } from 'react';
import { useWeb3Context } from 'web3-react';
import { abi, address } from './swanDAI';

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
          <div className="contract-premium">Current Premium</div>
        </div>

        <div className="actions">
          <button className="btn btn-success">Long</button>
        </div>
        <div className="dai-price">DAI/USDC ${daiPrice}</div>
        <div className="ddai-price">DDAI/USDC ${daiPrice}</div>
      </div>
    )
  } else {
    return <></>;
  }
}

export default OrderForm
