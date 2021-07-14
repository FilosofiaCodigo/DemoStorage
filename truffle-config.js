module.exports = {
  contracts_build_directory: "./client/contracts",
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },
  },
  compilers: {
    solc: {
      version: "0.8.5",    // Fetch exact version from solc-bin (default: truffle's version)
    }
  },
  db: {
    enabled: false
  }
};