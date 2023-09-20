import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollspyComponent from "./components/scrollspy";
import "./App.css"; // Import your App.css for styling
import WalletIntegration from "./components/WalletIntegration";
function App() {
  return (
    <Router>
      {" "}
      {/* Wrap your App component with BrowserRouter */}
      <div className="App">
        <Navbar />
        <header></header>
        <Routes>
          <Route index element={<ScrollspyComponent />} />
          <Route path="/donation-process" element={<WalletIntegration />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
