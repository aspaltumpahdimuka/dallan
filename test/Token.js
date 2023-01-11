const { ethers } = require("hardhat");
const { expect } = require("chai");

const tokens = (n) => {
   return  ethers.utils.parseUnits(n.toString(), "ether")
}

describe("Token", () => {

    let token


    beforeEach(async() => {
        // fetch token from blockchain
        const Token = await ethers.getContractFactory("Token")
        token = await Token.deploy("Dallan", "DLN", "1000000")
    })

    describe("Deployment", () => {
        const name = "Dallan"
    const symbol = "DLN"
    const decimals = "18"
    const totalSupply = tokens("1000000")

    it("has a name", async() => {
        // check token name is correct
        expect(await token.name()).to.equal(name)
    })

    it("has correct symbol", async() => {
        // check token symbol is correct
        expect(await token.symbol()).to.equal(symbol)
    })

    it("has correct decimals", async() => {
        // check token decimals is correct
        expect(await token.decimals()).to.equal(decimals)
    })

    it("has correct total supply", async() => {
        // check token total suply is correct
        expect(await token.totalSupply()).to.equal(totalSupply)
    })

    
})

    
})
