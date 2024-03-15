import "../css/callToAction.css";

export default function CallToAction() {
  return (
    <>
      <section className="mainCallToAction">
        <div className="container cta-container">
          <div className="mainCTA-content">
            <h2>
              The fastestt way to grow your business with the leader in
              <span className="mainCTA-span"> Technology</span>
            </h2>
            <p>Check out our option and features included.</p>
          </div>
          <div className="mainCTA-btn">
            <a href="#">Get Started now</a>
            <a href="#">or learn more</a>
          </div>
        </div>
      </section>
    </>
  );
}
