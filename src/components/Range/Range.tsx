import { useState } from "react";

const viewRanges = {
  "1": { views: "10K", price: 8 },
  "2": { views: "50K", price: 12 },
  "3": { views: "100K", price: 16 },
  "4": { views: "500K", price: 24 },
  "5": { views: "1M", price: 36 },
} as const

const viewsLength = Object.keys(viewRanges).length;

type ViewRangesKey = keyof typeof viewRanges;

export const Range = () => {
  const [views, setViews] = useState<ViewRangesKey>("3");
  const [isYearlyBilling, setIsYearlyBilling] = useState(false);


  const handleBillingChange = () => {
    setIsYearlyBilling(!isYearlyBilling);
  };

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const sliderValue = event.target.value;
    setViews(sliderValue as ViewRangesKey);
  };

  const selectedRange = viewRanges[views];

  if (selectedRange === undefined) {
    return "Error component";
  }

  const price = isYearlyBilling
    ? selectedRange.price * 0.75 * 12
    : selectedRange.price;
  
  const rangeInputProcent = (
    ((parseInt(views, 10) - 1) / (viewsLength - 1)) *
    100
  ).toFixed(2);

  return (
    <div>
      <div className="slider-views">
        <span className="views-container">
          {selectedRange.views}
          <span> pageviews</span>
        </span>
        <input className="views-range"
          type="range"
          min="1"
          max={viewsLength}
          value={views}
          onChange={handleSliderChange}
          style={{
            background: `
            linear-gradient(to right
            , var(--strong-cyan) ${rangeInputProcent}%
            , var(--light-grayish-blue-toggle) ${rangeInputProcent}%`,
          }}
        />
        <span className="views-price">
          <span className="price-detail">
            ${price.toFixed(2)}
            <span>/ {isYearlyBilling ? "year" : "month"}</span>
          </span>
        </span>
      </div>
      <div className="slider-switch">
        <p>Monthly Billing</p>
        <label className="switch-item">
          <input
            type="checkbox"
            role="switch"
            onClick={handleBillingChange}
          />
          <span className="slider"></span>
        </label>
        <p>Yearly Billing</p>
        <span className="desktop-discount">25% discount</span>
        <span className="mobile-discount">- 25%</span>
      </div>
    </div>
  );
};
