// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;
contract Edunation {

    enum trxType {
        DEPOSIT,
        WITHDRAW
    }

    struct Trx {
            trxType transectionType;
            string massage;
            address performer;
    }

    struct donor {
        string name;
        address account;
        uint amount;
        string img;
    }

    event trarnsection(address performer, trxType transectionType, uint amount);


    Trx[10] transections;
    donor topDonor;
    address owner;

    constructor(address _owner) {
        owner = _owner;
    }




    function donate(string memory _name, string memory _img, uint _amount) public {
        
    }


    function withdraw(uint amount) public {

    }


    function availabeBalance() public{}


    function addNewTransection() public {}
}
