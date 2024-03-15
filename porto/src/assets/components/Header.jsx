import logoDefault from "../images/logoDefault.png";
import "bootstrap/js/dist/collapse";
import "../css/header.css";
export default function Header() {
  return (
    <section>
      <header id="header" className="">
        <div className="header-row container">
          <div className="row">
            <header className="d-flex justify-content-between">
              <div className="header-left">
                <div className="logo">
                  <a className="d-block" href="#">
                    <img className="img-fluid" src={logoDefault} alt="logo" />
                  </a>
                </div>
              </div>
              <div className="header-right d-flex justify-content-between">
                <div className="menu-list">
                  <ul className="d-flex justify-content-evenly">
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Elements</a>
                    </li>
                    <li>
                      <a href="#">Features</a>
                    </li>
                    <li>
                      <a href="#">Pages</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    <li>
                      <a href="#">Portfolio</a>
                    </li>
                    <li>
                      <a href="#">Buy Porto!</a>
                    </li>
                  </ul>
                </div>
                <div className="social-list">
                  <i className="bx bxl-facebook"></i>
                  <i className="bx bxl-twitter"></i>
                  <i className="bx bxl-linkedin"></i>
                </div>
              </div>
            </header>
          </div>
        </div>
      </header>
    </section>
  );
}
