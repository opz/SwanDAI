pragma solidity ^0.5.8;

import 'openzeppelin-solidity/contracts/math/SafeMath.sol';
import 'openzeppelin-solidity/contracts/token/ERC20/IERC20.sol';

contract SwanDAI is IERC20 {
    function calcTokenValue() external view returns (uint256) {
    }
}

contract SwanDAISale {
    using SafeMath for uint256;

    IERC20 public usdc;
    IERC20 public swanDAI;
    address public swanDAIHolder;

    constructor (address usdcAddr, address swanDAIAddr, address _swanDAIHolder) public {
        usdc = IERC20(usdcAddr);
        swanDAI = IERC20(swanDAIAddr);
        swanDAIHolder = _swanDAIHolder;
    }

    function purchase(uint256 amount) external {
        usdc.transferFrom(msg.sender, swanDAIHolder, getUSDCPurchaseAmount(amount)); 
        swanDAI.transferFrom(swanDAIHolder, msg.sender, amount);
    }

    function getUSDCPurchaseAmount(uint256 amount) public view returns (uint256) {
        return amount * SwanDAI(address(swanDAI)).calcTokenValue();
    }
}
