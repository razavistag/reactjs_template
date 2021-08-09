import React, { Component } from "react";

import ClientNavigation from "../components/ClientNavigation";
import CarouselComponent from "../components/CarouselComponent";
import CardComponent from "../components/CardComponent";
import ContactComponent from "../components/ContactComponent";
import Footer from "../components/Footer";
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
        <Footer />
      </>
    );
  }
}

export default Home;
