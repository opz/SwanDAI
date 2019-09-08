import React, { Component } from 'react';
import { swanAbi, swanAddress } from './swanDAI';
import { derivativePrice } from './helpers'
import SwanDAISale from './contracts/SwanDAISale.json';
import getWeb3 from './utils/getWeb3';

const erc20ABI = [
  {
    "constant": false,
    "inputs": [
      {
        "name": "spender",
        "type": "address"
      },
      {
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

class OrderForm extends Component {
  state = { web3: null, accounts: null, contract: null, amount: 0, swanDai: 0 };

  componentDidMount = async () => {
    try {
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();

      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SwanDAISale.networks[networkId];
      const contract = new web3.eth.Contract(
        SwanDAISale.abi,
        deployedNetwork && deployedNetwork.address,
      );

      const swanDai = new web3.eth.Contract(swanAbi, swanAddress);
      const swanDaiTknBits = await swanDai.methods.balanceOf(accounts[0]).call();
      const swanDaiTkns = web3.utils.fromWei(swanDaiTknBits, 'ether');

      this.setState({ web3, accounts, contract, swanDai: swanDaiTkns });
    } catch (error) {
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.error(error);
    }
  };

  onClick = async event => {
    const { web3, accounts, contract, amount } = this.state;
    const usdc = new web3.eth.Contract(erc20ABI, '0x5592EC0cfb4dbc12D3aB100b257153436a1f0FEa');
    //const usdc = new web3.eth.Contract(erc20ABI, '0x653424f12486AaC06953Aa66dEdaD99f965FC74c');
    await usdc.methods.approve(contract.options.address, web3.utils.toWei(amount, 'ether'))
      .send({ from: accounts[0] });
    await contract.methods.purchase(amount).send({ from: accounts[0] });
  };

  onChange = event => this.setState({ amount: event.target.value });

  render() {
    return (
      <div className="order-form">
        <div className="specs">
          <div className="contract-title">SwanDAI, Sep 30</div>
          <div className="contract-premium"></div>
        </div>
        <div className="dai-price">${this.props.daiPrice} DAI/USDC </div>
        <div className="ddai-price">${derivativePrice(this.props.daiPrice).toFixed(2)} SwanDAI/USDC <span>$+0.02 premium</span></div>
        <div>Long: {this.state.swanDai} SWANDAI</div>
        <div className="actions input-group">
          <input type="text" className="form-control" value={this.state.amount} name="amount" onChange={this.onChange} />
          <div className="input-group-append">
            <button className="btn btn-primary" onClick={this.onClick}>Buy SwanDAI</button>
          </div>
        </div>
      </div>
    )
  }
}

export default OrderForm
