import React from "react";
import first from "../Assets/Images/sony-music-grayscale-dark-theme.png";
import second from "../Assets/Images/salesforce-grayscale-dark-theme.png";
import third from "../Assets/Images/hubspot-grayscale-dark-theme.png";
import fourt from "../Assets/Images/danone-grayscale-dark-theme.png";
import five from "../Assets/Images/skyscanner-grayscale-dark-theme.png";

const Brands = () => {
  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-12 pb-3">
          <div className="brands-section d-flex flex-column align-items-center">
            <h2 className="pb-3">Trusted by well known companies</h2>
            <div className="trust-brnads pb-5 W-100" style={{ width: "100%" }}>
              <div class="banner">
                <div class="banner-inner">
                  <img src={first} alt="Reddit" class="K6VwFg" />
                  <img src={second} alt="Reddit" class="K6VwFg" />
                  <img src={third} alt="Reddit" class="K6VwFg" />
                  <img src={fourt} alt="Reddit" class="K6VwFg" />
                  <img src={five} alt="Reddit" class="K6VwFg" />
                  <img src={first} alt="Reddit" class="K6VwFg" />
                  <img src={second} alt="Reddit" class="K6VwFg" />
                  <img src={third} alt="Reddit" class="K6VwFg" />
                  <img src={fourt} alt="Reddit" class="K6VwFg" />
                  <img src={five} alt="Reddit" class="K6VwFg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
