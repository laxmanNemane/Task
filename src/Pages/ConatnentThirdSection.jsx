import React from "react";
import Button from "../Component/Button";

const ConatnentThirdSection = () => {
  return (
    <div className="container main-content py-2">
      <div className="row">
        <div className="col-12">
          <div className="ready-to-made-section">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 ">
                <div className="image-section w-100">
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
                  <h2>Too good not to share</h2>
                  <p>
                    Whether you need to build a new{" "}
                    <span className="link-sales">website</span> or print some{" "}
                    <span className="link-sales">posters</span>, let your
                    creations shine in the real world. Easily publish, download
                    or share whatever you make in Canva. You can even have it
                    printed and dropped straight at your door!
                  </p>
                  <div className="btn-group">
                    <Button
                      text="Design your vision"
                      buttonStyle="global-btn canva-primmary-btn "
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

export default ConatnentThirdSection;
