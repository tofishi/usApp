import Link from 'next/link';
import Image from "next/image";
import styles from "../page.module.css";
import Home from '../page';
import Header from '../components/header';
import Footer from '../components/footer';


const  Login = () => {
  return (
    <>
      <Header />
      <div id="titlebar" className="gradient">
	<div className="container">
		<div className="row">
			<div className="col-md-12">

				<h2>Log In</h2>

				
				<nav id="breadcrumbs" className="dark">
					<ul>
						<li><Link href="/" className="current">Home</Link></li>
						<li>Login</li>
					</ul>
				</nav>

			</div>
		</div>
	</div>
</div>
      <div className="container pb-5">
	<div className="row">
		<div className="col-xl-5 offset-xl-3">


			<div className="login-register-page">
				
				<div className="welcome-text">
					<h3>We're glad to see you again!</h3>
					<span>Don't have an account? <a href="pages-register.html">Sign Up!</a></span>
				</div>
					
				
				<form method="post" id="login-form">
					<div className="input-with-icon-left">
						<i className="icon-material-baseline-mail-outline"></i>
						<input type="text" className="input-text with-border" name="emailaddress" id="emailaddress" placeholder="Email Address" required/>
					</div>

					<div className="input-with-icon-left">
						<i className="icon-material-outline-lock"></i>
						<input type="password" className="input-text with-border" name="password" id="password" placeholder="Password" required/>
					</div>
					<a href="#" className="forgot-password">Forgot Password?</a>
				</form>
				
				
				<button className="button full-width button-sliding-icon ripple-effect mt-2" type="submit" form="login-form">Log In <i className="icon-material-outline-arrow-right-alt"></i></button>
				
				
				<div className="social-login-separator"><span>or</span></div>
				<div className="social-login-buttons">
					<button className="facebook-login ripple-effect"><i className="icon-brand-facebook-f"></i> Log In via Facebook</button>
					<button className="google-login ripple-effect"><i className="icon-brand-google-plus-g"></i> Log In via Google+</button>
				</div>
			</div>

		</div>
	</div>
</div>
    
      <Footer />
    </>
  );
}

export default Login;