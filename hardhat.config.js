require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.2",
  defaultNetwork: "bsc",
  networks: {
    hardhat: {},
    bsc: {
      url: "https://bsctestapi.terminet.io/rpc",
      accounts: ["59ad855a0ce2b8ea71811058f01cce3c921dccda5d896156d5680b23349fd48f"],
    }
  },
   etherscan: {
     apiKey: "XHZIDVP1VGEQM3Q2ZW56A2Y8VI3D6JHYW8"
   }
};
