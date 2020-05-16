import React, { Component } from 'react';
import './App.css';
import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';
import axios from 'axios';

export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      gifs: [],
      loading: true
    };
  } 

  //just using Fetch, later in couse we learned to use Axios.
  /*
  componentDidMount(){
    //maybe key should be ptSdPjgk5VXaPUxi6mvkz941ORbIgUzj ??
    fetch('http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC')
      .then(response => response.json())
      .then(responseData => {
        this.setState( {gifs: responseData.data })
        .catch(err => console.log(`Error fetching and parsing data ${err}`));
      }) 
  }
  */

  /*componentDidMount() {
    axios.get('http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC')
    .then(response => {
  //we can skip conversion to JSON, axios does this automatically. We have to write data.data, because axios stores the response data in a data object, and because giphy also stores the data in a data object.
      this.setState( {gifs: response.data.data});
    })
    .catch( err => console.log(`Error fetching and parsing data ${err}`));
  }*/

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query = 'cats') =>{
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&limit=12&rating=g&q=${query}`)
    .then(response => { this.setState( {gifs: response.data.data, loading:false});})
    .catch( err => console.log(`Error fetching and parsing data ${err}`));
  }

  render() {
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm onSearch={this.performSearch}/>      
          </div>   
        </div>    
        <div className="main-content">{
            (this.state.loading)
            ? <p>Loading...</p>
            : <GifList data={this.state.gifs} />
        }
        </div>
      </div>
    );
  }
}
