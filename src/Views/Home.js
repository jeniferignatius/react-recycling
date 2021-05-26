import '../App.css';
import React, { Component } from 'react';
import features from "./Features";
import bgImg from "../img/tree.jpg";


class Home extends Component {
  render() {
    return (
      <>
        <img className="big-image"
          src={bgImg}
          alt="savetheworld" />
      </>
    )
  }
}

export default Home;