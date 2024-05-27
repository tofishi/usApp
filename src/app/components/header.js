'use client'
import React, { useEffect } from 'react'
import Link from 'next/link';
import Image from "next/image";
import styles from "../page.module.css";
import myLocalImage from "../images/logo.png";
import userImg from "../images/user-avatar-small-01.jpg";
import $ from 'jquery';


const Header = () => {
  useEffect(() => {
    $("#logo").hide();
  }, []);
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
          <div className="header-widget">

					
					<div className="header-notifications user-menu">
						<div className="header-notifications-trigger">
							<a href="#"><div className="user-avatar status-online"><Image width={42} height={42}  src={userImg} alt="" /></div></a>
						</div>

						
						<div className="header-notifications-dropdown">

							
							<div className="user-status">

								
								<div className="user-details">
									<div className="user-avatar status-online"><Image width={42} height={42}  src={userImg} alt="" /></div>
									<div className="user-name">
										Tom Smith <span>Freelancer</span>
									</div>
								</div>
								
								
								<div className="status-switch" id="snackbar-user-status">
									<label className="user-online current-status">Online</label>
									<label className="user-invisible">Invisible</label>
									
									<span className="status-indicator" aria-hidden="true"></span>
								</div>	
						</div>
						
						<ul className="user-menu-small-nav">
							<li><a href="dashboard.html"><i className="icon-material-outline-dashboard"></i> Dashboard</a></li>
							<li><a href="dashboard-settings.html"><i className="icon-material-outline-settings"></i> Settings</a></li>
							<li><a href="index-logged-out.html"><i className="icon-material-outline-power-settings-new"></i> Logout</a></li>
						</ul>

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