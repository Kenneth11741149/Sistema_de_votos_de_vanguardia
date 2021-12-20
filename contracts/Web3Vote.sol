// SPDX-License-Identifier: MIT
pragma solidity >=0.5.16 <0.9.0;

contract Web3Vote {
  address public owner;
  uint private votes_yes=0;
  uint private votes_no=0;
  uint private votes_none=0;

  struct Participant {
    address participant_id;
    bool voted;
  }

  modifier restricted() {
    if (msg.sender == owner) _;
  }

  constructor() public{
    owner = msg.sender;
  }

  mapping(address => Participant) public participants;

  function addVoteYes() public returns (bool completed){
    completed = false;
    Participant storage participant = participants[msg.sender];
    if(!participant.voted){
        votes_yes+=1;
        participant.voted = true;
        completed = true;
    }
  }
  function addVoteNo() public returns (bool completed) {
    completed = false;
    Participant storage participant = participants[msg.sender];
    if(!participant.voted){
        votes_no+=1;
        participant.voted = true;
        completed = true;
    }
  }
  function addVoteNone() public returns (bool completed){
    completed = false;
    Participant storage participant = participants[msg.sender];
    if(!participant.voted){
        votes_none+=1;
        participant.voted = true;
        completed = true;
    }
  }

  function getVoteYes() public returns (uint) {
    return votes_yes;
  }

  function getVoteNo() public returns (uint) {
    return votes_no;
  }

  function getVoteNone() public returns (uint) {
    return votes_none;
  }
}
