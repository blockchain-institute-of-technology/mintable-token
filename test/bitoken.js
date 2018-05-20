const BIToken = artifacts.require('BIToken');
const assert = require('assert');

contract('BIToken', function(accounts) {

  it('an account should start with zero tokens', async function() {

    const recipient = accounts[2];

    let token = await BIToken.deployed();

    let balance = parseFloat((await token.balanceOf(recipient)).toString());

    assert.strictEqual(balance, 0);

  });

  it('mint should put 9000 tokens in the second account', async function() {

    const amountToMint = 9000;

    const recipient = accounts[2];

    let token = await BIToken.deployed();

    let startingBalance = parseFloat((await token.balanceOf(recipient)).toString());

    assert.strictEqual(startingBalance, 0);

    await token.mint(recipient, amountToMint);

    let newBalance = parseFloat((await token.balanceOf(recipient)).toString());

    assert.strictEqual(newBalance, amountToMint);

  });

  it('mint should update the total supply', async function() {
    const amountToMint = 8888;

    let token = await BIToken.deployed();

    const startingSupply = parseFloat((await token.totalSupply()).toString());

    token.mint(accounts[2], amountToMint);

    const newSupply = parseFloat((await token.totalSupply()).toString());

    assert.strictEqual(newSupply, startingSupply + amountToMint); 
  });

});

