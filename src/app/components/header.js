'use client'
import { useState, useRef, useEffect } from 'react';

import Link from 'next/link';
import Image from "next/image";
import styles from "../page.module.css";
import myLocalImage from "../images/logo.png";
import userImg from "../images/user-avatar-small-01.jpg";
import $ from 'jquery';


const Header = () => {
 
// for dropdown

const [isActive, setIsActive] = useState(false);
  const userMenuRef = useRef(null);

  const handleUserMenuTriggerClick = (event) => {
    event.preventDefault();
    setIsActive(!isActive);
  };

  const handleClickOutside = (event) => {
    if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    if (isActive) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isActive]);

  // end for drop down




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
              <Link href="#" >
                <i className="icon-feather-bell"></i>
                  <span>4</span>
                </Link>
              </div>
            </div>
            <div className="header-notifications">
              <div className="header-notifications-trigger">
              <Link href="#">
                <i className="icon-feather-mail"></i>
                  <span>3</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="header-widget">

					
					<div className="header-notifications user-menu"  onClick={handleUserMenuTriggerClick}>
						<div className="header-notifications-trigger">
							<a href="#"><div className="user-avatar status-online"><Image width={42} height={42}  src={userImg} alt="" /></div></a>
						</div>

						{isActive && ( 
						<div className="header-notifications-dropdown">

							
							<div className="user-status">

								
								<div className="user-details">
									<div className="user-avatar status-online"><Image width={42} height={42}  src={userImg} alt="" /></div>
									<div className="user-name">
										Tom Smith <span>Freelancer</span>
									</div>
								</div>
								
								
								<div className="status-switch" id="snackbar-user-status" >
									<label className="user-online current-status">Online</label>
									<label className="user-invisible">Invisible</label>
									
									<span className="status-indicator" aria-hidden="true"></span>
								</div>	
						</div>
						
						<ul className="user-menu-small-nav">
							<li><Link href="/dashboard"><i className="icon-material-outline-dashboard"></i> Dashboard</Link></li>
							<li><Link href="#" ><i className="icon-material-outline-settings"></i> Settings</Link></li>
							<li><Link href="#" ><i className="icon-material-outline-power-settings-new"></i> Logout</Link></li>
						</ul>

						</div>
) }

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