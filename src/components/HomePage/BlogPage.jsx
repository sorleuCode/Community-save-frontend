import React from 'react'
import BlogCard from './BlogCard';
import styles from "./blogPage.module.css"

const BlogPage = () => {

const blogPosts = [  
  {
    image: '/images/Blog.png',
    date: '12 Apr 2022',
    author: 'Lisa Bergern',
    title: 'Why love marketing? Because of this.',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live...',
  },
  {
    image: '/images/Blog1.png',
    date: '12 Apr 2022',
    author: 'Lisa Bergern',
    title: 'Why love marketing? Because of this.',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live...',
  },
  {
    image: '/images/Blog2.jpg',
    date: '12 Apr 2022',
    author: 'Lisa Bergern',
    title: 'Why love marketing? Because of this.',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live...',
  },
  {
    image: '/images/Blog3.png',
    date: '12 Apr 2022',
    author: 'Lisa Bergern',
    title: 'Why love marketing? Because of this.',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live...',
  },
  {
    image: '/images/Blog4.jpg',
    date: '12 Apr 2022',
    author: 'Lisa Bergern',
    title: 'Why love marketing? Because of this.',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live...',
  },
  {
    image: '/images/Blog5.png',
    date: '12 Apr 2022',
    author: 'Lisa Bergern',
    title: 'Why love marketing? Because of this.',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live...',
  },
  {
    image: '/images/Blog6.jpg',
    date: '12 Apr 2022',
    author: 'Lisa Bergern',
    title: 'Why love marketing? Because of this.',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live...',
  },
  {
    image: '/images/Blog7.jpg',
    date: '12 Apr 2022',
    author: 'Lisa Bergern',
    title: 'Why love marketing? Because of this.',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live...',
  },
 
];


  return (
    <div className={styles.app}>
      <div className={styles.blog_list}>
        {blogPosts.map((post, index) => (
          <BlogCard key={index} post={post} />
        ))}
      </div>
    </div>
  )
}


export default  BlogPage 
  ;