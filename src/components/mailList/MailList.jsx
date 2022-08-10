import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, save money!</h1>
      <span className="mailDesc">Sign up and we'll send the best deals to you</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" />
        <button>Subscribe</button>
      </div>
      <br2></br2>
      <div className="fText">Copyright © 2022 Digital Academy - Wandile Maluleke. All Rights Reserved</div>
    </div>
  );
};

export default MailList