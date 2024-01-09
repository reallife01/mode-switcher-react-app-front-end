import React from 'react';
import Article from '../Article/Article';
import  blog01  from '../../img/blog01.png';
import  blog02 from '../../img/blog02.png';
import  blog03 from '../../img/blog03.png';
import blog04 from '../../img/blog03.png';
import  blog05  from '../../img/blog05.png';
import './blog.css';

const Blog = () => (
  <div className="bestowal__blog section__padding" id="blog">
    <div className="bestowal__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="bestowal__blog-container">
      <div className="bestowal__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 29, 2023" text="Building the world together that is always be our mission and we will never stop till infinity" />
      </div>
      <div className="bestowal__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 29, 2023" text="Building the world together that is always be our mission and we will never stop till infinity" />
        <Article imgUrl={blog03} date="Sep 29, 2023" text="Building the world together that is always be our mission and we will never stop till infinity" />
        <Article imgUrl={blog04} date="Sep 29, 2023" text="Building the world together that is always be our mission and we will never stop till infinity" />
        <Article imgUrl={blog05} date="Sep 29, 2023" text="Building the world together that is always be our mission and we will never stop till infinity" />
      </div>
    </div>
  </div>
);

export default Blog;
