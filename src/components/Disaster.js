import React, { useState, useEffect } from "react";
import ath from "./images/ath.jpeg";
import eq from "./images/eq.jpeg";
import wf from "./images/wf.jpg";
import im1 from "./images/im1.jpg";
import { ethers } from "ethers";
import abi from "./utils/Campaign.json";

const Disaster = (props) => {
  const [contractAddress] = useState(props.disaster.address);
  const [contractABI] = useState(abi.abi);
  const [goal, setGoal] = useState(null); // Use null as the initial value
  const [total, setTotal] = useState(null);
  const [endDate, setEndDate] = useState("15 November,2023");

  useEffect(() => {
    const work = async () => {
      const con = await handleContract();
    };
    work();
  }, []);

  useEffect(() => {
    // This effect runs whenever goal or total changes
    // Update UI here or perform any actions that depend on goal or total
    console.log("total=", total);
    console.log("goal=", goal);
  }, [goal, total]);

  const handleContract = async () => {
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

        console.log(props.disaster.address);
        let g = Number(await Campaign.getGoal());
        let tot = Number(await Campaign.getTotal()) / 1e18;
        let dt = await Campaign.getDate();
        setGoal(g);
        setTotal(tot);
        setEndDate(dt);
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-50">
      <div className="card " style={{ width: "30rem" }}>
        {(() => {
          if (props.disaster.name == "2023 Atlantic Hurricane Season") {
            return <img src={ath} className="card-img-top" alt="..." />;
          } else if (props.disaster.name == "2023 Turkey-Syria Earthquake") {
            return <img src={eq} className="card-img-top" alt="..." />;
          } else if (props.disaster.name == "2023 North American Wildfires") {
            return <img src={wf} className="card-img-top" alt="..." />;
          } else {
            return <img src={im1} className="card-img-top" alt="..." />;
          }
        })()}
        <div className="card-body">
          <h5 className="card-title">{props.disaster.name}</h5>
          <ul className="list-group">
            <li className="list-group-item list-group-item-primary">
              <label>Campaign Address:</label>
              {props.disaster.address}
            </li>
            <li className="list-group-item list-group-item-primary">
              <label>Goal:</label>
              {goal !== null ? goal : "Loading..."}
            </li>
            <li className="list-group-item list-group-item-primary">
              <label>Total donations:</label>
              {total !== null ? total : "Loading..."} ETH
            </li>
          </ul>

          <p className="card-text">
            <small className="text-body-secondary">End Date:{endDate}</small>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Disaster;
