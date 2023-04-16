const {bytecode} = require('./usd-bytecode')
const {abi} = require('./usd-abi')
const Web3 = require('web3')
const web3 = new Web3('HTTP://blockchain.interplanetarybank.org')

const account = web3.eth.accounts.privateKeyToAccount('8f2a55949038a9610f50fb23b5883af3b4ecb3c3bb792cbcefbd1542c692be63')

const usd = new web3.eth.Contract(abi)
const deploy = async ()=>{
    const contract = await usd.deploy({
        data: `0x${bytecode}`
    })
    const transactionObject = {
        from:account.address,
        //to: '0xA5FC1D6a75dC53d38FFf512366fc7BA26a6383AA',
        //value: 1000000000000000000,
        //gasPrice:'0x0',
        gas:'2100000',
        data: contract.encodeABI()
    }
    console.log("Signing Txn")
    const signedTx = await web3.eth.accounts.signTransaction(transactionObject,account.privateKey)
    console.log("Sending Txn .......")
    const txReceipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction)
    console.log(txReceipt)
}
deploy()
//console.log(abi);