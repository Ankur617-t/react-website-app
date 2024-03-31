import imageOne from './assets/img_1.jpg';
import imageTwo from './assets/img_2.jpg';
import imageThree from './assets/img_3.jpg'
const Website = () => {
  return (
    <>
      <header>
        <nav id="menu">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <div id="logo">
          <a href="">Web</a>
        </div>
        <nav id="social-links">
          <ul>
            <li>
              <a href="#">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <div id="main">
        <aside class="">
          <ul>
            <li>
              <a href="">Some Link</a>
            </li>
            <li>
              <a href="">Some Link</a>
            </li>
            <li>
              <a href="">Some Link</a>
            </li>
            <li>
              <a href="">Some Link</a>
            </li>
            <li>
              <a href="">Some Link</a>
            </li>
            <li>
              <a href="">Some Link</a>
            </li>
          </ul>
          <img src={imageOne}></img>
        </aside>
        <article className="">
          <h2>Welcome to our Website</h2>
          <p>
            Explain Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Maxime mollitia, molestiae quas vel sint commodi repudiandae
            consequuntur voluptatum laborum numquam blanditiis harum quisquam
            eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!
            Provident similique accusantium nemo autem. Veritatis obcaecati
            tenetur iure eius earum ut molestias architecto voluptate aliquam
            nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat,
            odit, tenetur error,
          </p>
          <h2>Our Services</h2>
          <div className="services-container">
            <div className="service-box">
              <div className="service-img">
                <img src={imageOne} alt=""></img>
              </div>
              <div className="service-title">
                <h3>Web Design</h3>
              </div>
              <div className="service-description">
                <p>
                  Explain Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Maxime mollitia, molestiae quas vel sint commodi
                  repudiandae consequuntur voluptatum laborum numquam
                </p>
              </div>
              <div className="call-to-action">
                <a href=""> Read More</a>
              </div>
            </div>
            <div className="service-box">
              <div className="service-img">
                <img src={imageTwo} alt=""></img>
              </div>
              <div className="service-title">
                <h3>Web Design</h3>
              </div>
              <div className="service-description">
                <p>
                  Explain Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Maxime mollitia, molestiae quas vel sint commodi
                  repudiandae consequuntur voluptatum laborum numquam
                </p>
              </div>
              <div className="call-to-action">
                <a href=""> Read More</a>
              </div>
            </div>
            <div className="service-box">
              <div className="service-img">
                <img src={imageThree} alt=""></img>
              </div>
              <div className="service-title">
                <h3>Web Development</h3>
              </div>
              <div className="service-description">
                <p>
                  Explain Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Maxime mollitia, molestiae quas vel sint commodi
                  repudiandae consequuntur voluptatum laborum numquam
                </p>
              </div>
              <div className="call-to-action">
                <a href=""> Read More</a>
              </div>
            </div>
          </div>
        </article>
        
      </div>
      <footer>
            Made by Me
        </footer>
    </>
  );
};

export default Website;
