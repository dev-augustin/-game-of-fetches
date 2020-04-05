import React, { Component } from 'react'
//import './App.css';
import Axios from 'axios';

export default class BookTitle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      data1: [],
      data2:[],
      data3:[]
    }
  }

  componentDidMount() {
    Axios.get("https://www.anapioficeandfire.com/api/characters/232").then(res => {
      const povBooksUrl=res.data.povBooks;//map(booksUrl => Axios.get(booksUrl));
      console.log("povBooksUrl", povBooksUrl[0])
      console.log("povBooksUrl", povBooksUrl[1])
      console.log("povBooksUrl", povBooksUrl[2])
      Promise.all([Axios.get(povBooksUrl[0]),Axios.get(povBooksUrl[1]), Axios.get(povBooksUrl[2]) ]).then(([bookName1, bookName2, bookName3])=>{
       this.setState({data1:bookName1.data.name,
                       data2:bookName2.data.name,
                       data3:bookName3.data.name});
     });
    
    })
    .catch(error => {
    console.log('there is an error', error)
    })

  }

  render() {
    return (
      <div>
        <h2>7. What are the titles of Catelyn Stark's three POV books? </h2>
        <ul>
          <li> {this.state.data1}.</li>
          <li> {this.state.data2}.</li>
          <li> {this.state.data3}.</li>
        </ul>
        
      </div>
    )
  }
}

 
 



//Reference: 
//https://github.com/axios/axios/issues/371
//https://stackoverflow.com/questions/52669596/promise-all-with-axios
  
  

