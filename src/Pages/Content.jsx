import React from "react";
import Button from "../Component/Button";

const Content = () => {
  return (
    <div className="container main-content py-2">
      <div className="row">
        <div className="col-12">
          <div className="ready-to-made-section">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="image-section w-100">
                  <video
                    className="ZGpsMQ w-100"
                    loop
                    autoPlay
                    muted
                    preload="none"
                  >
                    <source
                      src="https://static.canva.com/anon_home/benefits-start-en-1200x780-compressed.mp4"
                      type="video/mp4"
                    />
                    {/* Fallback image */}
                    <img src="fallback-image.jpg" alt="Fallback Image" />
                  </video>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="content-section">
                  <h2>Ready-made designs</h2>
                  <p>
                    Benefit from thousands of professional templates, images,
                    and quality content to choose from, for example when
                    ordering new{" "}
                    <span className="link-sales">business cards</span> or
                    editing your next <span className="link-sales">video</span>.
                  </p>
                  <div className="btn-group">
                    <Button
                      text="Create a design"
                      buttonStyle="global-btn canva-primmary-btn py-2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
