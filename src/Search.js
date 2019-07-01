import React from 'react';
import './App.css';

function Search() {
  return (
    <div>
      <form>
        <label htmlFor='search-input'>Search:</label>
        <input id='search-input'placeholder="henry"></input>
        <button type='submit'>Search</button>
      </form>
      <form>
        <label htmlFor='print-type'>Print Type:</label>
        <select id='print-type'>
          <option selected>All</option>
          <option>Books</option>
          <option>Magazines</option>
        </select>
        <label htmlFor='book-type'>Book Type:</label>
        <select id='book-type'>
        <option value='ebooks'>Ebooks</option>
        <option value='free-ebooks'>Free Ebooks</option>
        <option value='paid-ebooks'>Paid Ebooks</option>
        <option value='full'>Full</option>
        <option value='partial'>Partial</option>
        </select>
      </form>
    </div>
  );
}

export default Search;