import "../css/heroSection.css";

function HeroSection() {
  return (
    <div className="container-fluid hero-section">
      <div className="callToAction">
        <div className="cta-content">
          <h1>Awesome Designs</h1>
          <p>
            Porto is a huge success in the of one of the world's largest
            MarkerPlace
          </p>
        </div>
        <div className="cta-btn">
          <a href="#">Learn More</a>
          <a href="#">
            Get Started now
            <i className="bx bx-right-arrow-alt"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
