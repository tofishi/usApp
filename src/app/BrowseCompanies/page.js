import  "../bootstrap.css";
import  "../icons.css";
import Header from '../components/header';
import Footer from '../components/footer';
import Image from "next/image";
import comp1 from "../images/company-logo-placeholder.png";
import comp2 from "../images/browse-companies-02.png";
import comp3 from "../images/browse-companies-03.png";
import comp4 from "../images/browse-companies-04.png";
const  Singlecompanyprofile = () => {
  return (
    <>
      <Header />
      
      <div id="titlebar" className="gradient">
	<div className="container">
		<div className="row">
			<div className="col-md-12">

				<h2>Browse Companies</h2>

				
				<nav id="breadcrumbs" className="dark">
					<ul>
						<li><a href="#">Home</a></li>
						<li><a href="#">Find Work</a></li>
						<li>Browse Companies</li>
					</ul>
				</nav>

			</div>
		</div>
	</div>
</div>
<div className="container">
	<div className="row">
		<div className="col-xl-12">
			<div className="letters-list">
				<a href="#" className="current">A</a>
				<a href="#">B</a>
				<a href="#">C</a>
				<a href="#">D</a>
				<a href="#">E</a>
				<a href="#">F</a>
				<a href="#">G</a>
				<a href="#">H</a>
				<a href="#">I</a>
				<a href="#">J</a>
				<a href="#">K</a>
				<a href="#">L</a>
				<a href="#">M</a>
				<a href="#">N</a>
				<a href="#">O</a>
				<a href="#">P</a>
				<a href="#">Q</a>
				<a href="#">R</a>
				<a href="#">S</a>
				<a href="#">T</a>
				<a href="#">U</a>
				<a href="#">V</a>
				<a href="#">W</a>
				<a href="#">X</a>
				<a href="#">Y</a>
				<a href="#">Z</a>
			</div>
		</div>
		<div className="col-xl-12">
			<div className="companies-list">
				<a href="single-company-profile.html" className="company">
					<div className="company-inner-alignment">
						<span className="company-logo"><Image src={comp1} alt="" height={60} /></span>
						<h4>Acra</h4>
						<div className="star-rating" data-rating="3.5"><i className="fas fa-star "></i><i className="fas fa-star "></i><i className="fas fa-star "></i><i className="fas fa-star-half-alt"></i><i className="far fa-star"></i></div>
					</div>
				</a>
				<a href="single-company-profile.html" className="company">
					<div className="company-inner-alignment">
						<span className="company-logo"><Image src={comp2} alt="" height={60} /></span>
						<h4>Acue</h4>
						<div className="star-rating" data-rating="5.0"><i className="fas fa-star "></i><i className="fas fa-star "></i><i className="fas fa-star "></i><i className="fas fa-star "></i><i className="fas fa-star "></i></div>
					</div>
				</a>
				<a href="single-company-profile.html" className="company">
					<div className="company-inner-alignment">
						<span className="company-logo"><Image src={comp3} alt="" height={60} /></span>
						<h4>Acorta</h4>
						<span className="company-not-rated">Minimum of 3 votes required</span>
					</div>
				</a>
				<a href="single-company-profile.html" className="company">
					<div className="company-inner-alignment">
						<span className="company-logo"><Image src={comp1} alt="" height={60} /></span>
						<h4>Acuneol</h4>
						<span className="company-not-rated">Minimum of 3 votes required</span>
					</div>
				</a>
				<a href="single-company-profile.html" className="company">
					<div className="company-inner-alignment">
						<span className="company-logo"><Image src={comp4} alt="" height={60} /></span>
						<h4>Acodia</h4>
						<div className="star-rating" data-rating="4.9"><i className="fas fa-star "></i><i className="fas fa-star "></i><i className="fas fa-star "></i><i className="fas fa-star "></i><i className="fas fa-star "></i></div>
					</div>
				</a>
				<a href="single-company-profile.html" className="company">
					<div className="company-inner-alignment">
						<span className="company-logo"><Image src={comp1} alt="" height={60} /></span>
						<h4>Acagic</h4>
						<span className="company-not-rated">Minimum of 3 votes required</span>
					</div>
				</a>
			</div>
		</div>
	</div>
</div>


    
      <Footer />
    </>
  );
}

export default Singlecompanyprofile;