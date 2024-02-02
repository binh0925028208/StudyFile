import "./main.css";

const Main = () => {
  return (
    <div className="main">
      <h2>
        <strong>Choose Your Plan</strong>
      </h2>
      <p>
        Let's choose the package that is best for you and explore it happily and
        cheerfully.
      </p>
      <div className="userOption">
        <div className="userOptionBox">
          <img className="userOptionBoxImg" src="asset/5.jpg" alt="" />
          <h3>
            <strong>Free Plan</strong>
          </h3>
          <div className="userOptionInfoText">
            <div className="tinyCheckInfo">
              <img src="asset/jam_check.png" alt="" />
              <p>Unlimited Bandwitch</p>
            </div>
            <div className="tinyCheckInfo">
              <img src="asset/jam_check.png" alt="" />
              <p>Encrypted Connection</p>
            </div>
            <div className="tinyCheckInfo">
              <img src="asset/jam_check.png" alt="" />
              <p>No Traffic Logs</p>
            </div>
            <div className="tinyCheckInfo">
              <img src="asset/jam_check.png" alt="" />
              <p>Works on All Devices</p>
            </div>
          </div>
          <div className="userOptionBtn">
            <h2>
              <strong>Free</strong>
            </h2>
            <button>
              <strong>Select</strong>
            </button>
          </div>
        </div>
        <div className="userOptionBox">
          <img className="userOptionBoxImg" src="asset/5.jpg" alt="" />
          <h3>
            <strong>Standard Plan</strong>
          </h3>
          <div className="userOptionInfoText">
            <div className="tinyCheckInfo">
              <img src="asset/jam_check.png" alt="" />
              <p>Unlimited Bandwitch</p>
            </div>
            <div className="tinyCheckInfo">
              <img src="asset/jam_check (1).png" alt="" />
              <p>Encrypted Connection</p>
            </div>
            <div className="tinyCheckInfo">
              <img src="asset/jam_check.png" alt="" />
              <p>No Traffic Logs</p>
            </div>
            <div className="tinyCheckInfo">
              <img src="asset/jam_check.png" alt="" />
              <p>Works on All Devices</p>
            </div>
            <div className="tinyCheckInfo">
              <img src="asset/jam_check.png" alt="" />
              <p>Connect Anyware</p>
            </div>
          </div>
          <div className="userOptionBtn">
            <h2>
              <strong>$9</strong>
              <span> / mo</span>
            </h2>
            <button>
              <strong>Select</strong>
            </button>
          </div>
        </div>
        <div className="userOptionBox">
          <img className="userOptionBoxImg" src="asset/5.jpg" alt="" />
          <h3>
            <strong>Premium Plan</strong>
          </h3>
          <div className="userOptionInfoText">
            <div className="tinyCheckInfo">
              <img src="asset/jam_check.png" alt="" />
              <p>Unlimited Bandwitch</p>
            </div>
            <div className="tinyCheckInfo">
              <img src="asset/jam_check.png" alt="" />
              <p>Encrypted Connection</p>
            </div>
            <div className="tinyCheckInfo">
              <img src="asset/jam_check.png" alt="" />
              <p>No Traffic Logs</p>
            </div>
            <div className="tinyCheckInfo">
              <img src="asset/jam_check.png" alt="" />
              <p>Works on All Devices</p>
            </div>
            <div className="tinyCheckInfo">
              <img src="asset/jam_check.png" alt="" />
              <p>Get New Features</p>
            </div>
          </div>
          <div className="userOptionBtn">
            <h2>
              <strong>$12</strong>
              <span> / mo</span>
            </h2>
            <button>
              <strong>Select</strong>
            </button>
          </div>
        </div>
      </div>
      <div className="golbalVpn">
        <h2>
          <strong>Huge Global Network of Fast VPN</strong>
        </h2>
        <p>
          See <strong>LaslesVPN</strong> everywhere to make it easier for you
          when you move locations.
        </p>
        <div className="map">
          <img src="asset/6.jpg" alt="" />
        </div>
        <div className="social">
          <img
            src="asset/z4950810606051_3f26ea22a1dd64eeec5bb8e3a7dc3257.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
