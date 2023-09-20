import React, { useEffect } from "react";
import Carousel from "./Carousel"; // Import the MyCarousel component
import About from "./About";
import CampaignCreation from "./CampaignCreation";
const ScrollspyComponent = () => {
  useEffect(() => {
    const scrollspy = new window.bootstrap.ScrollSpy(document.body, {
      target: "#scrollcon",
      rootMargin: "0px 0px -40%",
    });

    return () => {
      // Clean up when the component unmounts
      scrollspy.dispose();
    };
  }, []);

  return (
    <div
      data-bs-spy="scroll"
      data-bs-target="#scrollcon"
      data-bs-root-margin="0px 0px -40%"
      data-bs-smooth-scroll="true"
      className="scrollspy-example bg-body-tertiary p-3 rounded-2"
      tabIndex="0"
    >
      <div id="scrollspyHeading1">
        <Carousel />{" "}
      </div>
      {/* <p>...</p> */}
      <div id="scrollspyHeading2">
        <About />
      </div>
      {/* <p>...</p> */}
      <div id="scrollspyHeading3">
        <CampaignCreation />
      </div>
      {/* <p>...</p> */}
      <div id="scrollspyHeading4">
        <footer>
          <h4>Hoped You Liked Our Website, More features incoming soon!!</h4>
          <p>
            <a href="https://github.com/ary-tiwari/relief-chain">GitHub</a>
          </p>
        </footer>
      </div>
      {/* <p>...</p> */}
    </div>
  );
};

export default ScrollspyComponent;
