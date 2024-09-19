import { useState } from "react";
import "./App.css";
import { Features } from "./components/Features/Features";
import { Range } from "./components/Range/Range";
import { Switch } from "./components/Switch/Switch";

export const App = () => {
  const [views, setViews] = useState(100)
  return (
    <div className="slider-card">
      <header>
        <h1>Simple, traffic-based pricing</h1>
        <p>Sign-up for our 30-day trial. No credit card required.</p>
      </header>
      <div className="slider-container">
        <Range views={views} amount={0} handleClick={() => {
          setViews(views + 4)
        }} />
        <Switch />
        <Features />
      </div>
    </div>
  );
};
