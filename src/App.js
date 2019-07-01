import React from 'react';
import Header from './Header';
import Search from './Search';
import Results from './Results';
import './App.css';


class App extends React.Component {
  state={
    items: [],
    isLoading: false,
    error: null,
  }

  handleSearch = (searchTerm, printTypeFilter, freenessFilter) =>{

    this.setState({
      isLoading:true,
      error:null,
    })
    let filter=freenessFilter? `filter=${freenessFilter}&`:  ''

    fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchTerm)}&${filter}printType=${printTypeFilter}&key=AIzaSyCKZb9a7YJn4HP2gOHkcOPEoJRePH3t6WA`)
      .then(res=>{
        if(res.ok){
          return res.json();
        }
        else{
          throw new Error(res.statusText);
        }
      })
      .then( resJson=>
        this.setState({
          isLoading:false,
          items:resJson.items
        })
      )
      .catch((e)=>{
        this.setState({
          error: e.message,
        })
      })
  }

  render() {
    return (
    <div className="App">
      <Header />
      <Search handleSearch={this.handleSearch}/>
      <Results items={this.state.items} isLoading={this.state.isLoading}/>
    </div>
    );
  }
}

export default App;
