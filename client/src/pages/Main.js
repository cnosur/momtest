import React, { Component } from "react";
import Carousel from '../components/Carousel'


class Main extends Component {
  // Initialize this.state.books as an empty array
  state = {

  };

  // Add code here to get all books from the database and save them to this.state.books

  render() {
    return (<>
      <div className="windowBox" id="main">
    <Carousel />
  </div>

    <p id="ptag">"IT'S A MAKE OR MISS LEAGUE"</p>
    <p id="ptag1">2018-2019 NBA DATA VISUALIZATION PROJECT</p>
  
      </>
    )
  }
}

export default Main;
