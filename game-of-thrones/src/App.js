import React, { Component } from 'react'
import './App.css';
//import Axios from 'axios';
// import JonSnowBorn from './components/JonSnowBorn';
// import MargaeryBorn from './components/MargaeryBorn';
// import HouseTargaryen from './components/HouseTargaryen';
// import LannisterHouse from './components/LannisterHouse';
// import BaratheonHouse from './components/BaratheonHouse';
// import RobertAlias from './components/RobertAlias';
import StarkHouse from './components/StarKHouse';
import POV_books from './components/POV_books';


export default class App extends Component {
 

  render() {
    return (
      <div>
        <h1>  Game of Thrones API</h1>

        {/* <JonSnowBorn/>
        <MargaeryBorn/>
        <HouseTargaryen/>
        <LannisterHouse/>
        <BaratheonHouse/>
        <RobertAlias/> */}
        <StarkHouse/>
        <POV_books/>
      </div>
    )
  }
}


        // {this.state.data.map((recipe, id) => <li key={id}> {recipe.title} </li>)}
 
 




  
  

