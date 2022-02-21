const Web3 = require('web3')
var web3 = new Web3('HTTP://127.0.0.1:7545')
const abi = require('./BuddyTestABI.json')
const contractAddress = '0x83d060500B557144080404a3e5042a045A91e0cB'

const deployedContract = new web3.eth.Contract(abi, contractAddress)

const txObject = {
    from: '0x7476F1E508e1b1210a572F178Fd06d7270A9a8C0',
    gas: 200000
}

const mintNextToken = () => deployedContract.methods.safeMint('0x7476F1E508e1b1210a572F178Fd06d7270A9a8C0', 'holyshitthebuttonworks').send(txObject, function (err, transactionHash) {
    console.log(transactionHash);
});

//mintNextToken();