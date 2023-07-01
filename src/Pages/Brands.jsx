import React from "react";

const Brands = () => {
  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-12">
          <div className="brands-section d-flex flex-column align-items-center">
            <h2>Trusted by well known companies</h2>
            <div className="trust-brnads">
              <div class="slider">
                <div class="slide-container">
                  <img src="image1.jpg" alt="Brand 1" class="slide" />
                  <img src="image2.jpg" alt="Brand 2" class="slide" />
                  <img src="image3.jpg" alt="Brand 3" class="slide" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
