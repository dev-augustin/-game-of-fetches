import React, { Component } from 'react'
//import './App.css';
import Axios from 'axios';

export default class StarkHouse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      data: []
    }
  }
/****    using async await     ****/
//   async componentDidMount() {
//     try{
//         const response = await Axios.get("https://www.anapioficeandfire.com/api/houses/362");
//         console.log("response", response);
//         const founderName = await Axios.get(response.data.founder)
//         console.log("founderName", founderName);
//         this.setState({ data: founderName.data.name });
//       } catch (error){
//       console.log(error);
// }
// }
/******************    multiple axios get  *******************/

  componentDidMount() {
        Axios.get("https://www.anapioficeandfire.com/api/houses/362").then(res => {
        const founderNameUrl=res.data.founder;
        return Axios.get(founderNameUrl)
         })
        .then(res => {
        const founderName= res.data.name;
        this.setState({data: founderName})
        })
        .catch(error => {
        console.log('there is an error', error)
        })
  
  }
  render() {
    return (
      <div>
        <h2>6. What's the name of the founder of House Stark?</h2>
        <h4>The name of the founder of House Stark is {this.state.data}.</h4>     
      </div>
    )
  }
}

 
 



//Reference: https://github.com/axios/axios/issues/371
  
  

