import "./App.css";
import { Header } from "./components/Header/Header";
import { Features } from "./components/Features/Features";
import { Range } from "./components/Range/Range";

export const App = () => {
  return (
    <div className="">
      <Header />
      <form className="slider-container">
        <Range />
        <Features />
      </form>
    </div>
  );
};