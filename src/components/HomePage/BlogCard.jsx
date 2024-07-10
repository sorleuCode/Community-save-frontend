import React from 'react';
import styles from './BlogCard.module.css';
import { Link } from 'react-router-dom';

const BlogCard = ({ post }) => (
  <div className={styles.chelsea}>
  <div className={styles.ekuileo}>
    <div className={styles.blog_card}>
      <Link to="https://smartmag.theme-sphere.com/coinbase/">
        <div className={styles.baami}>
          <img src={post.image} alt={post.title} className={styles.image} />
          <h2 className={styles.title}>{post.title}</h2>
          <p className={styles.text}>Lorem ipsum dolor sit amet consectet adipisicing elit. Aliquid facilis beatae </p>
          <div className={styles.text_card}>
            <div className={styles.eef}>
              <p className={styles.date}>{post.date}</p>
            </div>
            <p className={styles.author}>{post.author}</p>
          </div>
        </div>
      </Link>
    </div>
  </div>
  </div>

);

export default BlogCard;