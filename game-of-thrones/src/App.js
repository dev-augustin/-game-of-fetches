import React, { Component } from 'react'
import './App.css';
import Axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      data: []
    }
  }

  componentDidMount() {
    //|||||||  Fetch   ||||||||||
    // fetch("https://api.spoonacular.com/recipes/search?query=cheese&number=4&apiKey=27a02bbb5b48401f96bfda6a7d3e2545")
    //   .then(response => response.json()) // first response => resolved
    //   .then(
    //     result => {
    //       console.log(result.results)

    //       this.setState({
    //         isLoaded: true,
    //         items:result.results
    //       })

    //       console.log("state is updated",this.state.data)
    //     }
    //   ).catch(e => console.log("there's a error", e))
    // ||||||||||||||||||||
    Axios.get("http://anapioficeandfire.com/api/characters/583").then(res => {
      const born = res.data.results;
      console.log("recipes ---->", born)
      this.setState({data:born})
    })
    .catch(error => {
      console.log('there is an error', error)
    })
  
  }

  render() {
    return (
      <div>
        <h1> Spoonacular API</h1>
        <ul>
        {this.state.data.map((born, id) => <li key={id}> {born.born} </li>)}
        </ul>
      </div>
    )
  }
}


        // {this.state.data.map((recipe, id) => <li key={id}> {recipe.title} </li>)}
 
 




  
  

