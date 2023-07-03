import React from "react";
import { useState } from "react";

const Brands = () => {
  const [brands, setBrands] = useState([
    {
      id: 1,
      image: "https://static.canva.com/anon_home/logos/hubspot-monochrome.png",
    },
    {
      id: 1,
      image: "https://static.canva.com/anon_home/logos/reddit-monochrome.png",
    },
    {
      id: 1,
      image:
        "https://static.canva.com/anon_home/logos/skyscanner-grayscale.png",
    },
    {
      id: 1,
      image: "https://static.canva.com/anon_home/logos/danone-grayscale.png",
    },
    {
      id: 1,
      image:
        "https://static.canva.com/anon_home/logos/sony-music-monochrome.png",
    },
    {
      id: 1,
      image: "https://static.canva.com/anon_home/logos/hubspot-monochrome.png",
    },
    {
      id: 1,
      image: "https://static.canva.com/anon_home/logos/reddit-monochrome.png",
    },
    {
      id: 1,
      image:
        "https://static.canva.com/anon_home/logos/skyscanner-grayscale.png",
    },
    {
      id: 1,
      image: "https://static.canva.com/anon_home/logos/danone-grayscale.png",
    },
    {
      id: 1,
      image:
        "https://static.canva.com/anon_home/logos/sony-music-monochrome.png",
    },
    {
      id: 1,
      image: "https://static.canva.com/anon_home/logos/hubspot-monochrome.png",
    },
  ]);

  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-12 pb-3">
          <div className="brands-section d-flex flex-column align-items-center">
            <h2 className="pb-3">Trusted by well known companies</h2>
            <div className="trust-brnads pb-5 W-100" style={{ width: "100%" }}>
              <div class="banner">
                <div class="banner-inner py-2">
                  {brands?.map((brand) => {
                    return (
                      <img src={brand.image} alt="Reddit" class="K6VwFg" />
                    );
                  })}
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
