import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://www.andbeyond.com/wp-content/uploads/sites/5/Johannesburg-Skyline.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Johannesburg</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://static.trip101.com/paragraph_media/pictures/001/820/085/large/Durban_beach_front__281_of_1_29.jpg?1583409245"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Durban</h1>
          <h2>533 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/10/2e/1e/cape-town.jpg?w=700&h=-1&s=1"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Cape Town</h1>
          <h2>532 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;