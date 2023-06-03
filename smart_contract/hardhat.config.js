require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/wPLkCQFvmrAkVUqg-iNjD_erIv6sKFYN',
      accounts: ['57d19047a0e1e20b62f42f12ffc0565cd943fd6c5479478fc918e829f3d4edbe'],
    },
  },
};