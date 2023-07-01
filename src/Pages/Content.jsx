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
