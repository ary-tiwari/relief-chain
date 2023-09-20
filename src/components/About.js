import React from "react";

const About = () => {
  return (
    <>
      <div className="my-8 md:my-12 lg:my-16 position-relative">
        <div
          className="position-absolute inset-0 d-flex items-center"
          aria-hidden="true"
        >
          <div className="w-100 border-top border-gray-300"></div>
        </div>
        <div className="d-flex justify-content-center">
          <span className="placeholder col-12 placeholder-lg px-3 fs-5 fw-semibold lh-base bg-light"></span>
        </div>
        <br />
        <div className="d-flex justify-content-center">
          <span className="placeholder col-12 placeholder-xs px-3 fs-2 fw-semibold lh-base bg-dark text-light ">
            About Us
          </span>
        </div>
      </div>
      <div className="p-4 m-4 bg-light">
        <h5
          className="px-4 pb-8 fs-2 fw-bold tracking-tight text-dark"
          id="about"
        >
          MISSION
        </h5>
        <p className="px-8 fw-normal list-group-item">
          Our mission is to provide a secure, decentralized donation collection
          app that connects donors directly to trusted relief organizations and
          NGOs working towards helping people affected by disasters. We strive
          to create a transparent platform that facilitates the effective
          distribution of funds to those in need while giving donors the
          opportunity to make an impact in a meaningful way.
        </p>
      </div>
      <div className="p-4 m-4 bg-light">
        <h5 className="px-4 pb-8 fs-2 fw-bold tracking-tight text-dark">
          VISION
        </h5>
        <p className="px-8 fw-normal list-group-item">
          To create a world where every person affected by a disaster receives
          the aid they need through a transparent and decentralized donation
          platform that empowers individuals to make a difference.
        </p>
      </div>
      <div className="p-4 m-4 bg-light">
        <h5 className="px-4 pb-8 fs-2 fw-bold tracking-tight text-dark">
          VALUES
        </h5>
        <ul className="list-group text-start">
          <li className="list-group-item">
            <span className="pr-2 fw-bold text-primary">Transparency </span>
            We value transparency in all our operations, from the collection of
            donations to the distribution of funds. We believe that every donor
            should know how their contribution is being used and should have
            access to information about the organizations they are supporting.
          </li>
          <li className="list-group-item">
            <span className="pr-2 fw-bold text-primary">Decentralization </span>
            We believe in the principles of decentralization, which empower
            individuals to have greater control over their own data and
            resources, and enable more equitable and democratic decision-making.
          </li>
          <li className="list-group-item">
            <span className="pr-2 fw-bold text-primary">Accountability </span>
            We hold ourselves accountable for the efficient and effective
            distribution of donations to those in need. We work to ensure that
            our platform is free from corruption, fraud, and misuse of funds.
          </li>
          <li className="list-group-item">
            <span className="pr-2 fw-bold text-primary">Empowerment </span>
            We value the empowerment of individuals and communities through
            decentralization, recognizing that it can enable greater access to
            resources and opportunities, and foster a sense of ownership and
            agency over one's own life and future.
          </li>
          <li className="list-group-item">
            <span className="pr-2 fw-bold text-primary">Collaboration </span>
            We work in collaboration with relief organizations and NGOs to
            maximize the impact of our donations. We believe that by working
            together, we can create a better world for those affected by
            disasters.
          </li>
          <li className="list-group-item">
            <span className="pr-2 fw-bold text-primary">Innovation </span>
            We are committed to continuous improvement and innovation in all
            aspects of our platform. We strive to use the latest technologies to
            create a better donation experience for our users while maintaining
            the highest standards of security and privacy.
          </li>
          <li className="list-group-item">
            <span className="pr-2 fw-bold text-primary">Trust </span>
            We prioritize trust as a core value, recognizing that the
            transparency and security enabled by decentralization are essential
            for building trust within decentralized communities.
          </li>
          <li className="list-group-item">
            <span className="pr-2 fw-bold text-primary">Resilience </span>
            We believe in the resilience of decentralized networks, which are
            designed to be more resistant to failures and attacks, and we
            prioritize building decentralized systems that can withstand
            challenges and adapt to changing circumstances.
          </li>
          <li className="list-group-item">
            <span className="pr-2 fw-bold text-primary">Privacy </span>
            We prioritize privacy as a core value within decentralized
            ecosystems, recognizing that individuals should have control over
            their own data and the ability to maintain their own privacy and
            security.
          </li>
        </ul>
      </div>
    </>
  );
};

export default About;
