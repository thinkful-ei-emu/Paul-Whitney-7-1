import React from 'react';
import './App.css';

function Results(props) {
  const list=props.items.map((book,index)=>{
    let price= (!book.saleInfo)? 'No sale info' : (book.saleInfo.saleability==='NOT_FOR_SALE')? 'Not for sale': (!book.saleInfo.listPrice)? 'Priceless': `$${book.saleInfo.listPrice.amount}`;
    let authors = !(book.volumeInfo.authors)? 'No authors found' : book.volumeInfo.authors.join(", ");
    return(
    <div className='book' key={index}>
      
      <h2><a href={book.volumeInfo.infoLink} target='_blank' rel="noopener noreferrer">{book.volumeInfo.title} </a></h2>
      <img src={book.volumeInfo.imageLinks.thumbnail} alt="book"/>
      <div className='book-info'>
        <p>
          {`Author(s): ${authors}`}
          <br/>
          {`Price: ${price}`}
        </p>
        <p>
          {book.volumeInfo.description}
        </p>
      </div>

    </div>
    );
  })
  return (
    <div>
      {props.isLoading? "Loading...": list}
    </div>
  );


}

export default Results;