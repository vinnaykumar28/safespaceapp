import React, { Component } from "react";
import NavBar from '../Component/NavBar';
class HomePage extends Component {
  
  render() {
    return (
      <div>
        <div>
          <NavBar/>
        </div>
        <div class="simple-slider">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide"><div className="welcome">Welcome {localStorage.getItem('user')}</div></div>
            </div>
          </div>
        </div>
        <div class="highlight-phone">
          <div class="container">
            <div class="row">
              <div class="col-md-8">
                <div class="intro">
                  <h2>Highlight</h2>
                  <p>
                    Nunc luctus in metus eget fringilla. Aliquam sed justo
                    ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae.
                    Aliqua sed justo ligula.
                  </p>
                  <a class="btn btn-primary" role="button" href="#">
                    Action Button
                  </a>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="d-none d-md-block iphone-mockup">
                  <img src="assets/img/iphone.svg" class="device" />
                  <div class="screen"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="features-boxed">
          <div class="container">
            <div class="intro">
              <h2 class="text-center">Features </h2>
              <p class="text-center">
                Nunc luctus in metus eget fringilla. Aliquam sed justo ligula.
                Vestibulum nibh erat, pellentesque ut laoreet vitae.
              </p>
            </div>
            <div class="row justify-content-center features">
              <div class="col-sm-6 col-md-5 col-lg-4 item">
                <div class="box">
                  <i class="fa fa-map-marker icon"></i>
                  <h3 class="name">Works everywhere</h3>
                  <p class="description">
                    Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                    lacus. Praesent aliquam in tellus eu.
                  </p>
                  <a href="#" class="learn-more">
                    Learn more »
                  </a>
                </div>
              </div>
              <div class="col-sm-6 col-md-5 col-lg-4 item">
                <div class="box">
                  <i class="fa fa-clock-o icon"></i>
                  <h3 class="name">Always available</h3>
                  <p class="description">
                    Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                    lacus. Praesent aliquam in tellus eu.
                  </p>
                  <a href="#" class="learn-more">
                    Learn more »
                  </a>
                </div>
              </div>
              <div class="col-sm-6 col-md-5 col-lg-4 item">
                <div class="box">
                  <i class="fa fa-list-alt icon"></i>
                  <h3 class="name">Customizable </h3>
                  <p class="description">
                    Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                    lacus. Praesent aliquam in tellus eu.
                  </p>
                  <a href="#" class="learn-more">
                    Learn more »
                  </a>
                </div>
              </div>
              <div class="col-sm-6 col-md-5 col-lg-4 item">
                <div class="box">
                  <i class="fa fa-eye icon"></i>
                  <h3 class="name">Organic </h3>
                  <p class="description">
                    Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                    lacus. Praesent aliquam in tellus eu.
                  </p>
                  <a href="#" class="learn-more">
                    Learn more »
                  </a>
                </div>
              </div>
              <div class="col-sm-6 col-md-5 col-lg-4 item">
                <div class="box">
                  <i class="fa fa-plane icon"></i>
                  <h3 class="name">Fast </h3>
                  <p class="description">
                    Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                    lacus. Praesent aliquam in tellus eu.
                  </p>
                  <a href="#" class="learn-more">
                    Learn more »
                  </a>
                </div>
              </div>
              <div class="col-sm-6 col-md-5 col-lg-4 item">
                <div class="box">
                  <i class="fa fa-phone icon"></i>
                  <h3 class="name">Mobile-first</h3>
                  <p class="description">
                    Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                    lacus. Praesent aliquam in tellus eu.
                  </p>
                  <a href="#" class="learn-more">
                    Learn more »
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="photo-gallery">
          <div class="container">
            <div class="intro">
              <h2 class="text-center">Lightbox Gallery</h2>
              <p class="text-center">
                Nunc luctus in metus eget fringilla. Aliquam sed justo ligula.
                Vestibulum nibh erat, pellentesque ut laoreet vitae.{" "}
              </p>
            </div>
          </div>
          <div class="container">
            <div class="row flex-box flex-wrap-wrap">
              <div class="col-sm-4 flex-box flex-justify-center flex-align-center">
                <a
                  href="assets/img/hero-background-nature.jpg"
                  class="fancybox"
                  rel="gallery1"
                  title="Hero Image Nature"
                >
                  <img
                    class="img-fluid"
                    src="assets/img/hero-background-nature.jpg"
                  />
                </a>
              </div>
              <div class="col-sm-4 flex-box flex-justify-center flex-align-center">
                <a
                  href="assets/img/hero-background-technology.jpg"
                  class="fancybox"
                  rel="gallery1"
                  title="Hero Image Technology"
                >
                  <img
                    class="img-fluid"
                    src="assets/img/hero-background-technology.jpg"
                  />
                </a>
              </div>
              <div class="col-sm-4 flex-box flex-justify-center flex-align-center">
                <a
                  href="assets/img/hero-background-travel.jpg"
                  class="fancybox"
                  rel="gallery1"
                  title="Hero Image Travel"
                >
                  <img
                    class="img-fluid"
                    src="assets/img/hero-background-travel.jpg"
                  />
                </a>
              </div>
              <div class="col-sm-4 flex-box flex-justify-center flex-align-center">
                <a
                  href="assets/img/hero-background-food.jpg"
                  class="fancybox"
                  rel="gallery1"
                  title="Hero Image Food"
                >
                  <img
                    class="img-fluid"
                    src="assets/img/hero-background-food.jpg"
                  />
                </a>
              </div>
              <div class="col-sm-4 flex-box flex-justify-center flex-align-center">
                <a
                  href="assets/img/hero-background-music.jpg"
                  class="fancybox"
                  rel="gallery1"
                  title="Hero Image Music"
                >
                  <img
                    class="img-fluid"
                    src="assets/img/hero-background-music.jpg"
                  />
                </a>
              </div>
              <div class="col-sm-4 flex-box flex-justify-center flex-align-center">
                <a
                  href="assets/img/hero-background-photography.jpg"
                  class="fancybox"
                  rel="gallery1"
                  title="Hero Image Photography"
                >
                  <img
                    class="img-fluid"
                    src="assets/img/hero-background-photography.jpg"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="article-list">
          <div class="container">
            <div class="intro">
              <h2 class="text-center">Latest Articles</h2>
              <p class="text-center">
                Nunc luctus in metus eget fringilla. Aliquam sed justo ligula.
                Vestibulum nibh erat, pellentesque ut laoreet vitae.{" "}
              </p>
            </div>
            <div class="row articles">
              <div class="col-sm-6 col-md-4 item">
                <a href="#">
                  <img class="img-fluid" src="assets/img/desk.jpg" />
                </a>
                <h3 class="name">Article Title</h3>
                <p class="description">
                  Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                  lacus. Praesent aliquam in tellus eu gravida. Aliquam varius
                  finibus est, interdum justo suscipit id.
                </p>
                <a href="#" class="action">
                  <i class="fa fa-arrow-circle-right"></i>
                </a>
              </div>
              <div class="col-sm-6 col-md-4 item">
                <a href="#">
                  <img class="img-fluid" src="assets/img/building.jpg" />
                </a>
                <h3 class="name">Article Title</h3>
                <p class="description">
                  Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                  lacus. Praesent aliquam in tellus eu gravida. Aliquam varius
                  finibus est, interdum justo suscipit id.
                </p>
                <a href="#" class="action">
                  <i class="fa fa-arrow-circle-right"></i>
                </a>
              </div>
              <div class="col-sm-6 col-md-4 item">
                <a href="#">
                  <img class="img-fluid" src="assets/img/loft.jpg" />
                </a>
                <h3 class="name">Article Title</h3>
                <p class="description">
                  Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                  lacus. Praesent aliquam in tellus eu gravida. Aliquam varius
                  finibus est, interdum justo suscipit id.
                </p>
                <a href="#" class="action">
                  <i class="fa fa-arrow-circle-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-dark">
          <footer>
            <div class="container">
              <div class="row">
                <div class="col-sm-6 col-md-3 item">
                  <h3>Services</h3>
                  <ul>
                    <li>
                      <a href="#">Web design</a>
                    </li>
                    <li>
                      <a href="#">Development</a>
                    </li>
                    <li>
                      <a href="#">Hosting</a>
                    </li>
                  </ul>
                </div>
                <div class="col-sm-6 col-md-3 item">
                  <h3>About</h3>
                  <ul>
                    <li>
                      <a href="#">Company</a>
                    </li>
                    <li>
                      <a href="#">Team</a>
                    </li>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                  </ul>
                </div>
                <div class="col-md-6 item text">
                  <h3>Company Name</h3>
                  {/* <p>
                    Praesent sed lobortis mi. Suspendisse vel placerat ligula.
                    Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam
                    quis tristique lectus. Aliquam in arcu eget velit pulvinar
                    dictum vel in justo.
                  </p> */}
                </div>
                <div class="col item social">
                  <a href="#">
                    <i class="icon ion-social-facebook"></i>
                  </a>
                  <a href="#">
                    <i class="icon ion-social-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="icon ion-social-snapchat"></i>
                  </a>
                  <a href="#">
                    <i class="icon ion-social-instagram"></i>
                  </a>
                </div>
              </div>
              <p class="copyright">Company Name © 2017</p>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default HomePage;
