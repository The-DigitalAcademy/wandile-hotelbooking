import "./searchItem.css";

const SearchItem3 = () => {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/xphoto/max1440/48387109.jpg?k=67c138c6f8e7e417f75408a16083dfb2f4b3d1a855af6686c3f46ea5d63890c4&o="
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Durban Apartment</h1>
        <span className="siDistance">538m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air-conditioning • 
          Fibre Internet connectivity • 24H Top of the range security
        </span>
        <span className="siFeatures">
          2 Bedroom Apartment • 1 bathroom • 51m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.8</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">R1 310.67</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>

    
  );
};



export default SearchItem3;