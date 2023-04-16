const Web3 = require('web3')
const web3 = new Web3('HTTP://blockchain.interplanetarybank.org')

//web3.eth.getAccounts().then(accounts=>{
  //  console.log(accounts)
    /* const transactionObject = {
        from:'0x1507ba18c6a1dbf4a3713b96fb0531f11b53110a',
        to: '0xA5FC1D6a75dC53d38FFf512366fc7BA26a6383AA',
        value: 100000000000000000,
        gas:1
    } */
    
    //web3.eth.sendTransaction(transactionObject,(res)=>console.log("Transaction complete",res))
//})


const account = web3.eth.accounts.privateKeyToAccount('8f2a55949038a9610f50fb23b5883af3b4ecb3c3bb792cbcefbd1542c692be63')

function transact(account){
    console.log(account)
    const transactionObject = {
        from:account.address,
        to: '0xA5FC1D6a75dC53d38FFf512366fc7BA26a6383AA',
        value: 1000000000000000000,
        //gasPrice:'0x0',
        gas:'21000'
    }
    return new Promise(async (resolve,reject)=> {
        console.log("Signing Txn")
        const signedTx = await web3.eth.accounts.signTransaction(transactionObject,account.privateKey)
        console.log("Sending Txn .......")
        const txReceipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction)
        console.log(txReceipt)
        if(!txReceipt)
            reject(txReceipt)
        else
            resolve(txReceipt)
    })
    
}

web3.eth.getBalance(account.address).then(console.log)

transact(account).then(console.log)
