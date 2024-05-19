<template>
  <div class="bottom-header">
    <div class="container">
      <div class="bottom-header-inner d-flex justify-content-between align-items-center">
        <div class="navigation-container d-none d-lg-block">
          <nav id="navigation" class="navigation">
            <ul>
              <li class="menu-active">
                <router-link to="/">Home</router-link>
              </li>
              
              <!-- <li>
                <router-link to="consult">Konsultasi</router-link>
              </li> -->
              <li>
                <router-link to="destination">Contact Us</router-link>
              </li>

              <!-- <li class="menu-item-has-children">
                <a to="">Booking</a>
                <ul>
                  <li>
                    <router-link to="package-common">Konsultasi</router-link>
                  </li>
                  <li>
                    <router-link to="package-promo">Contact Us</router-link>
                  </li>
                </ul>
              </li> -->

              <li class="menu-item-has-children">
                <a to="">Tour</a>
                <ul>
                  <li>
                    <router-link to="package-common">Regular</router-link>
                  </li>
                  <li>
                    <router-link to="package-promo">Promo</router-link>
                  </li>
                  <li>
                    <router-link to="package-detail">Tour Guide</router-link>
                  </li>
                  <li>
                    <router-link to="cart">Destination</router-link>
                  </li>
                </ul>
              </li>
              
              <li class="menu-item-has-children">
                <a to="">Produk</a>
                <ul>
                  <li>
                    <router-link to="package-common">Travel</router-link>
                  </li>
                  <li>
                    <router-link to="package-promo">Rental</router-link>
                  </li>
                  <li>
                    <router-link to="package-detail">Hotel</router-link>
                  </li>
                  <li>
                    <router-link to="cart">Souvenir</router-link>
                  </li>
                  <li>
                    <router-link to="cart">Kuliner</router-link>
                  </li>
                  <li>
                    <router-link to="confirmation">Talent</router-link>
                  </li>
                </ul>
              </li>

              <li class="menu-item-has-children">
                <a to="">Page</a>
                <ul>
                  <li>
                    <router-link to="package-common">About Us</router-link>
                  </li>
                  <li>
                    <router-link to="package-promo">Service</router-link>
                  </li>
                  <li>
                    <router-link to="package-detail">Career</router-link>
                  </li>
                  <li>
                    <router-link to="cart">Gallery</router-link>
                  </li>
                  <li>
                    <router-link to="cart">Testimonial</router-link>
                  </li>
                  <li class="menu-item-has-children">
                    <!-- <a to="" :class="[ 
                      $route.name == 'career' ? 'router-link-exact-active' : '',
                    $route.name == 'career-detail' ? 'router-link-exact-active' : '' ]">Info</a> -->
                    <a>Info</a>
                    <ul>
                      <li>
                        <router-link to="career">Faq</router-link>
                      </li>
                      <li>
                        <router-link to="career-detail">Term & Condition</router-link>
                      </li>
                      <li>
                        <router-link to="career">Privacy Policy</router-link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>


              <li class="menu-item-has-children">
                <a to="">Akun</a>
                <ul>
                  <li class="menu-item-has-children">
                    <!-- <a to="" :class="[ 
                      $route.name == 'career' ? 'router-link-exact-active' : '',
                    $route.name == 'career-detail' ? 'router-link-exact-active' : '' ]">Info</a> -->
                    <a>Transaksi</a>
                    <ul>
                      <li>
                        <router-link to="career">Keranjang</router-link>
                      </li>
                      <li>
                        <router-link to="career-detail">Boooking</router-link>
                      </li>
                      <li>
                        <router-link to="career">Pembayaran</router-link>
                      </li>
                      <li>
                        <router-link to="career">Riwayat</router-link>
                      </li>
                    </ul>
                  </li>
                  <li class="menu-item-has-children">
                    <!-- <a to="" :class="[ 
                      $route.name == 'career' ? 'router-link-exact-active' : '',
                    $route.name == 'career-detail' ? 'router-link-exact-active' : '' ]">Info</a> -->
                    <a>Biodata</a>
                    <ul>
                      <li>
                        <router-link to="career">Profile</router-link>
                      </li>
                      <li>
                        <router-link to="career-detail">Alamat</router-link>
                      </li>
                      <li>
                        <router-link to="career">Company</router-link>
                      </li>
                    </ul>
                  </li>
                  <li class="menu-item-has-children">
                    <!-- <a to="" :class="[ 
                      $route.name == 'career' ? 'router-link-exact-active' : '',
                    $route.name == 'career-detail' ? 'router-link-exact-active' : '' ]">Info</a> -->
                    <a>Partnership</a>
                    <ul>
                      <li>
                        <router-link to="career">Affiliate</router-link>
                      </li>
                      <li>
                        <router-link to="career-detail">Member</router-link>
                      </li>
                      <li>
                        <router-link to="career">Biro Pemasaran</router-link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <router-link to="career-detail">Logout</router-link>
                  </li>
                </ul>
              </li>

              <!-- <li class="menu-item-has-children">
                <a to="">Pages</a>
                <ul>
                  <li>
                    <router-link to="service">Service</router-link>
                  </li>
                  <li class="menu-item-has-children">
                    <a to="" :class="[ 
                      $route.name == 'career' ? 'router-link-exact-active' : '',
                    $route.name == 'career-detail' ? 'router-link-exact-active' : '' ]">Career</a>
                    <ul>
                      <li>
                        <router-link to="career">Career</router-link>
                      </li>
                      <li>
                        <router-link to="career-detail">Career detail</router-link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <router-link to="team">Tour guide</router-link>
                  </li>
                  <li>
                    <router-link to="gallery">Gallery page</router-link>
                  </li>
                  <li v-if="false" class="menu-item-has-children">
                    <a to="/">Blog</a>
                    <ul>
                      <li>
                        <router-link to="blog-archive">Blog archive</router-link>
                      </li>
                      <li>
                        <router-link to="blog-single">blog single</router-link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <router-link to="single-page">Single Page</router-link>
                  </li>
                  <li>
                    <router-link to="testimonial">Testimonial</router-link>
                  </li>
                  <li>
                    <router-link to="faq">Faq Page</router-link>
                  </li>
                  <li>
                    <router-link to="search-page">Search Page</router-link>
                  </li>
                  <li>
                    <router-link to="404">404 Page</router-link>
                  </li>
                  <li>
                    <router-link to="comming-soon">Comming Soon Page</router-link>
                  </li>
                </ul>
              </li> -->
              <!-- <li>
                <router-link to="contact-us">contact us</router-link>
              </li> -->
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<style scope>
a {
  text-decoration: none;
}

