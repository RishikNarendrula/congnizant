// src/App.js
import React from 'react';
import  books from './books';
import './App.css';

function App() {
  const showBlogs = true;
  const showCourses = true;

  // Book section using map() and keys
  const bookdet = (
    <ul>
      {books.map(book => (
        <li key={book.id}>
          📘 {book.bname} - ₹{book.price}
        </li>
      ))}
    </ul>
  );

  // Blog section (conditional with if)
  const content = showBlogs ? (
    <ul>
      <li>📝 React vs Angular</li>
      <li>📝 Advanced State Management</li>
      <li>📝 Deploying React Apps</li>
    </ul>
  ) : null;

  // Course section (conditional with &&)
  const courseset = showCourses && (
    <ul>
      <li>🎓 ReactJS Complete Guide</li>
      <li>🎓 Node.js for Beginners</li>
      <li>🎓 Fullstack with MERN</li>
    </ul>
  );

  return (
    <div>
      <div className="st2">
        <h1>Book Details</h1>
        {bookdet}
      </div>
      <div className="v1">
        <h1>Blog Details</h1>
        {content}
      </div>
      <div className="mystyle1">
        <h1>Course Details</h1>
        {courseset}
      </div>
    </div>
  );
}

export default App;
