import "./css/Header.css";

export default function Header() {
  return (
    <header>
      <div className="header-div-1">
        <div className="nav-left">
          <div className="div-logo">
            <a className="logo-link" href="https://www.amazon.com/">
              <img
                className="logo-img"
                src="src\images\Amazon Logo.webp"
                alt="Amazon Logo"
              ></img>
            </a>
          </div>
          <div className="location-div">
            <div className="location-logo">
              <img
                className="location-img"
                src="src\images\Location Logo.png"
              ></img>
            </div>
            <div className="location-text">
              <span className="location-text-1">Deliver to</span>
              <span className="location-text-2">Pakistan</span>
            </div>
          </div>
        </div>
        <div className="search-div-1">
          <div className="search-div-2">
            <form className="search-form">
              <div className="search-left">
                <span className="search-category">All</span>
                <p className="category-down-arrow">&#9660;</p>
              </div>
              <input
                type="text"
                className="search-input"
                placeholder="Search Amazon"
              />
              <div className="search-right">
                <img
                  className="search-icon"
                  src="src\images\Search Icon.png"
                  alt="Search Icon"
                ></img>
              </div>
            </form>
          </div>
        </div>
        <div className="nav-right">
          <div className="nav-country">
            <div className="nav-country-div">
              <div className="nav-country-center">
                <img
                  className="nav-country-icon"
                  src="src\images\USA Flag.png"
                  alt="Country Icon"
                />
                <span className="nav-country-text">EN</span>
              </div>
            </div>
            <p className="country-down-arrow">&#9660;</p>
          </div>
          <div className="sign-div">
            <div className="sign-div-2">
              <div className="sign-text">
                <span className="sign-text-1">Hello, Sign in</span>
                <span className="sign-text-2">Account & Lists</span>
              </div>
            </div>
            <p className="sign-down-arrow">&#9660;</p>
          </div>
          <div className="order-div">
            <div className="order-div-2">
              <span className="order-text">Returns</span>
              <span className="order-text-2">& Orders</span>
            </div>
          </div>
          <div className="cart-div">
            <div className="cart-div-2">
              <span className="cart-0">0</span>
              <img
                className="cart-logo"
                src="src/images/Cart Logo.png"
                alt="Cart Icon"
              />
            </div>
            <span className="cart-text">Cart</span>
          </div>
        </div>
      </div>
      <div className="header-div-2">
        <div className="all-div">
          <img
            className="line-logo"
            src="src\images\3 Line Logo.png"
            alt="All Logo"
          />
          <span className="all-text">All</span>
        </div>
        <div className="header-2-list">
          <ul className="header-2-ul">
            <li className="header-2-li">Today's Deals</li>
            <li className="header-2-li">Prime Video</li>
            <li className="header-2-li">Registry</li>
            <li className="header-2-li">Customer Service</li>
            <li className="header-2-li">Gift Cards</li>
            <li className="header-2-li">Sell</li>
          </ul>
        </div>
      </div>
    </header>
  );
}
