import Link from 'next/link';
import Image from "next/image";
import styles from "../page.module.css";
import Home from '../page';
import Header from '../components/header';
import Footer from '../components/footer';
import Sidebar from '../components/sidebar';

const  Form = () => {
  return (
    <>
      <Header />
      <div class="dashboard-container">
      <Sidebar />
      

      <div className="dashboard-content-container" data-simplebar>
		<div className="dashboard-content-inner" >
        <div className="dashboard-headline">
				<h3>Post a Job</h3>
				<nav id="breadcrumbs" className="dark">
					<ul>
                    <li><Link href="/" className="current">Home</Link></li>
						<li>Form</li>
					</ul>
				</nav>
			</div>
            <div className='row'>
                <div className='col-xl-12'>
                    <div className='dashboard-box margin-top-0'>
                        <div className="headline">
							<h3><i className="icon-feather-folder-plus"></i> Job Submission Form</h3>
						</div>
                        <div className="content with-padding padding-bottom-10">
                            <div className="row">
                                <div className="col-xl-4">
                                    <div className="submit-field">
                                        <h5>Company Name</h5>
                                        <input type="text" className="with-border" />
                                    </div>
                                </div>
                                <div className="col-xl-4">
                                    <div className="submit-field">
                                        <h5>Phone</h5>
                                        <input type="tel" className="with-border" />
                                    </div>
                                </div>
                                <div className="col-xl-4">
                                    <div className="submit-field">
                                        <h5>Email</h5>
                                        <input type="email" className="with-border" />
                                    </div>
                                </div>
                                <div className="col-xl-4">
                                    <div className="submit-field">
                                        <h5>Password</h5>
                                        <input type="password" className="with-border" />
                                    </div>
                                </div>
                                <div className="col-xl-4">
                                    <div className="submit-field">
                                        <h5>City</h5>
                                        <input type="text" className="with-border" />
                                    </div>
                                </div>
                                <div className="col-xl-4">
                                <div className="submit-field">
                                    <h5>State</h5>
                                    <select className="selectpicker with-border" data-size="7" title="Select Job Type">
                                        <option>State</option>
                                        <option>State</option>
                                        <option>State</option>
                                        <option>State</option>
                                        <option>State</option>
                                    </select>
                                </div>
                            </div>
                                <div className="col-xl-4">
                                    <div className="submit-field">
                                        <h5>Zipcode</h5>
                                        <input type="text" className="with-border" />
                                    </div>
                                </div>
                                <div className="col-xl-8">
                                    <div className="submit-field">
                                        <h5>Address</h5>
                                        <input type="text" className="with-border" />
                                    </div>
                                </div>
                            

                            
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-12">
					<a href="#" className="button ripple-effect big margin-top-30"><i className="icon-feather-plus"></i> Post a Job</a>
				</div>
            </div>
            
			
        </div>
        </div>

      </div>
   
    
      <Footer />
    </>
  );
}

export default Form;