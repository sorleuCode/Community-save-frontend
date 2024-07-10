import React from 'react'
import { FaPiggyBank } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = ({styles}) => {
  return (
    <header className={styles.header}>
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
      </header>
  )
}

export default Header