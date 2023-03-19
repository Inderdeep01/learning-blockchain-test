const Web3 = require('web3')
const web3 = new Web3('HTTP://127.0.0.1:7545')

web3.eth.getAccounts().then(accounts=>{
    console.log(accounts)
    const transactionObject = {
        from:accounts[0],
        to: accounts[1],
        value: 1000000000000000000,
        gas:1
    }
    
    web3.eth.sendTransaction(transactionObject,(res)=>console.log("Transaction complete",res))
})