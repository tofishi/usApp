import Link from 'next/link';
import Image from "next/image";
import styles from "../page.module.css";
import myLocalImage from "../images/logo.png";


const Header = () => {
  return (
    <header id="header-container" className="fullwidth">
    <div id="header">
      <div className="container">
        <div className="left-side">
          <div id="logo">
            <a href="">
              <Image height={50} width={180} src={myLocalImage} alt="" />
            </a>
          </div>
          <nav id="navigation">
            <ul id="responsive">
              <li>
              <Link href="/" className="current">Home</Link>
              </li>
              <li>
              <Link href="/BrowseCompanies" className="">Browse Company</Link>
               
              </li>
              <li>
              <Link href="/single-company-profile" className="">single company profile</Link>
                
              </li>
            </ul>
          </nav>
          <div className="clearfix" />
        </div>
        <div className="right-side">
          <div className="header-widget hide-on-mobile">
            <div className="header-notifications">
              <div className="header-notifications-trigger">
                <a href="#">
                <i class="icon-feather-bell"></i>
                  <span>4</span>
                </a>
              </div>
            </div>
            <div className="header-notifications">
              <div className="header-notifications-trigger">
                <a href="#">
                <i class="icon-feather-mail"></i>
                  <span>3</span>
                </a>
              </div>
            </div>
          </div>
          <span className="mmenu-trigger">
            <button className="hamburger hamburger--collapse" type="button">
              <span className="hamburger-box">
                <span className="hamburger-inner" />
              </span>
            </button>
          </span>
        </div>
      </div>
    </div>
  </header>
  
  );
}

export default Header;