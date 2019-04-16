const Bitcoin = require('bitcoinjs-lib');
const EC = require('elliptic').ec;
const generatorPoint = new EC('secp256k1').g;
const keccak256 = require('js-sha3').keccak256;

function chartopk(chars) {
  for(var i=0,pk='';i<chars.length;i++) {
    pk+=parseInt(chars[i].charCodeAt(0),10).toString(16);
  }

  return pk;
}

function genEth(givenPrivateKey) {
    var pubKeyCoordinates = generatorPoint.mul(givenPrivateKey);

    var x = pubKeyCoordinates.getX().toString('hex',64);
    var y = pubKeyCoordinates.getY().toString('hex',64);
    var publicKey = x + y;

    var hashOfPublicKey = keccak256(new Uint8Array(publicKey.match(/[\da-f]{2}/gi).map(function (h) {
      return parseInt(h, 16)
    })));

    return '0x'+hashOfPublicKey.substr(-40);
}

function genBtc(givenPrivateKey) {
    var key = Bitcoin.ECKey(givenPrivateKey);
    return {
        wif: key.toWif(),
        address : key.getPub().getAddress(),
    }
}

module.exports.hanwallet = {chartopk:chartopk,genEth:genEth,genBtc:genBtc};