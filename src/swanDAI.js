export const abi = [
  {
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "spender",
        "type": "address"
      },
      {
        "name": "value",
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
  },
  {
    "constant": true,
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "sender",
        "type": "address"
      },
      {
        "name": "recipient",
        "type": "address"
      },
      {
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "name": "",
        "type": "uint8"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "spender",
        "type": "address"
      },
      {
        "name": "addedValue",
        "type": "uint256"
      }
    ],
    "name": "increaseAllowance",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "derivativeStorage",
    "outputs": [
      {
        "components": [
          {
            "name": "defaultPenalty",
            "type": "uint256"
          },
          {
            "name": "supportedMove",
            "type": "uint256"
          },
          {
            "name": "disputeDeposit",
            "type": "uint256"
          },
          {
            "name": "fixedFeePerSecond",
            "type": "uint256"
          },
          {
            "name": "withdrawLimit",
            "type": "uint256"
          },
          {
            "name": "product",
            "type": "bytes32"
          },
          {
            "name": "returnType",
            "type": "uint8"
          },
          {
            "name": "initialTokenUnderlyingRatio",
            "type": "uint256"
          },
          {
            "name": "creationTime",
            "type": "uint256"
          },
          {
            "name": "symbol",
            "type": "string"
          }
        ],
        "name": "fixedParameters",
        "type": "tuple"
      },
      {
        "components": [
          {
            "name": "sponsor",
            "type": "address"
          },
          {
            "name": "apDelegate",
            "type": "address"
          },
          {
            "name": "finder",
            "type": "address"
          },
          {
            "name": "returnCalculator",
            "type": "address"
          },
          {
            "name": "marginCurrency",
            "type": "address"
          }
        ],
        "name": "externalAddresses",
        "type": "tuple"
      },
      {
        "name": "shortBalance",
        "type": "int256"
      },
      {
        "name": "longBalance",
        "type": "int256"
      },
      {
        "name": "state",
        "type": "uint8"
      },
      {
        "name": "endTime",
        "type": "uint256"
      },
      {
        "components": [
          {
            "name": "underlyingPrice",
            "type": "int256"
          },
          {
            "name": "tokenPrice",
            "type": "int256"
          },
          {
            "name": "time",
            "type": "uint256"
          }
        ],
        "name": "referenceTokenState",
        "type": "tuple"
      },
      {
        "components": [
          {
            "name": "underlyingPrice",
            "type": "int256"
          },
          {
            "name": "tokenPrice",
            "type": "int256"
          },
          {
            "name": "time",
            "type": "uint256"
          }
        ],
        "name": "currentTokenState",
        "type": "tuple"
      },
      {
        "name": "nav",
        "type": "int256"
      },
      {
        "components": [
          {
            "name": "disputedNav",
            "type": "int256"
          },
          {
            "name": "deposit",
            "type": "uint256"
          }
        ],
        "name": "disputeInfo",
        "type": "tuple"
      },
      {
        "name": "defaultPenaltyAmount",
        "type": "int256"
      },
      {
        "components": [
          {
            "name": "startTime",
            "type": "uint256"
          },
          {
            "name": "remainingWithdrawal",
            "type": "uint256"
          }
        ],
        "name": "withdrawThrottle",
        "type": "tuple"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "account",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "spender",
        "type": "address"
      },
      {
        "name": "subtractedValue",
        "type": "uint256"
      }
    ],
    "name": "decreaseAllowance",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "recipient",
        "type": "address"
      },
      {
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "owner",
        "type": "address"
      },
      {
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "name": "sponsor",
            "type": "address"
          },
          {
            "name": "finderAddress",
            "type": "address"
          },
          {
            "name": "defaultPenalty",
            "type": "uint256"
          },
          {
            "name": "supportedMove",
            "type": "uint256"
          },
          {
            "name": "product",
            "type": "bytes32"
          },
          {
            "name": "fixedYearlyFee",
            "type": "uint256"
          },
          {
            "name": "disputeDeposit",
            "type": "uint256"
          },
          {
            "name": "returnCalculator",
            "type": "address"
          },
          {
            "name": "startingTokenPrice",
            "type": "uint256"
          },
          {
            "name": "expiry",
            "type": "uint256"
          },
          {
            "name": "marginCurrency",
            "type": "address"
          },
          {
            "name": "withdrawLimit",
            "type": "uint256"
          },
          {
            "name": "returnType",
            "type": "uint8"
          },
          {
            "name": "startingUnderlyingPrice",
            "type": "uint256"
          },
          {
            "name": "creationTime",
            "type": "uint256"
          }
        ],
        "name": "params",
        "type": "tuple"
      },
      {
        "name": "_name",
        "type": "string"
      },
      {
        "name": "_symbol",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "symbol",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "newNav",
        "type": "int256"
      },
      {
        "indexed": false,
        "name": "newTokenPrice",
        "type": "int256"
      }
    ],
    "name": "NavUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "symbol",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "defaultTime",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "defaultNav",
        "type": "int256"
      }
    ],
    "name": "Default",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "symbol",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "settleTime",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "finalNav",
        "type": "int256"
      }
    ],
    "name": "Settled",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "symbol",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "expiryTime",
        "type": "uint256"
      }
    ],
    "name": "Expired",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "symbol",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "timeDisputed",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "navDisputed",
        "type": "int256"
      }
    ],
    "name": "Disputed",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "symbol",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "shutdownTime",
        "type": "uint256"
      }
    ],
    "name": "EmergencyShutdownTransition",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "symbol",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "numTokensCreated",
        "type": "uint256"
      }
    ],
    "name": "TokensCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "symbol",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "numTokensRedeemed",
        "type": "uint256"
      }
    ],
    "name": "TokensRedeemed",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "symbol",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "Deposited",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "symbol",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "Withdrawal",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "spender",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "marginForPurchase",
        "type": "uint256"
      },
      {
        "name": "tokensToPurchase",
        "type": "uint256"
      }
    ],
    "name": "createTokens",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "marginForPurchase",
        "type": "uint256"
      },
      {
        "name": "tokensToPurchase",
        "type": "uint256"
      }
    ],
    "name": "depositAndCreateTokens",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "tokensToRedeem",
        "type": "uint256"
      }
    ],
    "name": "redeemTokens",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "depositMargin",
        "type": "uint256"
      }
    ],
    "name": "dispute",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "withdraw",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "remargin",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "acceptPriceAndSettle",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "apDelegate",
        "type": "address"
      }
    ],
    "name": "setApDelegate",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "emergencyShutdown",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "settle",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "amountToDeposit",
        "type": "uint256"
      }
    ],
    "name": "deposit",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "erc20Address",
        "type": "address"
      },
      {
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "withdrawUnexpectedErc20",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "burn",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "to",
        "type": "address"
      },
      {
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "mint",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "calcNAV",
    "outputs": [
      {
        "name": "navNew",
        "type": "int256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "calcTokenValue",
    "outputs": [
      {
        "name": "newTokenValue",
        "type": "int256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "calcShortMarginBalance",
    "outputs": [
      {
        "name": "newShortMarginBalance",
        "type": "int256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "calcExcessMargin",
    "outputs": [
      {
        "name": "excessMargin",
        "type": "int256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getCurrentRequiredMargin",
    "outputs": [
      {
        "name": "requiredMargin",
        "type": "int256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "canBeSettled",
    "outputs": [
      {
        "name": "canContractBeSettled",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getUpdatedUnderlyingPrice",
    "outputs": [
      {
        "name": "underlyingPrice",
        "type": "int256"
      },
      {
        "name": "time",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];

export const address = '0xB4D519bF26c10C3b57765D59e61a8fFd9b44a0b5';
