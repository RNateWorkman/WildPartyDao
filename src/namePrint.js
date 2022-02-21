const Web3 = require('web3')
var web3 = new Web3('HTTP://127.0.0.1:7545')
const fs = require('fs')
const abi = require('./BuddyTestABI.json')
const address = '0x83d060500B557144080404a3e5042a045A91e0cB'

deployedContract = new web3.eth.Contract(abi, address)

const printTheName = () => deployedContract.methods.name().call().then(function (result) {
    console.log(result);
})

module.exports = printTheName