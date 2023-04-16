const Web3 = require('web3');

async function getTransactionCount(web3, walletAddress) {
  try {
    const transactionCount = await web3.eth.getTransactionCount(walletAddress);
    return transactionCount;
  } catch (error) {
    console.error('Error fetching transaction count:', error.message);
    return 0;
  }
}

async function getTransactionsByAddress(web3, walletAddress) {
  try {
    const transactionCount = await getTransactionCount(web3, walletAddress);
    const getTransactionPromises = [];

    for (let i = 0; i < transactionCount; i++) {
      getTransactionPromises.push(web3.eth.getTransactionFromBlock(walletAddress, i));
    }

    const transactions = await Promise.all(getTransactionPromises);

    return transactions.filter((tx) => tx !== null);
  } catch (error) {
    console.error('Error fetching transactions:', error.message);
    return [];
  }
}

const rpcUrl = 'http://blockchain.interplanetarybank.org'; // Replace with your private network's RPC URL
const walletAddress = '0xA5FC1D6a75dC53d38FFf512366fc7BA26a6383AA'; // Replace with the wallet address you want to fetch transactions for

const web3 = new Web3(new Web3.providers.HttpProvider(rpcUrl));

getTransactionsByAddress(web3, walletAddress)
  .then((transactions) => {
    console.log(`Transactions for address ${walletAddress}:`);
    transactions.forEach((tx, index) => {
      console.log(`Transaction #${index + 1}:`);
      console.log(`  Hash: ${tx.hash}`);
      console.log(`  Block Number: ${tx.blockNumber}`);
      console.log(`  From: ${tx.from}`);
      console.log(`  To: ${tx.to}`);
      console.log(`  Value: ${web3.utils.fromWei(tx.value, 'ether')} Ether`);
      console.log(`  Gas Price: ${web3.utils.fromWei(tx.gasPrice, 'gwei')} Gwei`);
      console.log('---');
    });
  })
  .catch((error) => {
    console.error('Error fetching transactions:', error.message);
  });
