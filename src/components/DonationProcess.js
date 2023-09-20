import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import abi from "./utils/Campaign.json";

const DonationProcess = (props) => {
  const [contractAddress] = useState(props.disaster.address);
  const [contractABI] = useState(abi.abi);
  const [amount, setAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [transactionHash, setTransactionHash] = useState(null);

  const handleDonation = async () => {
    if (!amount) {
      alert("Please enter an amount.");
      return;
    }

    setIsLoading(true);
    const { ethereum } = window;
    try {
      if (ethereum) {
        const provider = new ethers.BrowserProvider(ethereum);
        const signer = await provider.getSigner();
        const Campaign = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
        const donationTx = await Campaign.donate({
          value: ethers.parseEther(amount), // Replace with the desired donation amount
        });
        await donationTx.wait();
        alert("Donation Successfull!");
        setTransactionHash(donationTx.hash);
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.error("Transaction error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card p-4">
              <h2 className="mb-4">Make a Donation</h2>
              <div className="mb-3">
                <label htmlFor="amount" className="form-label">
                  Enter the donation amount (ETH):
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="amount"
                  placeholder="Amount in ETH"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
              <button
                className={`btn btn-primary ${isLoading ? "disabled" : ""}`}
                onClick={handleDonation}
                disabled={isLoading}
              >
                {isLoading ? "Processing..." : "Donate"}
              </button>
              {transactionHash && (
                <p className="mt-3">
                  Transaction successful! Transaction Hash: {transactionHash}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DonationProcess;
