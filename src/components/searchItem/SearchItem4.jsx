import "./searchItem.css";

const SearchItem4 = () => {
  return (
    <div className="searchItem">
      <img
        src="https://cache.marriott.com/content/dam/marriott-renditions/DURUM/durum-guestroom-0038-hor-wide.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1336px:*"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Sandton Apartments</h1>
        <span className="siDistance">428m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning • Security • Wi-fi & Internet
        </span>
        <span className="siFeatures">
        Brand New & Modern • 1 bathroom • 32m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.7</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">R1 586.96</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>

    
  );
};



export default SearchItem4;