import React, { useState, useEffect } from "react";
import DonationProcess from "./DonationProcess";
import Disaster from "./Disaster";
import abi from "./utils/CampaignFactory.json";
import { ethers } from "ethers";
import TransactionHistory from "./TransactionHistory";

const BrowseAndSearch = () => {
  const [disasters, setDisasters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [clicked, setclicked] = useState(false);
  const [contractAddress] = useState(
    "0xE223263668035CC6af2BaD8651e433005b740B58"
  );
  const [deployedCampaigns, setDeployedCampaigns] = useState([]);
  const [contractABI] = useState(abi.abi);
  const simulatedDisasters = [];
  const [chosenDisaster, setChosenDisaster] = useState({});
  const handledropdown = async () => {
    const { ethereum } = window;
    try {
      if (ethereum) {
        const provider = new ethers.BrowserProvider(ethereum);
        const signer = await provider.getSigner();
        const CampaignFactory = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
        // const userAddress = ethereum.selectedAddress;

        const campaign = await CampaignFactory.getDeployedCampaigns();
        setDeployedCampaigns(campaign);

        for (let i = 0; i < deployedCampaigns[0].length; i++) {
          simulatedDisasters.push({ id: i + 1, name: deployedCampaigns[0][i] });
        }
        console.log("simulated:");
        console.log(simulatedDisasters);
        setDisasters(simulatedDisasters);
        simulatedDisasters = [];
        console.log(campaign[0]);
        console.log(campaign[1]);
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleDisasterSelect = (selectedDisaster) => {
    const dis = {
      name: selectedDisaster.name,
      address: deployedCampaigns[1][selectedDisaster.id - 1],
    };
    setChosenDisaster(dis);
    console.log(`Selected disaster: ${selectedDisaster.name}`);
    setclicked(true);
  };

  const filteredDisasters = disasters.filter((disaster) =>
    disaster.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <div className="dropdown">
        <button
          className="btn btn-info dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          onClick={handledropdown}
        >
          Browse disasters
        </button>
        <ul className="dropdown-menu dropdown-menu-dark">
          {filteredDisasters.map((disaster) => (
            <li key={disaster.id}>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => handleDisasterSelect(disaster)}
              >
                {disaster.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {clicked ? (
        <div className="container mt-4">
          <Disaster disaster={chosenDisaster} />
          <DonationProcess disaster={chosenDisaster} />
          <TransactionHistory disaster={chosenDisaster} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default BrowseAndSearch;
