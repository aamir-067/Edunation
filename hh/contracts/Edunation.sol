// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;
contract Edunation {

    enum trxType {
        DEPOSIT,
        WITHDRAW
    }

    struct Trx {
            trxType transectionType;
            string message;
            uint72 amount;
            address performer;
    }

    struct donor {
        string name;
        address account;
        uint72 amount;
        string img;
    }

    event newTransection(address performer, trxType transectionType, uint amount);

    Trx[10] private transections;
    uint8 public trxCount;
    donor public topDonor;
    address immutable public owner;

    constructor(address _owner) {
        owner = _owner;
    }


    function donate(string memory _name, string memory _img, string memory _message) public payable {
        // check if the amount is greater then the top donation

        require(msg.value >= 0.01 ether, "minimum amount to donate is 0.01 eth");

        if(msg.value > topDonor.amount){
            // make this donation a top donation
            donor memory tempDonor = donor(_name, msg.sender, uint72(msg.value), _img);
            topDonor = tempDonor;
        }

        // make a transection and save it.
        addNewTransection(trxType.DEPOSIT, _message, uint72(msg.value),msg.sender);

        // increment the trxCount.
        trxCount = trxCount < 10 ? trxCount + 1 : trxCount;

        // emit event.
        emit newTransection(msg.sender, trxType.DEPOSIT, msg.value);   
    }


    modifier _onlyOwner() {
        require(msg.sender == owner, "only owner can withdraw ethers");
        _;
    }

    function withdraw(uint _amount, string memory _message) public _onlyOwner {
        require(_amount <= availableBalance(), "not enough balance to withdraw");
        // make a transection
        addNewTransection(trxType.WITHDRAW, _message, uint72(_amount) ,msg.sender);


        // increment the trxCount.
        trxCount = trxCount < 10 ? trxCount + 1 : trxCount;
        
        // transferr the amount
        payable(owner).transfer(_amount);

        // emit event
        emit newTransection(msg.sender, trxType.WITHDRAW, _amount);
    }



    function availableBalance() public view returns(uint){
        return address(this).balance;
    }


    function recentTransactions() public view returns(Trx[10] memory){
        return transections;
    }



    function addNewTransection(trxType _type, string memory _message, uint72  _amount, address _performer) internal {
        Trx memory tempTransection = Trx(_type, _message, uint72(_amount),_performer);


        // remove one old transection if the length of the transections array is equals to 10
        if(trxCount == 10){
            for(uint8 i = 1; i < 10; i++){
                transections[i-1] = transections[i]; // shift all items to the left
            }
            // now add the new transection at the last index
            transections[9] = tempTransection; // add the new item
        }else{

            
            transections[trxCount] = tempTransection;
        }
    }
}