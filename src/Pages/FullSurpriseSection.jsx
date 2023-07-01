import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import firstImage from "../Assets/Images/enterprise.jpeg";
import secondImage from "../Assets/Images/presentations.jpeg";
import thirdImage from "../Assets/Images/diversity.jpeg";
import fourthImage from "../Assets/Images/sustainability.jpeg";
import fiveImage from "../Assets/Images/nonprofits.jpeg";
import sixImage from "../Assets/Images/print.jpeg";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 2000, min: 900 },
    items: 2.5,
  },
  tablet: {
    breakpoint: { max: 900, min: 780 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 780, min: 0 },
    items: 1,
  },
};

const FullSurpriseSection = () => {
  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-12">
          <div className="surprise-sectionn d-flex flex-column align-items-center pb-3">
            <h2>We're full of surprises</h2>
            <p>Here are some of our best traits you might not know about</p>
          </div>

          <div className="carosuel section">
            <Carousel responsive={responsive}>
              <div className="images-1">
                <div className="image-wraper">
                  <img src={firstImage} alt="" />
                </div>
                <div className="descriptive-message">
                  <p className="mb-1">Businesses love us</p>
                  <p>
                    See how teams of all sizes are using Canva to manage their
                    workflows and create together.
                  </p>
                </div>
              </div>
              <div className="images-1">
                <div className="image-wraper">
                  <img src={secondImage} alt="" />
                </div>
                <div className="descriptive-message">
                  <p className="mb-1"> We make presenting easy</p>
                  <p>
                    Take the stress out of preparing and presenting with our
                    go-to decks.
                  </p>
                </div>
              </div>

              <div className="images-1">
                <div className="image-wraper">
                  <img src={thirdImage} alt="" />
                </div>
                <div className="descriptive-message">
                  <p className="mb-1"> We make presenting easy</p>
                  <p>
                    Take the stress out of preparing and presenting with our
                    go-to decks.
                  </p>
                </div>
              </div>
              <div className="images-1">
                <div className="image-wraper">
                  <img src={fiveImage} alt="" />
                </div>
                <div className="descriptive-message">
                  <p className="mb-1"> We make presenting easy</p>
                  <p>
                    Take the stress out of preparing and presenting with our
                    go-to decks.
                  </p>
                </div>
              </div>
              <div className="images-1">
                <div className="image-wraper">
                  <img src={sixImage} alt="" />
                </div>
                <div className="descriptive-message">
                  <p className="mb-1">We have a video editor</p>
                  <p>
                    Take the stress out of preparing and presenting with our
                    go-to decks.
                  </p>
                </div>
              </div>
              <div className="images-1">
                <div className="image-wraper">
                  <img src={fourthImage} alt="" />
                </div>
                <div className="descriptive-message">
                  <p className="mb-1">We print and deliver</p>
                  <p>
                    Take the stress out of preparing and presenting with our
                    go-to decks.
                  </p>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullSurpriseSection;
