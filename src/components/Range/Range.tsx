interface Props {
  views: string; 
  price: number; 
  yearlyBilling: boolean; 
  handleActive: () => void; 
  handleViews: () => void; 
}

export const Range = (props: Props) => {
  const discountedPrice = props.yearlyBilling ? props.price * 0.75 : props.price;

  return (
    <div>
      <div className="slider-views">
        <span id="views">
          {props.views}
          <span> pageviews</span>
        </span>
        <span id="price">
        ${discountedPrice}
          <span>/month</span>
        </span>
      </div>
      <div className="slider-rule">
        <input type="range" id="slider" />
      </div>
      <div className="slider-switch">
        <p>Monthly Billing</p>
        <div className={`switch-toggle ${props.yearlyBilling ? 'active' : ''}`}  onClick={props.handleActive}>
          <div className="switch-circle"></div>
        </div>
        <p>Yearly Billing</p>
        <span className="desktop-discount">25% discount</span>
        <span className="mobile-discount">25%</span>
      </div>
    </div>
  );
};
