import Link from 'next/link';
import Image from "next/image";
import styles from "../page.module.css";
import Home from '../page';
import Header from '../components/header';
import Footer from '../components/footer';


const  About = () => {
  return (
    <main className={styles.main}>
      <Header />
      
    <div>This is About page</div>  
    
      <Footer />
    </main>
  );
}

export default About;