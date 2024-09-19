import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Features } from "./components/Features/Features";
import { Range } from "./components/Range/Range";

export const App = () => {
  const [views, setViews] = useState("100K");
  const [price, setPrice] = useState(16);
  const [isYearlyBilling, setIsYearlyBilling] = useState(false);

  const handleActive = () => {
    setIsYearlyBilling(!isYearlyBilling);
  };

  return (
    <div className="slider-card">
      <Header />
      <form className="slider-container">
        <Range
          views={views}
          price={price}
          yearlyBilling={isYearlyBilling} 
          handleActive={handleActive} 
          handleViews={() => {}} 
        />
        <Features />
      </form>
    </div>
  );
};
