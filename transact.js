const Web3 = require('web3')
const web3 = new Web3('HTTP://blockchain.interplanetarybank.org')

async function createAccount(pass){
    const account = await web3.eth.accounts.create()
    console.log(account)
}
createAccount("password")