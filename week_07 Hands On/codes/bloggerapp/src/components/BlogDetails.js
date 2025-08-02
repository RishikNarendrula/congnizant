import React from 'react';

const BlogDetails = () => {
  const blogs = ['React Hooks Guide', 'Conditional Rendering in React', 'JSX Best Practices'];
  return (
    <div>
      <h2>Blog Details</h2>
      <ul>
        {blogs.map((blog, index) => (
          <li key={index}>📝 {blog}</li>
        ))}
      </ul>
    </div>
  );
};

export default BlogDetails;
