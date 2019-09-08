const SwanDAISale = artifacts.require("SwanDAISale");

module.exports = function(deployer) {
  deployer.deploy(
    SwanDAISale,
    '0x653424f12486AaC06953Aa66dEdaD99f965FC74c',
    '0x8bFee9015DD5f6e4dcfb758Fb52Fd684151a4564',
    '0x93BbC175D307Af73b3A05c29cE0519656bB4f03C'
  );
};
