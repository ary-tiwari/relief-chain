import React, { useState, useEffect } from "react";
import BrowseAndSearch from "./BrowseAndSearch";
const WalletIntegration = () => {
  const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // Check if MetaMask is installed
    if (typeof window.ethereum !== "undefined") {
      setIsMetaMaskInstalled(true);

      // Add a listener to detect changes in the MetaMask connection status
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length === 0) {
          // User disconnected their MetaMask wallet
          setIsConnected(false);
        } else {
          // User connected their MetaMask wallet
          setIsConnected(true);
        }
      });
    }
  }, []);

  const connectWallet = async () => {
    if (!isMetaMaskInstalled) {
      alert("MetaMask is not installed in your browser.");
      return;
    }

    try {
      // Request access to the user's MetaMask wallet
      await window.ethereum.request({ method: "eth_requestAccounts" });
      setIsConnected(true);
    } catch (error) {
      console.error("MetaMask connection error:", error);
      setIsConnected(false);
    }
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">Wallet Integration (MetaMask)</h2>
                {!isConnected ? (
                  <button
                    onClick={connectWallet}
                    type="button"
                    className="btn btn-primary"
                  >
                    Connect Wallet
                  </button>
                ) : (
                  <p className="text-success font-weight-bold">
                    Your MetaMask wallet is connected.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {isConnected ? (
        <div>
          <BrowseAndSearch />
        </div>
      ) : (
        <p></p>
      )}
    </>
  );
};

export default WalletIntegration;
