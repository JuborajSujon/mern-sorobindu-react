import "../css/stickyMenu.css";
export default function StickyMenu() {
  return (
    <>
      <div className="sticky-menu">
        <a href="#">
          <i className="bx bx-cart-add"></i>
          Buy Now
        </a>
        <a href="#">
          <i className="bx bx-heart"></i>
          Prebuilts
        </a>
        <a href="#">
          <i className="bx bx-search"></i>
          Studios
        </a>
      </div>
    </>
  );
}
