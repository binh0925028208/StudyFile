import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="leftFooter">
        <div className="logoFooter">
          <img src="asset/Standard Collection 27.png" alt="" />
          <img src="asset/LaslesVPN.png" alt="" />
        </div>
        <p className="footerText">
          <strong>LaslesVPN</strong> is a private virtual network that has
          unique features and has high security.
        </p>
        <div className="socialFooter">
          <img src="asset/f.png" alt="" />
          <img src="asset/t.png" alt="" />
          <img src="asset/i.png" alt="" />
        </div>
        <p className="footerCopyright">©2020LaslesVPN</p>
      </div>
      <div className="rightFooter">
        <div className="footerMiniBox">
          <h4>
            <strong>Product</strong>
          </h4>
          <div className="footerMiniTag">
            <p>Download</p>
            <p>Pricing</p>
            <p>Locations</p>
            <p>Server</p>
            <p>Countries</p>
            <p>Blog</p>
          </div>
        </div>
        <div className="footerMiniBox">
          <h4>
            <strong>Engage</strong>
          </h4>
          <div className="footerMiniTag">
            <p>LaslesVPN ? </p>
            <p>FAQ</p>
            <p>Tutorials</p>
            <p>About Us</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
        </div>
        <div className="footerMiniBox">
          <h4>
            <strong>Earn Money</strong>
          </h4>
          <div className="footerMiniTag">
            <p>Affiliate</p>
            <p>Become Partner</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
