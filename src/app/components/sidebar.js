import Link from 'next/link';
import Image from "next/image";
import styles from "../page.module.css";
import myLocalImage from "../images/logo.png";


const Sidebar = () => {
  return (
    <div className="dashboard-sidebar">
		<div className="dashboard-sidebar-inner" data-simplebar>
			<div className="dashboard-nav-container">

				
				<a href="#" className="dashboard-responsive-nav-trigger">
					<span className="hamburger hamburger--collapse" >
						<span className="hamburger-box">
							<span className="hamburger-inner"></span>
						</span>
					</span>
					<span className="trigger-title">Dashboard Navigation</span>
				</a>
				
				
				<div className="dashboard-nav">
					<div className="dashboard-nav-inner">

						<ul data-submenu-title="Start">
						
							<li className="active"><Link href="/dashboard" className=""><i className="icon-material-outline-dashboard"></i> Dashboard</Link></li>
							<li><Link href="/dashboard" className=""><i className="icon-material-outline-question-answer"></i> Messages <span className="nav-tag">2</span></Link></li>
							<li><Link href="/Form" className=""><i className="icon-material-outline-assignment"></i> Form </Link></li>
							
						</ul>
						
						
						
					</div>
				</div>
				

			</div>
		</div>
	</div>
  
  );
}

export default Sidebar;