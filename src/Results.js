import React from 'react';
import './App.css';

function Results(props) {
  const list=props.items.map((book,index)=>{
    //let price=book.salesInfo.listPrice? 'Priceless': `\$${book.salesInfo.listPrice.amount}`
    return(
    <div className='book' key={index}>
      
      <h2>{book.volumeInfo.title} </h2>
      <img src={book.volumeInfo.imageLinks.thumbnail} alt="book"/>
      <div className='book-info'>
        <p>
          {`Author(s): ${book.volumeInfo.authors.join(", ")}`}
          <br/>
          {`Price:`}
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