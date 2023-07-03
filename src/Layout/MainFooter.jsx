import React from "react";

const MainFooter = () => {
  return (
    <div
      className="container main-footer py-3 mb-4"
      style={{ borderTop: "1px solid rgba(43,59,74,.3)" }}
    >
      <div className="row">
        <div className=" col-sm-12 col-md-2 col-lg-2 order-1 order-md-1  ">
          <div className="select-box text-center  py-2 pb-3">
            <select name="country-langaude" id="langauge">
              <option value="English">English</option>
              <option value="Marathi">Marathi</option>
              <option value="Urdu">Urdu</option>
              <option value="Hindi">Hindi</option>
            </select>
          </div>
        </div>
        <div className=" col-sm-12 col-md-8 col-lg-8 order-3 order-md-2 ">
          <div className="copy-right-section text-center pb-3">
            <div className="copyright">
              © 2023 All Rights Reserved, Canva®
              <span>Privacy policy Terms</span>
            </div>
          </div>
        </div>
        <div className=" col-sm-12 col-md-2 col-lg-2 order-2 order-md-3 ">
          <div className="social-icon d-flex justify-content-center pb-1">
            <ul className="list-unstyled d-flex justify-content-between w-50">
              <li>
                <div className="facebook-icon">
                  <svg
                    fill="none"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.5 12.058c0-5.28-4.253-9.558-9.5-9.558s-9.5 4.279-9.5 9.558c0 4.771 3.473 8.725 8.016 9.442v-6.68H8.104v-2.762h2.412V9.952c0-2.395 1.417-3.718 3.588-3.718 1.04 0 2.126.186 2.126.186v2.352h-1.198c-1.18 0-1.548.738-1.548 1.494v1.792h2.635l-.421 2.763h-2.214V21.5c4.543-.717 8.016-4.67 8.016-9.442z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </li>
              <li>
                <div className="facebook-icon">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.314 8.918c1.071-.709 1.894-1.83 2.282-3.166A9.822 9.822 0 0 1 25.3 7.14c-.946-1.112-2.295-1.806-3.788-1.806-2.865 0-5.19 2.561-5.19 5.722 0 .448.047.885.135 1.304-4.313-.24-8.137-2.517-10.696-5.979a6.148 6.148 0 0 0-.703 2.877c0 1.985.916 3.736 2.309 4.763a4.81 4.81 0 0 1-2.35-.716l-.001.072c0 2.772 1.789 5.085 4.163 5.61a4.746 4.746 0 0 1-2.344.099c.66 2.273 2.577 3.928 4.848 3.974-1.776 1.534-4.014 2.45-6.445 2.45-.419 0-.832-.028-1.238-.081C6.297 27.053 9.024 28 11.955 28 21.5 28 26.72 19.28 26.72 11.72c0-.248-.005-.495-.015-.74a11.21 11.21 0 0 0 2.59-2.962c-.931.455-1.931.762-2.98.9Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </li>
              <li>
                <div className="facebook-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M16 2.67a13.33 13.33 0 0 0-4.86 25.75c-.12-1.06-.22-2.68.05-3.83l1.56-6.63s-.4-.8-.4-1.98c0-1.85 1.08-3.23 2.41-3.23 1.14 0 1.7.85 1.7 1.87 0 1.15-.74 2.86-1.11 4.44-.32 1.33.66 2.41 1.97 2.41 2.37 0 4.2-2.5 4.2-6.1 0-3.2-2.3-5.43-5.58-5.43a5.77 5.77 0 0 0-6.02 5.79c0 1.14.44 2.37 1 3.04.1.13.12.25.09.38l-.37 1.52c-.06.24-.2.3-.45.17-1.66-.77-2.7-3.2-2.7-5.16 0-4.2 3.05-8.07 8.8-8.07 4.63 0 8.22 3.3 8.22 7.7 0 4.6-2.9 8.3-6.91 8.3-1.36 0-2.63-.7-3.06-1.54l-.83 3.17a14.9 14.9 0 0 1-1.66 3.5A13.33 13.33 0 1 0 16 2.67"
                    ></path>
                  </svg>
                </div>
              </li>
              <li>
                <div className="facebook-icon">
                  <svg width="32" height="32" viewBox="0 0 32 32">
                    <linearGradient id="_3267067018__a" y1="100%">
                      <stop offset="0%" stop-color="#FFD520"></stop>
                      <stop offset="49%" stop-color="#F50000"></stop>
                      <stop offset="100%" stop-color="#B900B4"></stop>
                    </linearGradient>
                    <path
                      fill="url(#_3267067018__a)"
                      d="M16 4c-3.26 0-3.67.01-4.95.07a8.85 8.85 0 0 0-2.91.56 5.86 5.86 0 0 0-2.13 1.39 5.83 5.83 0 0 0-1.38 2.12 8.8 8.8 0 0 0-.56 2.91A83.65 83.65 0 0 0 4 16c0 3.26.01 3.67.07 4.95.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.39 2.13a5.83 5.83 0 0 0 2.12 1.38c.77.3 1.64.5 2.91.56 1.28.06 1.7.07 4.95.07 3.26 0 3.67-.01 4.95-.07a8.84 8.84 0 0 0 2.91-.56 5.86 5.86 0 0 0 2.13-1.39 5.83 5.83 0 0 0 1.38-2.12c.3-.77.5-1.64.56-2.91.06-1.28.07-1.7.07-4.95 0-3.26-.01-3.67-.07-4.95a8.84 8.84 0 0 0-.56-2.91 5.86 5.86 0 0 0-1.39-2.13 5.83 5.83 0 0 0-2.12-1.38 8.8 8.8 0 0 0-2.91-.56A83.65 83.65 0 0 0 16 4zm0 2.16c3.2 0 3.58.01 4.85.07 1.17.06 1.8.25 2.23.42.56.21.96.47 1.38.9.42.41.68.81.9 1.37.16.43.35 1.06.4 2.23.06 1.27.08 1.65.08 4.85 0 3.2-.02 3.58-.08 4.85a6.74 6.74 0 0 1-.42 2.23 3.81 3.81 0 0 1-.9 1.38c-.42.42-.82.68-1.38.9-.42.16-1.06.35-2.23.4-1.28.06-1.65.08-4.86.08-3.21 0-3.59-.02-4.86-.08a6.78 6.78 0 0 1-2.24-.42 3.72 3.72 0 0 1-1.38-.9 3.67 3.67 0 0 1-.9-1.38 6.78 6.78 0 0 1-.42-2.23c-.04-1.26-.06-1.65-.06-4.85 0-3.2.02-3.58.06-4.86.06-1.17.26-1.81.42-2.23.21-.57.48-.96.9-1.38.42-.42.81-.7 1.38-.9a6.67 6.67 0 0 1 2.22-.42c1.28-.05 1.65-.06 4.86-.06l.05.03zm0 3.68a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 1 0 0-12.32zM16 20a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.84-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"
                    ></path>
                  </svg>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
