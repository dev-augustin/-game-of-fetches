import React, { Component } from 'react'
//import './App.css';
import Axios from 'axios';

export default class POV_books extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      data: []
    }
  }

//   async componentDidMount() {
//     try{
//         const response = await Axios.get("https://www.anapioficeandfire.com/api/houses/362");
//         console.log("response", response);
//         const founderName = await Axios.get(response.data.founder)
//         console.log("founderName", founderName);
//         // const BaratheonHouse=json.data.founder.name;
//         // console.log("BaratheonHouse", +BaratheonHouse)
//         this.setState({ data: founderName.data });
//       } catch (error){
//       console.log(error);
// }
// }
2
  componentDidMount() {

    Axios.get("http://www.anapioficeandfire.com/api/characters/232").then(res => {
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

// .then( res => this.setState({ data: res.data })).catch(e => console.error(e))
//}  <h1> {this.data.born} </h1>

  render() {
    return (
      <div>
        <h2>Q: What's the name of the founder of House Stark?</h2>
        <h3>The name of the founder of House Stark is {this.state.data}.</h3>
   
        
      </div>
    )
  }
}

 
 



//Reference: https://github.com/axios/axios/issues/371
  
  

