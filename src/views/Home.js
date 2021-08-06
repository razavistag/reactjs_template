import React, { Component } from "react";


import ClientNavigation from "../components/ClientNavigation";
import CarouselComponent from "../components/CarouselComponent";
import CardComponent from "../components/CardComponent";
import ContactComponent from "../components/ContactComponent";
class Home extends Component {
  state = {
    msg: "",
  };

  render() {
    return (
      <>
        <ClientNavigation />
        <CarouselComponent />
        <CardComponent />
        <ContactComponent />


        <br></br>
        <br></br>
        <br></br> 
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </>
    );
  }
}

export default Home;
