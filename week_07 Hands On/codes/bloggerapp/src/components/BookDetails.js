import React from 'react';

const BookDetails = () => {
  const books = ['Clean Code', 'You Don’t Know JS', 'Eloquent JavaScript'];
  return (
    <div>
      <h2>Book Details</h2>
      <ul>
        {books.map((book, index) => (
          <li key={index}>📖 {book}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookDetails;
