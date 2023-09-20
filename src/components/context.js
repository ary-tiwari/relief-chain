import { createContext, useContext, useState } from "react";

const CampaignContext = createContext();

export const useCampaignContext = () => {
  return useContext(CampaignContext);
};

export const CampaignProvider = ({ children }) => {
  const [deployedCampaigns, setDeployedCampaigns] = useState([]);

  return (
    <CampaignContext.Provider
      value={{ deployedCampaigns, setDeployedCampaigns }}
    >
      {children}
    </CampaignContext.Provider>
  );
};
