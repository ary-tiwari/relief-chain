import React, { useState } from "react";
import { ethers } from "ethers";

import abi from "./utils/CampaignFactory.json";
const CampaignCreation = () => {
  const [campaignName, setCampaignName] = useState("");
  const [campaignDescription, setCampaignDescription] = useState("");
  const [campaignGoal, setCampaignGoal] = useState("");
  const [campaignEndDate, setCampaignEndDate] = useState("");
  const [contractAddress] = useState(
    "0xE223263668035CC6af2BaD8651e433005b740B58"
  );
  const [contractABI] = useState(abi.abi);
  const [deployedCampaigns, setDeployedCampaigns] = useState([]);

  const handleCreateCampaign = async (e) => {
    e.preventDefault();
    const { ethereum } = window;
    try {
      if (ethereum) {
        // await window.ethereum.enable(); // Request user's permission to connect to MetaMask
        const provider = new ethers.BrowserProvider(ethereum);
        const signer = await provider.getSigner();
        const CampaignFactory = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
        const userAddress = ethereum.selectedAddress;
        const tx = await CampaignFactory.createCampaign(
          campaignName,
          campaignDescription,
          campaignGoal,
          campaignEndDate
        );
        await tx.wait();
        alert("Campaign successfully created");
        const camp = await CampaignFactory.getDeployedCampaigns();
        setDeployedCampaigns(camp);
        console.log(camp[0]);
        console.log(camp[1]);
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }

    setCampaignName("");
    setCampaignDescription("");
    setCampaignGoal("");
    setCampaignEndDate("");
  };

  return (
    <div className="p-4 bg-white rounded-3 shadow-sm mb-4">
      <div className="d-flex justify-content-center">
        <span className="placeholder col-12 placeholder-xs px-3 fs-2 fw-semibold lh-base bg-dark text-light ">
          Create Campaign
        </span>
      </div>
      <form onSubmit={handleCreateCampaign} className="mt-4">
        <div className="mb-3">
          <label className="d-block mb-2 fw-bold">Campaign Name:</label>
          <input
            className="form-control  border-secondary"
            type="text"
            placeholder="Name"
            aria-label="default input example"
            value={campaignName}
            onChange={(e) => setCampaignName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label d-block mb-2 fw-bold"
          >
            Receiver's Wallet key:
          </label>
          <textarea
            className="form-control border-secondary"
            id="exampleFormControlTextarea1"
            rows="3"
            value={campaignDescription}
            onChange={(e) => setCampaignDescription(e.target.value)}
            required
          ></textarea>
        </div>

        <div className=" mb-3">
          <label
            htmlFor="inputPassword6"
            className="d-block mb-2 fw-bold col-form-label"
          >
            Goal (ETH):
          </label>
          <input
            className="form-control-sm  border-secondary"
            aria-label="default input example"
            id="inputPassword6"
            aria-describedby="passwordHelpInline"
            type="number"
            value={campaignGoal}
            onChange={(e) => setCampaignGoal(e.target.value)}
            required
          />
        </div>
        <div className=" mb-4">
          <label htmlFor="tarik" className="d-block mb-2 fw-bold">
            End Date:
          </label>
          <input
            className="form-control-sm  border-secondary"
            type="date"
            id="tarik"
            value={campaignEndDate}
            onChange={(e) => setCampaignEndDate(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-success">
          Create Campaign
        </button>
      </form>
    </div>
  );
};

export default CampaignCreation;
