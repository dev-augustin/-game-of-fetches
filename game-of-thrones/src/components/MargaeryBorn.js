import React, { Component } from 'react'
//import './App.css';
import Axios from 'axios';

export default class MargaeryBorn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      data: []
    }
  }

  componentDidMount() {

    Axios.get("https://anapioficeandfire.com/api/characters/16").then(res => {
      //let recipes = res.data.born;
      // let recipes =JSON.parse(res);
      const MargaeryBorn=res.data.born;
      console.log(MargaeryBorn)
      // const arr = Object.keys(json_data).map((key) => [key, json_data[key]]);
      this.setState({data:MargaeryBorn})
    })
    .catch(error => {
      console.log('there is an error', error)
    })
  
  }

  render() {
    return (
      <div>
        <h2>1. Where was Margaery Tyrell born?</h2>
        <h4>Margaery Tyrell was born {this.state.data}.</h4>
        
      {/* <ul>
      {this.state.data.born}
      // {/* {this.state.data.map((recipe, id) => <li key={id}> {recipe.name.born} </li>)} */}
      {/* // </ul> */} 
        
      </div>
    )
  }
}


        // {this.state.data.map((recipe, id) => <li key={id}> {recipe.title} </li>)}
 
 




  
  

