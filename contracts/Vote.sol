// SPDX-License-Identifier: MIT
pragma solidity >=0.5.16 <0.9.0;

contract Vote {
  address public owner;
  uint private votes_yes;
  uint private votes_no;
  uint private votes_none;

  struct Participant {
    uint id;
    string name;
    string surname;

  }

  modifier restricted() {
    if (msg.sender == owner) _;
  }

  constructor() public{
    owner = msg.sender;
  }

  function addVoteYes() public {
      votes_yes++;  
  }
  function addVoteNo() public {
      votes_no++;  
  }
  function addVoteNone() public {
      votes_none++;  
  }
}
