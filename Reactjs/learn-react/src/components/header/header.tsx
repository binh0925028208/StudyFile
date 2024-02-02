import "./header.css";
const Header = () => {
  return (
    <header>
      <div className="headerLogo">
        <img src="asset/Standard Collection 27.png" alt="" />
        <img src="asset/LaslesVPN.png" alt="" />
      </div>
      <div className="headerNav">
        <p>About</p>
        <p>Feature</p>
        <p>Pricing</p>
        <p>Testimonials</p>
        <p>Help</p>
      </div>
      <div className="headerLogin">
        <p>
          <strong>Sign in</strong>
        </p>
        <button>Sign up</button>
      </div>
    </header>
  );
};
export default Header;
