import React from "react";
import Button from "../Component/Button";

const ContentSecondSection = () => {
  return (
    <div className="container main-content py-2">
      <div className="row">
        <div className="col-12">
          <div className="ready-to-made-section">
            <div className="row ">
              <div className="col-lg-6 col-md-6 col-sm-12 order-sm-2 order-md-1 order-lg-1">
                <div className="content-section">
                  <h2>Built for teamwork</h2>
                  <p>
                    Invite people to edit with you or set your whole team up to
                    manage brand assets, brainstorm on{" "}
                    <span className="link-sales">whiteboards</span> , get
                    approvals, and scale content with tools like{" "}
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
              <div className="col-lg-6 col-md-6 col-sm-12 order-sm-1 order-md-2 order-lg-2">
                <div className="image-section w-100">
                  {/* <video
                    src="https://static.canva.com/anon_home/benefits-start-en-1200x780-compressed.mp4"
                    title="Ready-made designs"
                    loop=""
                    playsInline=""
                    preload="none"
                    className="w-100"
                  ></video> */}
                  <img
                    alt="Too good not to share"
                    src="https://static.canva.com/anon_home/benefits/benefits-share-en-1288x838.jpg"
                    className="im1gjQ w-100"
                    draggable="false"
                  />
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
