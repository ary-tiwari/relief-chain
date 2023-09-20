import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import abi from "./utils/Campaign.json";
const TransactionHistory = (props) => {
  const [transactions, setTransactions] = useState([]);
  const [contractAddress] = useState(props.disaster.address);
  const [contractABI] = useState(abi.abi);
  useEffect(() => {
    // Initialize Web3 with your chosen provider
    const fetchTransactionHistory = async () => {
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
          const user = ethereum.selectedAddress;
          const history = await Campaign.getTransactionHistory(user);
          const usage = [];
          for (let i = 0; i < history[0].length; i++) {
            const date = new Date(Number(history[1][i]));
            usage.push({
              sender: history[0][i],
              receiver: history[2][i],
              time: date.toDateString(),
            });
          }
          console.log(history[1]);
          setTransactions(usage);
        } else {
          console.log("Ethereum object doesn't exist!");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchTransactionHistory();
  }, []);

  // useEffect(() => {
  //   const fetchTransactionHistory = async () => {};

  //   fetchTransactionHistory();
  // }, []);
  return (
    <div className="accordion mt-5" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Transaction History
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <ul className="list-group">
              {transactions.map((tx, index) => (
                <li key={index} className="list-group-item">
                  <strong>Time:</strong> {tx.time}
                  <br />
                  <strong>From:</strong> {tx.sender}
                  <br />
                  <strong>To:</strong> {tx.receiver}
                  <br />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;
