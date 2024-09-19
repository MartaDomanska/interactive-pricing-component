interface Props {
  views: number;
  amount:  number;
  handleClick: () => void;
}
export const Range = (props: Props) => {
  return (
    <>
      <div className="slider-views">
        <span id="views">
          {props.views}K<span> pageviews</span>
        </span>
        <span className="" id="amount">
          {props.amount}<span className="">/month</span>
        </span>
      </div>
      <div className="slider-rule">
        <input type="range" name="" id="slider" />
      </div>
    </>
  );
};