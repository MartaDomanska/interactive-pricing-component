import { useState } from "react";

export const Range = () => {
  const [views, setViews] = useState("3");
  const [isYearlyBilling, setIsYearlyBilling] = useState(false);

  const viewRanges: { [key: string]: { views: string; price: number } } = {
    "1": { views: "10K", price: 8 },
    "2": { views: "50K", price: 12 },
    "3": { views: "100K", price: 16 },
    "4": { views: "500K", price: 24 },
    "5": { views: "1M", price: 36 },
  };

  const handleActive = () => {
    setIsYearlyBilling(!isYearlyBilling);
  };

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const sliderValue = event.target.value;
    setViews(sliderValue);
  };

  const selectedRange = viewRanges[views];
  const price = selectedRange ? selectedRange.price : 0;
  const discountedPrice = isYearlyBilling ? price * 0.75 : price;

  return (
    <div>
      <div className="slider-views">
        <span id="views">
          {selectedRange ? selectedRange.views : null}
          <span> pageviews</span>
        </span>
        <span id="price">
          ${discountedPrice.toFixed(2)}
          <span>/month</span>
        </span>
      </div>
      <div className="slider-rule">
        <input
          type="range"
          min="1"
          max={Object.keys(viewRanges).length}
          value={views}
          onChange={handleSliderChange}
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
