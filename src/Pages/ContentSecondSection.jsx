import React from "react";
import Button from "../Component/Button";

const ContentSecondSection = () => {
  return (
    <div className="container main-content py-2">
      <div className="row">
        <div className="col-12">
          <div className="ready-to-made-section">
            <div className="row ">
              <div className="col-lg-6 col-md-6 col-sm-12 order-2 order-md-1">
                <div className="content-section">
                  <h2>Built for teamwork</h2>
                  <p>
                    Invite people to edit with you or set your whole team up to
                    manage brand assets, brainstorm on{" "}
                    <span className="link-sales">whiteboards</span> , get
                    approvals, and scale content with tools like
                    <span className="link-sales">docs</span>.
                  </p>
                  <div className="btn-group">
                    <Button
                      text="Work together"
                      buttonStyle="global-btn canva-primmary-btn "
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 order-1 order-md-2">
                <div className="image-section w-100">
                  <video
                    className="ZGpsMQ w-100"
                    loop
                    autoPlay
                    muted
                    preload="none"
                  >
                    <source
                      src="https://static.canva.com/anon_home/benefits/benefits-collab-en-974x634.mp4"
                      type="video/mp4"
                      style={{ width: "100%", height: "100%" }}
                    />
                    {/* Fallback image */}
                    <img src="fallback-image.jpg" alt="Fallback Image" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSecondSection;
