import React from "react";
import Section from "../globals/Section";
import Title from "../globals/Title";
import aboutImg from "../../images/aboutBcg.jpeg";
import {
  setColor,
  setRem,
  setLetterSpacing,
  setBorder,
  media,
} from "../../styles";
import { PrimaryBtn } from "../globals/Button";
import styled from "styled-components";

const About = () => {
  return (
    <Section>
      <AboutCenter>
        <div className="about-img">
          <img src={aboutImg} alt="about us" />
        </div>
        <div className="about-info">
          <Title title="About us" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
            maxime aliquid, magni excepturi cumque dolor nesciunt iusto enim
            quia odio quidem aspernatur quibusdam alias placeat neque
            asperiores. Placeat, eius cum.
          </p>
          <PrimaryBtn>Read More</PrimaryBtn>
        </div>
      </AboutCenter>
    </Section>
  );
};

const AboutCenter = styled.div`
  .about-img,
  .about-info {
    padding: ${setRem(30)};
  }
  .about-img {
    img {
      width: 100%;
      display: block;
      ${setBorder({ width: setRem(6), color: setColor.primarycolor })};
    }
  }
  .about-info {
    p {
      letter-spacing: ${setLetterSpacing(3)};
    }
  }
  width: 90vw;
  margin: 0 auto;
  ${media.large`
  width:100vw;
  max-width: 1170px;
  display:grid;
  grid-template-columns:1fr 1fr;
  grid-column-gap:${setRem(32)};
  .about-img,
  .about-info {
    padding: ${setRem(0)};
  }
  .about-img,.about-info{
      align-self:center;
  }
  .about-info{
      p{
          width:80%;
      }
  }
  `};
`;
export default About;
