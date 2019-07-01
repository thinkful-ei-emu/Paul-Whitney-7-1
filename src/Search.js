import React from 'react';
import './App.css';

class Search extends React.Component{
  state={
    printTypeFilter: 'all',
    freenessFilter:'',
    searchTerm:''
  }

  searchChange = (searchTerm) =>{
    this.setState({
      searchTerm, 
    })
  }

  printTypeChange = (printTypeFilter) =>{
    this.setState({
      printTypeFilter,
    })
  }

  freenessChange = (freenessFilter) =>{
    this.setState({
      freenessFilter,
    })
  }

  render(){
    return (
    <div>
      <form onSubmit={
        e=>{
          e.preventDefault();
          this.props.handleSearch(this.state.searchTerm, this.state.printTypeFilter, this.state.freenessFilter)
        }
        }>
        <label htmlFor='search-input'>Search:</label>
        <input id='search-input'placeholder="henry" onChange={e=>this.searchChange(e.target.value)}></input>
        <button type='submit'>Search</button>
      </form>
      <form>
        <label htmlFor='print-type'>Print Type:</label>
        <select id='print-type' onChange={e=> this.printTypeChange(e.target.value)}>
          <option value='all'>All</option>
          <option value='books'>Books</option>
          <option value='magazines'>Magazines</option>
        </select>
        <label htmlFor='book-type'>Book Type:</label>
        <select id='book-type' onChange={e=> this.freenessChange(e.target.value)} value={this.state.freenessFilter}>
        <option value=''>No Filter</option>
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
}

export default Search;