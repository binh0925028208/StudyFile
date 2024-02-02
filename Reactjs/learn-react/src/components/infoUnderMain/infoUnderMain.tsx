import "./infoUnderMain.css";

const InfoUnderMain = () => {
  return (
    <div className="infoUnderMain">
      <h3>Trusted by Thousands of Happy Customer</h3>
      <p className="infoUnderMainP">
        These are the stories of our customers who have joined us with great
        pleasure when using this crazy feature.
      </p>
      <div className="rating">
        <div className="userBox">
          <div className="userBoxInfo">
            <img src="asset/u1.jpg" alt="" />
            <div className="userName">
              <h4>
                <strong>Viezh Robert</strong>
              </h4>
              <p>Warsaw, Poland</p>
            </div>
            <div className="userRating">
              <p>4.5</p>
              <img src="asset/ant-design_star-filled.png" alt="" />
            </div>
          </div>
          <p className="userComment">
            “Wow... I am very happy to use this VPN, it turned out to be more
            than my expectations and so far there have been no problems.
            LaslesVPN always the best”.
          </p>
        </div>
        <div className="userBox">
          <div className="userBoxInfo">
            <img src="asset/u2.jpg" alt="" />
            <div className="userName">
              <h4>
                <strong>Yessica Christy</strong>
              </h4>
              <p>Shanxi, China</p>
            </div>
            <div className="userRating">
              <p>4.5</p>
              <img src="asset/ant-design_star-filled.png" alt="" />
            </div>
          </div>
          <p className="userComment">
            “I like it because I like to travel far and still can connect with
            high speed.”.
          </p>
        </div>
        <div className="userBox">
          <div className="userBoxInfo">
            <img src="asset/u3.jpg" alt="" />
            <div className="userName">
              <h4>
                <strong>Kim Young Jou</strong>
              </h4>
              <p>Seoul, South Korea</p>
            </div>
            <div className="userRating">
              <p>4.5</p>
              <img src="asset/ant-design_star-filled.png" alt="" />
            </div>
          </div>
          <p className="userComment">
            “This is very unusual for my business that currently requires a
            virtual private network that has high security.”.
          </p>
        </div>
      </div>
      <div className="slide">
        <div className="slideLoad">
          <img src="asset/Group 1300.png" alt="" />
        </div>
        <div className="slideBtn">
          <div className="leftBtn">
            <img src="asset/ar1.png" alt="" />
          </div>
          <div className="rightBtn">
            <img src="asset/ar2.png" alt="" />
          </div>
        </div>
      </div>
      <div className="bannerUnderSlide">
        <div className="bannerUnderSlideText">
          <h2>
            <b>Subscribe Now for Get Special Features!</b>
          </h2>
          <p>Let's subscribe with us and find the fun.</p>
        </div>
        <button>Subscribe Now</button>
      </div>
    </div>
  );
};

export default InfoUnderMain;
