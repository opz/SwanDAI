import React from 'react'
import Web3 from 'web3';
import Web3Provider, { Connectors } from 'web3-react';

import OrderForm from './OrderForm'
import HistoricalData from './HistoricalData'
import Model from './Model'
import { initResponsive, derivativePrice } from './helpers'

import './App.scss'

const data = require('./data.js').map(d => {
  return {
    price: d[3],
    derivative: derivativePrice(d[3]),
    timestamp: d[0] * 1000
  }
}).slice(0, 30 * 4)

const daiPrice = 1.015
const ddaiPrice = derivativePrice(daiPrice)

const { InjectedConnector, NetworkOnlyConnector } = Connectors;
const MetaMask = new InjectedConnector({ supportedNetworks: [4] });
const Infura = new NetworkOnlyConnector({
  providerURL: 'https://rinkeby.infura.io/v3/e8d0916e2d8f4a57b5dd4545bd33b982'
});
const connectors = { MetaMask, Infura };

function App() {
  return (
    <Web3Provider
      connectors={connectors}
      libraryName='web3.js'
      web3Api={Web3}
    >
      <div className="App">
        <header>
          <img height="40" width="50" src="./SwanDAI.png" /> SwanDAI <span>by WIII</span>
        </header>
        <div className="container-fluid body">
          <div className="row">
            <div className="col-sm-4">
              <OrderForm daiPrice={daiPrice} />
              <Model data={data} />
            </div>
            <div className="col-sm-8">
              <HistoricalData data={data} />
            </div>
            <div className="col-sm-10 offset-sm-1">
              <div className="video">
                <video height="600" controls>
                  <source src="viz.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Web3Provider>
  );
}

export default App;
