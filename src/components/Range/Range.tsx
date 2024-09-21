import { useState } from "react";

export const Range = () => {
  const [views, setViews] = useState(100);
  const [isYearlyBilling, setIsYearlyBilling] = useState(false);

  const price = 16;
  const discountedPrice = isYearlyBilling ? price * 0.75 : price;

  const handleActive = () => {
    setIsYearlyBilling(!isYearlyBilling);
  };

  const viewRanges = {
    "1": { views: "10K", price: 8 },
    "2": { views: "50K", price: 12 },
    "3": { views: "100K", price: 16 },
    "4": { views: "500K", price: 24 },
    "5": { views: "1M", price: 36 },
  };

  return (
    <div>
      <div className="slider-views">
        <span id="views">
          {views}
          <span> pageviews</span>
        </span>
        <span id="price">
          ${discountedPrice}
          <span>/month</span>
        </span>
      </div>
      <div className="slider-rule">
        <input
          type="range"
          id="slider"
          min="1"
          max="200"
          value={views}
          onChange={(e) => {
            setViews(Number(e.target.value));
          }}
        />
      </div>
      <div className="slider-switch">
        <p>Monthly Billing</p>
        <div
          className={`switch-toggle ${isYearlyBilling ? "active" : ""}`}
          onClick={handleActive}
        >
          <div className="switch-circle"></div>
        </div>
        <p>Yearly Billing</p>
        <span className="desktop-discount">25% discount</span>
        <span className="mobile-discount">25%</span>
      </div>
    </div>
  );
};
