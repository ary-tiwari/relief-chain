// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;


contract CampaignFactory {
    string[] public deployedCampaignsN;
    address[] public deployedCampaignsA;

    function createCampaign(
        string memory name,
        address description,
        uint256 goalAmount,
        string memory endDate
    ) public {
        address newCampaign = address(
            new Campaign(msg.sender, name, description, goalAmount, endDate)
        );
        deployedCampaignsN.push(name);
        deployedCampaignsA.push(newCampaign);
    }

    function getDeployedCampaigns()
        public
        view
        returns (string[] memory, address[] memory)
    {
        return (deployedCampaignsN, deployedCampaignsA);
    }
}

contract Campaign {
    struct Donation {
        address donor;
        uint256 amount;
        uint256 timestamp;
    }

    address public manager;
    string public name;
    address public description; // Now used as receiver's address
    uint256 public goalAmount;
    string public endDate;
    uint256 public totalDonations;
    mapping(address => Donation[]) public donationHistory;
    address[] public donors;

    constructor(
        address creator,
        string memory campaignName,
        address receiverAddress,
        uint256 campaignGoal,
        string memory campaignEndDate
    ) {
        manager = creator;
        name = campaignName;
        description = receiverAddress; // Receiver's address
        goalAmount = campaignGoal;
        endDate = campaignEndDate;
    }

    modifier onlyManager() {
        require(
            msg.sender == manager,
            "Only the campaign manager can perform this action"
        );
        _;
    }

    function getGoal() public view returns (uint256) {
        return goalAmount;
    }

    function donate() public payable {
        require(msg.value > 0, "Donation amount must be greater than zero");

        // Transfer the donation amount from the donor to the specified receiver's address
        address payable receiver = payable(address(description));
        receiver.transfer(msg.value);

        Donation memory newDonation;
        newDonation.donor = msg.sender;
        newDonation.amount = msg.value;
        newDonation.timestamp = block.timestamp;

        donationHistory[msg.sender].push(newDonation);
        donors.push(msg.sender);
        totalDonations += msg.value;
    }

    function getTotal() public view returns (uint256) {
        return totalDonations;
    }

    function getDate() public view returns (string memory) {
        return endDate;
    }

    function getDonorsCount() public view returns (uint256) {
        return donors.length;
    }

    function getDonorAtIndex(uint256 index) public view returns (address) {
        require(index < donors.length, "Index out of bounds");
        return donors[index];
    }

    function getTransactionHistory(
        address user
    )
        public
        view
        returns (address[] memory, uint256[] memory, address[] memory)
    {
        uint256 donationCount = donationHistory[user].length;
        address[] memory users = new address[](donationCount);
        uint256[] memory timestamps = new uint256[](donationCount);
        address[] memory receivers = new address[](donationCount);

        for (uint256 i = 0; i < donationCount; i++) {
            users[i] = donationHistory[user][i].donor;
            timestamps[i] = donationHistory[user][i].timestamp;
            receivers[i] = description; // Use the receiver's address
        }

        return (users, timestamps, receivers);
    }
}
