import React, { Component } from 'react'
//import './App.css';
import Axios from 'axios';

export default class JonSnowBorn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      data: []
    }
  }

  componentDidMount() {

    Axios.get("https://anapioficeandfire.com/api/characters/583").then(res => {
      //let recipes = res.data.born;
      // let recipes =JSON.parse(res);
      const JonSnowBorn=res.data.born;
      console.log("Born: " + JonSnowBorn);
      // const arr = Object.keys(json_data).map((key) => [key, json_data[key]]);
      this.setState({data:JonSnowBorn})
    })
    .catch(error => {
      console.log('there is an error', error)
    })
  
  }

  render() {
    return (
      <div>
        <h2>Q: When was Jon Snow born?</h2>
        <h3>Jon Snow was born {this.state.data}.</h3>
        
      {/* <ul>
      {this.state.data.born}
      // {/* {this.state.data.map((recipe, id) => <li key={id}> {recipe.name.born} </li>)} */}
      {/* // </ul> */} 
        
      </div>
    )
  }
}


        // {this.state.data.map((recipe, id) => <li key={id}> {recipe.title} </li>)}
 
 




  
  

