const Web3 = require('web3')
const web3 = new Web3('HTTP://127.0.0.1:7545')

const account = web3.eth.accounts.privateKeyToAccount('0x66c984f093ff28682cefcf3f47e8b6be149c2cee812b6cb0cb53fa9278df90f0')

const transactionObject = {
    from:account.address,
    to: '0xA6bf402b9c8f0BDC3ff075959E12bD11BCB13628',
    value: 1000000000000000000
}

web3.eth.sendTransaction(transactionObject,(res)=>console.log("Transaction complete",res))