import React, { Component } from 'react'
//import './App.css';
import Axios from 'axios';

export default class BaratheonHouse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      data: []
    }
  }

  componentDidMount() {

    Axios.get("https://www.anapioficeandfire.com/api/houses/17").then(res => {
      //let recipes = res.data.born;
      // let recipes =JSON.parse(res);
      const BaratheonHouse=res.data.seats[1];
      console.log("BaratheonHouse: " + BaratheonHouse);
      // const arr = Object.keys(json_data).map((key) => [key, json_data[key]]);
      this.setState({data:BaratheonHouse})
    })
    .catch(error => {
      console.log('there is an error', error)
    })
  
  }

  render() {
    return (
      <div>
        <h2>4. What is the second seat of House Baratheon?</h2>
        <h4>The second seat of House Baratheon is {this.state.data}.</h4>
      </div>
    )
  }
}


        // {this.state.data.map((recipe, id) => <li key={id}> {recipe.title} </li>)}
 
 




  
  

