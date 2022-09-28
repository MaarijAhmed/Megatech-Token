const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function async() {
  it("Should return the value of approve with error number : 0", async function () {
    const MegaTech = await hre.ethers.getContractFactory("Megatech");
    const megaTech = await MegaTech.deploy();
    await megaTech.deployed();
    let newTxt = await megaTech.approve('0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199', 100)
    newTxt.wait()

    it('should approve and return value to be 0', async function () {
      expect(newTxt.value).to.be("0")
    })



  });
  it("Should Transfer and return error number : 0", async function () {
    const MegaTech = await hre.ethers.getContractFactory("Megatech");
    const megaTech = await MegaTech.deploy();
    await megaTech.deployed();
    let newTxt = await megaTech.transfer('0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199', 100)
    newTxt.wait()

    it('should transfer and return value to be error : 0', async function () {
      expect(newTxt.value).to.be(0)
    })



  });
});
