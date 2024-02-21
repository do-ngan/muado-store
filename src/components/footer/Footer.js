import logo from "../../components/assets/images/logo.svg";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container grid2">
          <div>
            <img src={logo} alt="" />

            <div className="e_flex">
              <i class="fa-brands fa-facebook fa-xl"></i>
              <i class="fa-brands fa-youtube fa-xl"></i>
              <i class="fa-brands fa-instagram fa-xl"></i>
              <i class="fa-brands fa-twitter fa-xl"></i>
              <i class="fa-brands fa-tiktok fa-xl"></i>
            </div>
          </div>

          <div>
            <h2>About Us</h2>
            <ul>
              <li>Brand Identity</li>
              <li>Careers</li>
              <li>Press Room</li>
              <li>Privacy Protection</li>
              <li>Gives Back</li>
            </ul>
          </div>
          <div>
            <h2>Customer Support</h2>
            <ul>
              <li>Customer Help </li>
              <li>Order Help</li>
              <li>Shipping & Handling </li>
              <li>Track My Order</li>
              <li>Gift Cards & E-Cards</li>
            </ul>
          </div>
          <div>
            <h2>Keep In Touch</h2>
            <ul>
              <li>123 Tran Hung Dao, Ho Chi Minh City </li>
              <li>Email: support@muado.com</li>
              <li>Phone: +84 123 456 780</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
