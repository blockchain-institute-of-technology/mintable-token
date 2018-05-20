pragma solidity ^0.4.23;

import 'zeppelin-solidity/contracts/token/ERC20/MintableToken.sol';

contract BIToken is MintableToken {
    string public name = "BIToken";
    string public symbol = "BIT";
    uint8 public decimals = 18;
}
