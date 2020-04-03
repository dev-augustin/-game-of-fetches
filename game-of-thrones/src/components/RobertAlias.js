import React, { Component } from 'react'
//import './App.css';
import Axios from 'axios';

export default class RobertAlias extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      data: []
    }
  }

  componentDidMount() {

    Axios.get(" https://www.anapioficeandfire.com/api/characters/901").then(res => {
      //let recipes = res.data.born;
      // let recipes =JSON.parse(res);
      const RobertAlias=res.data.aliases[1];
      console.log("RobertAlias: " + RobertAlias);
      // const arr = Object.keys(json_data).map((key) => [key, json_data[key]]);
      this.setState({data:RobertAlias})
    })
    .catch(error => {
      console.log('there is an error', error)
    })
  
  }

  render() {
    return (
      <div>
        <h2>Q: What is Robert Baratheon's second alias?</h2>
        <h3>Robert Baratheon's second alias is <em>{this.state.data}</em>.</h3>
        
      {/* <ul>
      {this.state.data.born}
      // {/* {this.state.data.map((recipe, id) => <li key={id}> {recipe.name.born} </li>)} */}
      {/* // </ul> */} 
        
      </div>
    )
  }
}


        // {this.state.data.map((recipe, id) => <li key={id}> {recipe.title} </li>)}
 
 




  
  

