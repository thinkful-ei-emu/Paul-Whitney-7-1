import React from 'react';
import './App.css';

function Results(props) {
  const list= (props.items) ? props.items.map((book,index)=>{
    let price= (!book.saleInfo)? 'No sale info' : (book.saleInfo.saleability==='NOT_FOR_SALE')? 'Not for sale': (!book.saleInfo.listPrice)? 'Priceless': `$${book.saleInfo.listPrice.amount.toFixed(2)}`;
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
  }) : "Uh oh!  No Results found!"
  return (
    <div>
      {props.isLoading? "Loading...": (props.hasError)? `Oops! There was an error: ${props.hasError}` : list}
    </div>
  );


}

export default Results;