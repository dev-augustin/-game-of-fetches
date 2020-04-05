import React, { Component } from 'react'
//import './App.css';
import Axios from 'axios';

export default class LannisterHouse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      data: []
    }
  }

  componentDidMount() {

    Axios.get("https://www.anapioficeandfire.com/api/houses/229").then(res => {
      //let recipes = res.data.born;
      // let recipes =JSON.parse(res);
      const LannisterHouse=res.data.coatOfArms;
      console.log("LannisterHouse: " + LannisterHouse);
      // const arr = Object.keys(json_data).map((key) => [key, json_data[key]]);
      this.setState({data:LannisterHouse})
    })
    .catch(error => {
      console.log('there is an error', error)
    })
  
  }

  render() {
    return (
      <div>
        <h2>3. What's the coat of arms of House Lannister?</h2>
        <h4>The coat of arms of House Lannister is {this.state.data}.</h4>
        
      {/* <ul>
      {this.state.data.born}
      // {/* {this.state.data.map((recipe, id) => <li key={id}> {recipe.name.born} </li>)} */}
      {/* // </ul> */} 
        
      </div>
    )
  }
}


        // {this.state.data.map((recipe, id) => <li key={id}> {recipe.title} </li>)}
 
 




  
  

