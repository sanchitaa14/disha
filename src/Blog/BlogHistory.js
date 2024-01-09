// BlogHistory.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Blog.css"
const BlogHistory = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/blogs');

        if (response.data.success) {
          setBlogs(response.data.blogs);
        } else {
          alert('Failed to fetch blogs. Please try again.');
        }
      } catch (error) {
        console.error('Error fetching blogs:', error.message);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className='blog'>
      <h2>Blog History</h2>
      <ul>
        {blogs.map((blog) => (
          <li key={blog._id}>
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
            <small>{new Date(blog.date).toLocaleString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogHistory;
