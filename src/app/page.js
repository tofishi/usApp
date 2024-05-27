import Image from "next/image";
import Link from 'next/link';
import  "./bootstrap.css";
import  "./icons.css";
import styles from "./page.module.css";
import f1Img from "./images/company-logo-01.png";
import Header from "./components/header"
import Footer from "./components/footer"
import Categories from "./components/Categories"

const  Home = () => {
 
  return (
    <main >
      <Header />
      
      <>
  <div
    className="intro-banner"
    
  >
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="banner-headline">
            <h3>
              <strong>Hire experts or be hired for any job, any time.</strong>
              <br />
              <span>
                Thousands of small businesses use{" "}
                <strong className="color">Hireo</strong> to turn their ideas
                into reality.
              </span>
            </h3>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="intro-banner-search-form">
            <div className="intro-search-field with-autocomplete">
              <label
                htmlFor="autocomplete-input"
                className="field-title ripple-effect"
              >
                Where?
              </label>
              <div className="input-with-icon">
                <input
                  id="autocomplete-input"
                  type="text"
                  placeholder="Online Job"
                />
                <i className="icon-material-outline-location-on"></i>
              </div>
            </div>
            <div className="intro-search-field">
              <label
                htmlFor="intro-keywords"
                className="field-title ripple-effect"
              >
                What job you want?
              </label>
              <input
                id="intro-keywords"
                type="text"
                placeholder="Job Title or Keywords"
              />
            </div>
            <div className="intro-search-button">
              <button className="button ripple-effect">Search</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <ul className="intro-stats hide-under-992px">
            <li>
              <strong className="counter">1,586</strong>
              <span>Jobs Posted</span>
            </li>
            <li>
              <strong className="counter">3,543</strong>
              <span>Tasks Posted</span>
            </li>
            <li>
              <strong className="counter">1,232</strong>
              <span>Freelancers</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <Categories />
  <div className="section gray ">
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <div className="section-headline ">
            <h3>Featured Jobs</h3>
            <a href="#" className="headline-link">
              Browse All Jobs
            </a>
          </div>
          <div className="listings-container compact-list-layout ">
            <a href="#" className="job-listing with-apply-button">
              <div className="job-listing-details">
                <div className="job-listing-company-logo">
                  
                  <Image height={50} width={180} src={f1Img} alt="" />
                </div>
                <div className="job-listing-description">
                  <h3 className="job-listing-title">
                    Bilingual Event Support Specialist
                  </h3>
                  <div className="job-listing-footer">
                    <ul>
                      <li>
                        <i className="icon-material-outline-business"></i> Hexagon{" "}
                        <div
                          className="verified-badge"
                          title="Verified Employer"
                          data-tippy-placement="top"
                        />
                      </li>
                      <li>
                        <i className="icon-material-outline-location-on"></i> San Francissco
                      </li>
                      <li>
                        <i className="icon-material-outline-business-center"></i> Full Time
                      </li>
                      <li>
                        <i className="icon-material-outline-access-time"></i> 2 days ago
                      </li>
                    </ul>
                  </div>
                </div>
                <span className="list-apply-button ripple-effect">
                  Apply Now
                </span>
              </div>
            </a>
            <a href="#" className="job-listing with-apply-button">
              <div className="job-listing-details">
                <div className="job-listing-company-logo">
                <Image height={50} width={180} src={f1Img} alt="" />
                </div>
                <div className="job-listing-description">
                  <h3 className="job-listing-title">Competition Law Officer</h3>
                  <div className="job-listing-footer">
                    <ul>
                      <li>
                        <i className="icon-material-outline-business"></i> Laxo
                      </li>
                      <li>
                        <i className="icon-material-outline-location-on"></i> San Francissco
                      </li>
                      <li>
                        <i className="icon-material-outline-business-center"></i> Full Time
                      </li>
                      <li>
                        <i className="icon-material-outline-access-time"></i> 2 days ago
                      </li>
                    </ul>
                  </div>
                </div>
                <span className="list-apply-button ripple-effect">
                  Apply Now
                </span>
              </div>
            </a>
            <a href="#" className="job-listing with-apply-button">
              <div className="job-listing-details">
                <div className="job-listing-company-logo">
                <Image height={50} width={180} src={f1Img} alt="" />
                </div>
                <div className="job-listing-description">
                  <h3 className="job-listing-title">Barista and Cashier</h3>
                  <div className="job-listing-footer">
                    <ul>
                      <li>
                        <i className="icon-material-outline-business"></i> Coffee
                      </li>
                      <li>
                        <i className="icon-material-outline-location-on"></i> San Francissco
                      </li>
                      <li>
                        <i className="icon-material-outline-business-center"></i> Full Time
                      </li>
                      <li>
                        <i className="icon-material-outline-access-time"></i> 2 days ago
                      </li>
                    </ul>
                  </div>
                </div>
                <span className="list-apply-button ripple-effect">
                  Apply Now
                </span>
              </div>
            </a>
            <a href="#" className="job-listing with-apply-button">
              <div className="job-listing-details">
                <div className="job-listing-company-logo">
                <Image height={50} width={180} src={f1Img} alt="" />
                </div>
                <div className="job-listing-description">
                  <h3 className="job-listing-title">
                    Restaurant General Manager
                  </h3>
                  <div className="job-listing-footer">
                    <ul>
                      <li>
                        <i className="icon-material-outline-business"></i> King{" "}
                        <div
                          className="verified-badge"
                          title="Verified Employer"
                          data-tippy-placement="top"
                        />
                      </li>
                      <li>
                        <i className="icon-material-outline-location-on"></i> San Francissco
                      </li>
                      <li>
                        <i className="icon-material-outline-business-center"></i> Full Time
                      </li>
                      <li>
                        <i className="icon-material-outline-access-time"></i> 2 days ago
                      </li>
                    </ul>
                  </div>
                </div>
                <span className="list-apply-button ripple-effect">
                  Apply Now
                </span>
              </div>
            </a>
            <a href="#" className="job-listing with-apply-button">
              <div className="job-listing-details">
                <div className="job-listing-company-logo">
                <Image height={50} width={180} src={f1Img} alt="" />
                </div>
                <div className="job-listing-description">
                  <h3 className="job-listing-title">
                    International Marketing Coordinator
                  </h3>
                  <div className="job-listing-footer">
                    <ul>
                      <li>
                        <i className="icon-material-outline-business"></i> Skyist
                      </li>
                      <li>
                        <i className="icon-material-outline-location-on"></i> San Francissco
                      </li>
                      <li>
                        <i className="icon-material-outline-business-center"></i> Full Time
                      </li>
                      <li>
                        <i className="icon-material-outline-access-time"></i> 2 days ago
                      </li>
                    </ul>
                  </div>
                </div>
                <span className="list-apply-button ripple-effect">
                  Apply Now
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="section padding-top-60 padding-bottom-75">
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <div className="section-headline centered ">
            <h3>Membership Plans</h3>
          </div>
        </div>
        <div className="col-xl-12">
          <div className="billing-cycle-radios">
            <div className="radio billed-monthly-radio">
              <input
                id="radio-5"
                name="radio-payment-type"
                type="radio"
                defaultChecked=""
              />
              <label htmlFor="radio-5">
                <span className="radio-label" /> Billed Monthly
              </label>
            </div>
            <div className="radio billed-yearly-radio">
              <input id="radio-6" name="radio-payment-type" type="radio" />
              <label htmlFor="radio-6">
                <span className="radio-label" /> Billed Yearly{" "}
                <span className="small-label">Save 10%</span>
              </label>
            </div>
          </div>
          <div className="pricing-plans-container">
            <div className="pricing-plan">
              <h3>Basic Plan</h3>
              <p className="">
                One time fee for one listing or task highlighted in search
                results.
              </p>
              <div className="pricing-plan-label billed-monthly-label">
                <strong>$19</strong>/ monthly
              </div>
              <div className="pricing-plan-label billed-yearly-label">
                <strong>$205</strong>/ yearly
              </div>
              <div className="pricing-plan-features">
                <strong>Features of Basic Plan</strong>
                <ul>
                  <li>1 Listing</li>
                  <li>30 Days Visibility</li>
                  <li>Highlighted in Search Results</li>
                </ul>
              </div>
              <a href="#" className="button full-width ">
                Buy Now
              </a>
            </div>
            <div className="pricing-plan recommended">
              <div className="recommended-badge">Recommended</div>
              <h3>Standard Plan</h3>
              <p className="">
                One time fee for one listing or task highlighted in search
                results.
              </p>
              <div className="pricing-plan-label billed-monthly-label">
                <strong>$49</strong>/ monthly
              </div>
              <div className="pricing-plan-label billed-yearly-label">
                <strong>$529</strong>/ yearly
              </div>
              <div className="pricing-plan-features">
                <strong>Features of Standard Plan</strong>
                <ul>
                  <li>5 Listings</li>
                  <li>60 Days Visibility</li>
                  <li>Highlighted in Search Results</li>
                </ul>
              </div>
              <a href="#" className="button full-width ">
                Buy Now
              </a>
            </div>
            <div className="pricing-plan">
              <h3>Extended Plan</h3>
              <p className="">
                One time fee for one listing or task highlighted in search
                results.
              </p>
              <div className="pricing-plan-label billed-monthly-label">
                <strong>$99</strong>/ monthly
              </div>
              <div className="pricing-plan-label billed-yearly-label">
                <strong>$1069</strong>/ yearly
              </div>
              <div className="pricing-plan-features">
                <strong>Features of Extended Plan</strong>
                <ul>
                  <li>Unlimited Listings Listing</li>
                  <li>90 Days Visibility</li>
                  <li>Highlighted in Search Results</li>
                </ul>
              </div>
              <a href="#" className="button full-width ">
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

       
      <Footer />
    </main>
  );
}

export default Home;