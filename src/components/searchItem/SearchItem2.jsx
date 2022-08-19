import "./searchItem.css";

const SearchItem2 = () => {
  return (
    <div className="searchItem">
      <img
        src="https://media.cntraveler.com/photos/5b7d925adb777920f1900b3f/master/w_3600,h_1771,c_limit/One&Only-Cape-Town_2018_One&Only_CapeTown_Accomodation_MarinaGrandeSuite_Bedroom-(2).jpg1"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Cape Town Apartments</h1>
        <span className="siDistance">610m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 2 bathroom • 21m² 2 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>9.0</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">R1 4136</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>

    
  );
};



export default SearchItem2;