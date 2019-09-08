const SwanDAISale = artifacts.require("SwanDAISale");

module.exports = function(deployer) {
  deployer.deploy(
    SwanDAISale,
    '0x5592EC0cfb4dbc12D3aB100b257153436a1f0FEa',
    //'0x653424f12486AaC06953Aa66dEdaD99f965FC74c',
    '0x296A3acf6D0DC63210b2830936993A4b69481884',
    '0x93BbC175D307Af73b3A05c29cE0519656bB4f03C'
  );
};
