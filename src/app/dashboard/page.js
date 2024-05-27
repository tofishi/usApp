import Link from 'next/link';
import Image from "next/image";
import styles from "../page.module.css";
import Home from '../page';
import Header from '../components/header';
import Footer from '../components/footer';
import Sidebar from '../components/sidebar';

const  About = () => {
  return (
    <>
      <Header />
      <div class="dashboard-container">
      <Sidebar />
      <div className="dashboard-content-container" data-simplebar>
		<div className="dashboard-content-inner" >
        <div className="dashboard-headline">
				<h3>Howdy, Tom!</h3>
				<span>We are glad to see you again!</span>
				<nav id="breadcrumbs" className="dark">
					<ul>
						<li><a href="#">Home</a></li>
						<li>Dashboard</li>
					</ul>
				</nav>
			</div>
            <div className="fun-facts-container">
				<div className="fun-fact" data-fun-fact-color="#36bd78">
					<div className="fun-fact-text">
						<span>Task Bids Won</span>
						<h4>22</h4>
					</div>
					<div className="fun-fact-icon bg-green"><i className="icon-material-outline-gavel"></i></div>
				</div>
				<div className="fun-fact" data-fun-fact-color="#b81b7f">
					<div className="fun-fact-text">
						<span>Jobs Applied</span>
						<h4>4</h4>
					</div>
					<div className="fun-fact-icon bg-pink"><i className="icon-material-outline-business-center"></i></div>
				</div>
				<div className="fun-fact" data-fun-fact-color="#efa80f">
					<div className="fun-fact-text">
						<span>Reviews</span>
						<h4>28</h4>
					</div>
					<div className="fun-fact-icon bg-orange"><i className="icon-material-outline-rate-review"></i></div>
				</div>

			
				
			</div>
			
        </div>
        </div>



      </div>
   
    
      <Footer />
    </>
  );
}

export default About;