import React from "react";
import Hero from "../../components/globals/Hero";
import HomeImg from "../../images/homeBcg.jpeg";
import Banner from "../globals/Banner";

const Header = () => {
  return (
    <Hero img={HomeImg}>
      <Banner
        greeting="Welcome to"
        title="beachwalk resort"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, suscipit! Totam voluptas amet autem odio!"
      />
    </Hero>
  );
};

export default Header;
