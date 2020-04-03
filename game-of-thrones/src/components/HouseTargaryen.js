import React, { Component } from 'react'
//import './App.css';
import Axios from 'axios';

export default class HouseTargaryen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      data: []
    }
  }

  componentDidMount() {

    Axios.get("https://www.anapioficeandfire.com/api/houses/378").then(res => {
      //let recipes = res.data.born;
      // let recipes =JSON.parse(res);
      const HouseTargaryen=res.data.region;
      console.log("HouseTargaryen: " + HouseTargaryen);
      // const arr = Object.keys(json_data).map((key) => [key, json_data[key]]);
      this.setState({data:HouseTargaryen})
    })
    .catch(error => {
      console.log('there is an error', error)
    })
  
  }

  render() {
    return (
      <div>
        <h2>Q: What region is House Targaryen in?</h2>
        <h3>House Targaryen is in {this.state.data}.</h3>
        
      {/* <ul>
      {this.state.data.born}
      // {/* {this.state.data.map((recipe, id) => <li key={id}> {recipe.name.born} </li>)} */}
      {/* // </ul> */} 
        
      </div>
    )
  }
}


        // {this.state.data.map((recipe, id) => <li key={id}> {recipe.title} </li>)}
 
 




  
  

