import React from "react";
import Button from "../Component/Button";

const HeroSection = () => {
  return (
    <div className="container py-3 mt-5">
      <div className="row">
        <div className="col-12 ">
          <div className="hero-section-content d-flex flex-column justify-content-center align-items-center">
            <h1 className="line-hight">What will you design today?</h1>
            <p className="color-paragraph">
              Canva makes it easy to create professional designs and to share or
              print them.
            </p>
            <Button
              text="Sign up for free"
              buttonStyle="global-btn canva-primmary-btn "
            />
          </div>
        </div>
      </div>
      <div class="row px-2 py-4">
        <div class="col-lg-2 col-md-2  d-sm-none d-md-none d-lg-block images-display-none">
          <div className="image-group w-100">
            <div className="row">
              <div className="col-12 pb-4 mb-4">
                <img
                  src="https://content-management-files.canva.com/22f18aa3-ac5c-45b6-bd4a-93fbfdd754f2/template-1.jpg"
                  alt="Image 1"
                  className="w-75 "
                  style={{ margin: "-40px 0 0 0" }}
                />
              </div>
              <div className="col-12 pt-5">
                <img
                  src="https://content-management-files.canva.com/b3bbd63b-12e6-43de-abe6-d6652fb3deea/template-2.jpg"
                  alt="Image 2"
                  className="w-100"
                  style={{ marginTop: "50px" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-8 col-md-12 col-sm-12 col-12 ">
          <div className="video w-100">
            <video
              autoplay=""
              className="vgWuEg w-100"
              draggable="false"
              loop=""
              playsinline=""
              src="https://content-management-files.canva.com/943bd1b3-ffd6-4892-a4df-b107cb33e657/hero-banner-en-1600x852.mp4"
            ></video>
          </div>
        </div>

        <div class="col-lg-2  d-sm-none d-md-none d-lg-block images-display-none">
          <div className="row">
            <div className="col-12 text-end ">
              <img
                src="https://content-management-files.canva.com/673b652f-2614-43ff-8647-81ecbdb04678/template-3.jpg"
                alt="Image 1"
                className="w-75"
              />
            </div>
            <div className="col-12 py-5">
              <img
                src="https://content-management-files.canva.com/35b5c343-4194-4ae8-90f1-7ec803d4600d/template-4.jpg"
                alt="Image 2"
                className="w-100"
                style={{ margin: "40px 0 0 0" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
