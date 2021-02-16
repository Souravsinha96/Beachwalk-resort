import React from "react";
import Hero from "../../components/globals/Hero";
import HomeImg from "../../images/homeBcg.jpeg";
import Banner from "../globals/Banner";
import { PrimaryBtn } from "../globals/Button";

const Header = () => {
  return (
    <Hero img={HomeImg}>
      <Banner
        greeting="Welcome to"
        title="beachwalk resort"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, suscipit! Totam voluptas amet autem odio!"
      >
        <PrimaryBtn t="1rem">View Details</PrimaryBtn>
      </Banner>
    </Hero>
  );
};

export default Header;
