// import React from 'react'

import React from 'react'
import styles from "./About.module.css"
import { FaPiggyBank } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const About = () => {

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.logo}>
          <FaPiggyBank size={45} />
          <h2>iSave</h2>
        </div>
        <nav className={styles.nav}>
          <a href="#about">About Us</a>
          <a href="#blog">Blog</a>
          <a href="#faq">FAQ</a>
          <a href="#contact"><Link to="/contact">Contact Us</Link></a>
        </nav>
        <Link to="/login">

          <button className={styles.login_btn}>Log In</button>
        </Link>
      </div>
      <div>
      </div>

      <div className={styles.lady}>
        <img src="/images/lab.png" alt="Blog.png" />
      </div>

      <div className={styles.container_img}>
        <div className={styles.text_section}>


          <p className={styles.about_p}>Get ready your financial future with iSave, the ultimate weekly thrift collection app. Discover a world of smart savings tools, expert financial guidance, and a supportive community dedicated to helping you reach your goals. Join our weekly contribution plan, where you'll contribute a fixed amount alongside others with similar goals. Each week, our automatic selector will randomly choose a member to receive the collective contributions - a great way to boost your savings and achieve financial milestones.
          </p>


          <p className={styles.about_p}>At iSave, we understand the importance of security and transparency. That's why we utilize to transform
            state-of-the-art encryption and adhere to strict data protection policies. Our platform is designed to provide a safe and reliable environment for your savings. Wondering about our gain? Rest assured, we charge a minimal percentage, ensuring you get the most out of your savings. Unlike other platforms, iSave prioritizes your needs, offering</p>

        </div>



        <div className={styles.image_section}>
          <img src="/images/Blog.png" alt="California Landscape" />
        </div>

      </div>




      <div className={styles.containe_all}>
        <div className={styles.text}>
          <div className={styles.photo}>
            <img src="/images/Blog2.jpg" alt="Community Safety Platform" />
          </div>
          <p className={styles.about_p}>
            <h2> About Us</h2> <br />
            At the Community Safety Platform, our mission is simple yet profound: to enhance the safety and well-being of every community member. We believe that safety is a collective responsibility, and together, we can create a secure and supportive environment for all.<br />
            <h2>Community Resources </h2> <br />
            Access a wealth of resources, including safety guidelines, emergency contacts, and helpful articles to keep you prepared and informed.
          </p>
        </div>
      </div>




      <footer className={styles.footer}>

        <div className={styles.footer_section}>
          <div className={styles.logo}>
            <FaPiggyBank size={45} />
            <h2>iSave</h2>
          </div>
          <p className={styles.about_p}>
            Develop a growth mindset and overcome obstacles to reach new heights.
            By joining our platform, you'll become  part of a vibrant community that  fosters learning, contribution, and achievement. Embrace this journey and unlock your full potential!
          </p>
        </div>
        <div className={styles.footer_section}>
          <h4>Quick links</h4>
          <p className={styles.about_p}>
            <a href="#blog">Blog</a>
          </p>
          <p className={styles.about_p}>
            <Link to="/contact">Contact</Link>
          </p>
          <p className={styles.about_p}>
            <a href="#faq">FAQ</a>
          </p>
        </div>
        <div className={styles.footer_section}>
          <h4>Pages</h4>
          <p className={styles.about_p}>
            <Link to="register">Register</Link>
          </p>
          <p className={styles.about_p}>

            <Link to="/login">Log In</Link>
          </p>
          <p className={styles.about_p}>

            <Link to="/about">About Us</Link>
          </p>
          <p className={styles.about_p}>

            <Link to="/blog">Blog</Link>
          </p>
        </div>
      </footer>







    </div>
  )
}



export default About