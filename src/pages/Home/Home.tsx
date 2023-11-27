import "../../../dist/css/main.css";
import {
  facebook,
  hero,
  instagram,
  logo,
  logowhite,
  pintrest,
  showcase1,
  showcase2,
  showcase3,
  twitter,
} from "./images";
import InputField from "./InputField";
import OpenList from "./OpenList";

const Home = () => {
  return (
    <main className="main">
      <div className="container">
        <header>
          <nav className="nav">
            <div>
              <a href="#">
                <img src={logo} alt="" />
              </a>
              <ul className="nav__items">
                <li>
                  <a className="nav__item" href="">
                    Features
                  </a>
                </li>
                <li>
                  <a className="nav__item" href="">
                    Pricing
                  </a>
                </li>
                <li>
                  <a className="nav__item" href="">
                    Resources
                  </a>
                </li>
              </ul>
              <ul className="nav__items--mobile">
                <li>
                  <a className="nav__item" href="">
                    Features
                  </a>
                </li>
                <li>
                  <a className="nav__item" href="">
                    Pricing
                  </a>
                </li>
                <li>
                  <a className="nav__item" href="">
                    Resources
                  </a>
                </li>
                <li>
                  <a className="nav__item" href="">
                    Login
                  </a>
                </li>
                <button>Sign Up</button>
              </ul>
            </div>
            <div>
              <OpenList />
              <ul className="nav__items">
                <li>
                  <a className="nav__item" href="">
                    Login
                  </a>
                </li>
                <button>Sign in</button>
              </ul>
            </div>
          </nav>
        </header>
      </div>

      <section className="hero">
        <div className="container">
          <img src={hero} alt="" />
          <div className="hero__text">
            <h1>More than just shorter links</h1>
            <p>
              Build your brand’s recognition and get detailed insights on how
              your links are performing
            </p>
            <button>Get Started</button>
          </div>
        </div>
      </section>

      <section className="shortly">
        <div className="container ">
          <InputField />
          <div className="container showcase">
            <div className="showcase__texts">
              <h1>Advanced Statistics</h1>
              <p>
                Track how your links are performing across the web with our
                advanced statistics dashboard
              </p>
            </div>

            <div className="showcase__cards">
              <div className="line"></div>
              <div className="showcase__card">
                <span className="showcase__icon">
                  <img src={showcase1} alt="" />
                </span>
                <h1> Brand Recognition</h1>
                <p>
                  Boost your brand recognition with each click. Generic links
                  don’t mean a thing. Branded links help instil confidence in
                  your content
                </p>
              </div>
              <div className="showcase__card">
                <span className="showcase__icon">
                  <img src={showcase2} alt="" />
                </span>
                <h1> Detailed Records</h1>
                <p>
                  Gain insights into who is clicking your links. Knowing when
                  and where people engage with your content helps inform better
                  decisions.
                </p>
              </div>
              <div className="showcase__card">
                <span className="showcase__icon">
                  <img src={showcase3} alt="" />
                </span>
                <h1>Fully Customizable</h1>
                <p>
                  Fully Customizable Improve brand awareness and content
                  discoverability through customizable links, supercharging
                  audience engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="before-footer">
        <h1>Boost Your Links Today</h1>
        <button>Get Started</button>
      </section>

      <footer>
        <div className="container">
          <img width={200} src={logowhite} alt="" />
        </div>

        <div className="keyvalues ">
          <dl>
            <dt>Features</dt>
            <dd> Link Shortening</dd>
            <dd> Branded Links</dd>
            <dd> Analytics</dd>
          </dl>
          <dl>
            <dt> Resources</dt>
            <dd> Blog</dd>
            <dd> Developers</dd>
            <dd> Support</dd>
          </dl>
          <dl>
            <dt> Company </dt>
            <dd>About</dd>
            <dd>Our Team</dd>
            <dd>Career</dd>
            <dd>Contacts</dd>
          </dl>
        </div>
        <div className="footer__icons container">
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
          <img src={pintrest} alt="" />
          <img src={instagram} alt="" />
        </div>
      </footer>
    </main>
  );
};

export default Home;