.navigation-container ul,
ul {
  font-size: 0;
  list-style: none;
  margin: 0;
  padding: 0;
}

.navigation-container {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  -moz-align-items: center;
  -ms-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.navigation-container .navigation > ul > li {
  display: inline-block;
  padding: 0 16px;
}
.navigation-container ul {
  font-size: 0;
  list-style: none;
  margin: 0;
  padding: 0;
}
.navigation-container ul > li.menu-item-has-children > a:after {
  /* content: "\f0d7"; */
  content: "\e5cf";
}
.navigation-container ul > li:last-child {
  border-bottom: none;
}
.navigation-container ul > li:last-child:before {
  display: none;
}
.navigation-container ul > li > a {
  color: #ffffff;
  display: inline-block;
  font-size: 16px;
  padding: 20px 0;
  font-weight: 400;
  line-height: 1.3;
  position: relative;
  text-transform: uppercase;
  height: 60px;
}
.navigation-container ul > li:hover > ul,
.navigation-container ul > li:focus > ul,
.navigation-container ul > li:active > ul {
  display: block;
}
.navigation-container ul > li:hover > a,
.navigation-container ul > li:focus > a,
.navigation-container ul > li:active > a {
  /* color: #3a78c9; */
}
.navigation-container ul > li:hover > a:after,
.navigation-container ul > li:focus > a:after,
.navigation-container ul > li:active > a:after {
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  transform: rotate(180deg);
}
.navigation-container ul ul {
  background: #ffffff;
  border-top: 4px solid #3a78c9;
  left: 0;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 100%;
  width: 250px;
  z-index: 99;
  display: none;
  text-align: left;
  -webkit-animation: slide-up 0.3s ease-out;
  -moz-animation: slide-up 0.3s ease-out;
  -ms-animation: slide-up 0.3s ease-out;
  -o-animation: slide-up 0.3s ease-out;
  animation: slide-up 0.3s ease-out;
}
.navigation-container ul ul li {
  border-bottom: 1px solid #ddd;
  position: relative;
  display: block;
}
.navigation-container ul ul li a {
  color: #333;
  display: block;
  /* padding: 13px 20px; */
  padding: 20px 20px;
  text-transform: capitalize;
  font-weight: 600;
  -webkit-transition: all 0.4s;
  -moz-transition: all 0.4s;
  -ms-transition: all 0.4s;
  -o-transition: all 0.4s;
  transition: all 0.4s;
}
.navigation-container ul ul li a:hover,
.navigation-container ul ul li a:focus,
.navigation-container ul ul li a:active {
  padding-left: 30px;
  /* color: #3a78c9; */
  color: white;
}
.navigation-container ul ul li > ul {
  left: 100%;
  top: 0;
}
.navigation-container ul ul li.menu-item-has-children > a:after {
  /* content: "\f0da"; */
  content: "\e5cc";
}
.navigation-container ul ul li:hover > ul,
.navigation-container ul ul li:focus > ul,
.navigation-container ul ul li:active > ul {
  display: block;
  top: -3px;
}
.navigation-container ul ul li:hover a:after,
.navigation-container ul ul li:focus a:after,
.navigation-container ul ul li:active a:after {
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  transform: rotate(180deg);
}
.navigation-container ul li {
  position: relative;
}
.navigation-container ul li:last-child ul,
.navigation-container ul li:nth-last-child(2) ul {
  left: auto;
  right: 0;
}
.navigation-container ul li:last-child ul ul,
.navigation-container ul li:nth-last-child(2) ul ul {
  right: 100%;
}
.navigation-container ul li.menu-item-has-children > a {
  position: relative;
}
.navigation-container ul li.menu-item-has-children > a:after {
  display: inline-block;
  float: right;
  font-size: 14px;
  /* font-family: "Font Awesome 5 Free"; */
  font-family: "Material Icons";
  font-weight: 900;
  font-weight: 900;
  margin-left: 8px;
  -webkit-transition: transform 0.4s;
  -moz-transition: transform 0.4s;
  -ms-transition: transform 0.4s;
  -o-transition: transform 0.4s;
  transition: transform 0.4s;
}
.navigation-container ul li.menu-item-has-children li:hover > a,
.navigation-container ul li.menu-item-has-children li:focus > a {
  background-color: #174b90;
  color: #ffffff;
}
.navigation-container ul li.current-menu-item > a,
.navigation-container ul li.current-menu-parent > a,
.navigation-container ul li.menu-active > a {
  /* color: #3a78c9; */
}

/*---  fixed header css ---*/
.bottom-header {
  -webkit-transition: background-color 0.5s ease;
  -moz-transition: background-color 0.5s ease;
  -ms-transition: background-color 0.5s ease;
  -o-transition: background-color 0.5s ease;
  transition: background-color 0.5s ease;
}

@media screen and (min-width: 992px) {
  .fixed-header .bottom-header {
    background-color: #ffffff;
    -webkit-box-shadow: 0 -3px 10px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0 -3px 10px rgba(0, 0, 0, 0.2);
    -ms-box-shadow: 0 -3px 10px rgba(0, 0, 0, 0.2);
    -o-box-shadow: 0 -3px 10px rgba(0, 0, 0, 0.2);
    box-shadow: 0 -3px 10px rgba(0, 0, 0, 0.2);
    position: fixed;
    top: 0;
    width: 100%;
    left: 0;
    z-index: 999;
  }
}
@media screen and (max-width: 991px) {
  .fixed-header .bottom-header {
    background-color: transparent;
    position: relative;
  }
}

@-webkit-keyframes slide-up {
  from {
    -webkit-transform: translateY(10px);
    -moz-transform: translateY(10px);
    -ms-transform: translateY(10px);
    -o-transform: translateY(10px);
    transform: translateY(10px);
  }
  to {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
}
@-moz-keyframes slide-up {
  from {
    -webkit-transform: translateY(10px);
    -moz-transform: translateY(10px);
    -ms-transform: translateY(10px);
    -o-transform: translateY(10px);
    transform: translateY(10px);
  }
  to {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
}
@-o-keyframes slide-up {
  from {
    -webkit-transform: translateY(10px);
    -moz-transform: translateY(10px);
    -ms-transform: translateY(10px);
    -o-transform: translateY(10px);
    transform: translateY(10px);
  }
  to {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
}
@keyframes slide-up {
  from {
    -webkit-transform: translateY(10px);
    -moz-transform: translateY(10px);
    -ms-transform: translateY(10px);
    -o-transform: translateY(10px);
    transform: translateY(10px);
  }
  to {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }
}
</style>
