const abi = require('./abi')
const Web3 = require('web3')
const web3 = new Web3('http://blockchain.interplanetarybank.org')
const contractAddr = '0x4261D524bc701dA4AC49339e5F8b299977045eA5'

//const account = web3.eth.accounts.privateKeyToAccount('8f2a55949038a9610f50fb23b5883af3b4ecb3c3bb792cbcefbd1542c692be63')

//const functionAbi = abi.find(x=>x.name==='balanceOf')

const inr = new web3.eth.Contract(abi,contractAddr)
/* const interact = async()=>{
    const functionData = inr.methods.balanceOf('0xA5FC1D6a75dC53d38FFf512366fc7BA26a6383AA').encodeABI()
    const transactionObject = {
        from:account.address,
        to: contractAddr,
        //value: 1000000000000000000,
        //gasPrice:'0x0',
        gas:'2100000',
        data: functionData
    }
    console.log("Signing Txn")
    const signedTx = await web3.eth.accounts.signTransaction(transactionObject,account.privateKey)
    console.log("Sending Txn .......")
    const txReceipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction)
    console.log(txReceipt)
    const output = web3.eth.abi.decodeParameters(functionAbi.outputs,txReceipt.logs[0].data)
    console.log(output)
} */
//interact()
inr.methods.balanceOf('0xA5FC1D6a75dC53d38FFf512366fc7BA26a6383AA').call().then(res=>console.log(res/1000000000000000000))