import React from "react";
import Button from "../Component/Button";
import MainContentCard from "../Component/MainContentCard";

const EveryOneSection = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 d-flex flex-column">
          <div className="sales-everyone-section d-flex flex-column justify-content-center align-items-center">
            <h2>A perfect fit for everyone</h2>
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 py-2">
                  <MainContentCard
                    title="Canva Free"
                    paragraph="For anyone wanting to design anything, on your own or with others. No design experience required, and it's free forever."
                    btnText="Get Canva Free"
                  />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12  py-2">
                  <MainContentCard
                    title="Canva Pro"
                    paragraph="For individuals wanting unlimited access to premium content, with special tools to grow your brand or passion project."
                    btnText="Start your free pro trial"
                  />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12  py-2">
                  <MainContentCard
                    title="Canva for Teams"
                    paragraph="For teams of all sizes wanting to create together, with premium workplace tools and approval flows."
                    btnText="Start your free Teams trial"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 py-2 text-end">
            <Button
              text="Contact Sales"
              buttonStyle="global-btn w-25 contact-sales-btn"
            />
          </div>
          <div className="col-12 text-center pt-5">
            <p>
              <span className="link-sales">Educational organisations</span> and{" "}
              <span className="link-sales">nonprofits</span> can enjoy premium
              Canva features for free
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EveryOneSection;
