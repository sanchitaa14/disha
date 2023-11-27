import React, { useState, useEffect } from 'react';
import './Blog.css';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  const handlePost = async () => {
    if (newPost.trim() !== '') {
      try {
        const response = await fetch('http://localhost:5000/api/blog', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: newPost }),
        });

        const data = await response.json();
        if (data.success) {
          // Fetch the updated blog posts after creating a new post
          await fetchBlogPosts();
          setNewPost('');
        } else {
          console.error('Failed to create blog post:', data.message);
        }
      } catch (error) {
        console.error('Error creating blog post:', error);
      }
    }
  };

  const fetchBlogPosts = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/BlogPut');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    }
  };

  useEffect(() => {
    fetchBlogPosts();
  }, []); // Fetch blog posts on component mount

  return (
    <div className="blog-container">
      <h2>My Blog</h2>

      <div className="post-container">
        <textarea
          placeholder="Write your post..."
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
        <button onClick={handlePost}>Post</button>
      </div>

      {posts.map((post, index) => (
        <div key={index} className="post">
          <p>{post.message}</p>
          <span className="timestamp">{post.timestamp}</span>
        </div>
      ))}
    </div>
  );
};

export default Blog;
