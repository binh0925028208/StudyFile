import "./bannerUnderInfo.css";

const BannerUnderInfo = () => {
  return (
    <div className="banner2">
      <div className="banner2Img">
        <img src="asset/4.jpg" alt="" />
      </div>
      <div className="banner2Info">
        <h3>
          <strong>We Provide Many Features You Can Use</strong>
        </h3>
        <p>
          You can explore the features that we provide with fun and have their
          own functions each feature.
        </p>
        <div className="checkText">
          <div className="banner2TinyText">
            <img src="asset/check.png" alt="" />
            <p>Powerfull online protection.</p>
          </div>
          <div className="banner2TinyText">
            <img src="asset/check.png" alt="" />
            <p>Internet without borders.</p>
          </div>
          <div className="banner2TinyText">
            <img src="asset/check.png" alt="" />
            <p>Supercharged VPN</p>
          </div>
          <div className="banner2TinyText">
            <img src="asset/check.png" alt="" />
            <p>No specific time limits.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerUnderInfo;
