// WriteBlog.js
import React, { useState } from 'react';
import axios from 'axios';
import "./Blog.css"

const WriteBlog = () => {
  const [blog, setBlog] = useState({ title: '', content: '' });

  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/blogs', blog);

      if (response.data.success) {
        alert('Blog submitted successfully!');
        setBlog({ title: '', content: '' });
      } else {
        alert('Failed to submit blog. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting blog:', error.message);
    }
  };

  return (
    <div className='write-blog'>
      <h2>Write a Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" name="title" value={blog.title} onChange={handleChange} required />

        <label>Content:</label>
        <textarea name="content" value={blog.content} onChange={handleChange} required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default WriteBlog;
