import React from "react";

const MainFooter = () => {
  return (
    <div
      className="container main-footer py-3 mb-4"
      style={{ borderTop: "1px solid rgba(43,59,74,.3)" }}
    >
      <div className="row">
        <div className="col-12 d-flex alignt-items-center justify-content-between">
          <div className="select-box">
            <select name="country-langaude" id="langauge">
              <option value="English">English</option>
              <option value="Marathi">Marathi</option>
              <option value="Urdu">Urdu</option>
              <option value="Hindi">Hindi</option>
            </select>
          </div>
          <div className="copy-right-section">
            <div className="copyright">
              © 2023 All Rights Reserved, Canva®
              <span>Privacy policy Terms</span>
            </div>
          </div>

          <div className="social-icon"></div>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
