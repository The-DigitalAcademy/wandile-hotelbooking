import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://q-xx.bstatic.com/xdata/images/hotel/max500/225326685.jpg?k=ca2ab82fc2ef23eeb32bdc3fe1518a2c8fcbbe4ce8358db1aae0c28a825d9ba6&o="
          alt=""
          className="fpImg"
        />
        <span className="fpName">Crowne Plaza</span>
        <span className="fpCity">Johannesburg - The Rosebank</span>
        <span className="fpPrice">Starting price from R1 453</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://t-cf.bstatic.com/xdata/images/hotel/square200/243737536.webp?k=47d8b6f56f77e9931b543b1cc1f5fff008d2179eaee860615c75b382b4e5bd6a&o="
          alt=""
          className="fpImg"
        />
        <span className="fpName">Garden Court Sandton City</span>
        <span className="fpCity">Johannesburg - The Sandton</span>
        <span className="fpPrice">Starting price from R1 320</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://www.hiexhotels.co.za/media/2017%20Images/UM-Pool-Top-Pic.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Holiday Inn Express</span>
        <span className="fpCity">Durban - Umhlanga</span>
        <span className="fpPrice">Starting price from R1 424</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://www.hilton.com/im/en/CPTUEDI/999636/upper-east-side03.jpg?impolicy=crop&cw=4500&ch=2372&gravity=NorthWest&xposition=0&yposition=313&rw=1100&rh=580"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Double Tree by Hilton</span>
        <span className="fpCity">Cape Town - Upper Eastside</span>
        <span className="fpPrice">Starting price from R1 135</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;