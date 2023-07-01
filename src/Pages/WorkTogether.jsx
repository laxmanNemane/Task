import React from "react";
import Button from "../Component/Button";

const WorkTogether = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 pb-4">
          <div className="work-together-section d-flex flex-column align-items-center">
            <h2>Create your best work, together</h2>
            <p className="mb-1">
              Try Canva for Teams, the all-in-one solution for teams of all
              sizes to create
            </p>
            <p>and collaborate together.</p>
          </div>
        </div>

        <div className="col-12 py-4">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 order-sm-2 order-md-1 order-lg-1">
              <div className="description-messages">
                <ul className="list-unstyled">
                  <li className="py-2">
                    <div className="d-flex">
                      <span className="icon-view">
                        <i class="fa-light fa-folder-open"></i>
                      </span>
                      <span>
                        <span className="text-litle-bold"> Team folders </span>{" "}
                        help you stay organised, store brand assets, and manage
                        content
                      </span>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="d-flex">
                      <span className="icon-view"></span>
                      <span>
                        <span className="text-litle-bold">
                          {" "}
                          Plan, create, schedule, and publish{" "}
                        </span>{" "}
                        your social media posts directly from Canva
                      </span>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="d-flex">
                      <span className="icon-view"></span>
                      <span>
                        <span className="text-litle-bold">
                          {" "}
                          Real-time collaboration{" "}
                        </span>{" "}
                        across countries, companies, and departments
                      </span>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="d-flex">
                      <span className="icon-view"></span>
                      <span>
                        <span className="text-litle-bold">
                          Built-in comments
                        </span>{" "}
                        to communicate, keep content moving, and resolve
                        suggestions in real-time
                      </span>
                    </div>
                  </li>
                </ul>
                <div>{/* <HiOutlineDevicePhoneMobile /> */}</div>
                {/* <TbUsersPlus />
                <TbMessageCirclePlus />
                <BsFolderPlus /> */}
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 order-sm-1 order-md-2 order-lg-2">
              <div class="video-section">
                <video
                  class="ZGpsMQ"
                  src="https://static.canva.com/anon_home/teams-en-974x720.mp4"
                  loop=""
                  playsinline=""
                  preload="none"
                ></video>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 text-center">
          <div className="button-group">
            <Button
              text="Try Canva for Teams"
              buttonStyle="global-btn canva-primmary-btn py-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkTogether;
