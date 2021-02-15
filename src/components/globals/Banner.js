import React from "react";
import {
  setColor,
  setRem,
  setLetterSpacing,
  setBorder,
  media,
} from "../../styles";
import styled, { css, keyframes } from "styled-components";

const fadeIn = (start, middle, end) => {
  const animation = keyframes`
    0%{
        opacity:0;
        transform:translateY(${start})
    }
    50%{
        opacity:0.5;
        transform:translateY(${middle})
    }
    100%{
        opacity:1;
        transform:translateY(${end})
    }
    `;
  return css`
    animation: ${animation} 2s ease-in-out;
  `;
};

const Banner = ({ className, title, text, greeting, children }) => {
  return (
    <div className={className}>
      <h1>
        {greeting} <span>{title}</span>{" "}
      </h1>
      <div className="info">
        <p>{text}</p>
        {children}
      </div>
    </div>
  );
};

const BannerWrapper = styled(Banner)`
  background: rgba(0, 0, 0, 0.7);
  text-align: center;
  border-radius: 20px;
  padding: ${setRem(60)} ${setRem(32)};
  letter-spacing: ${setLetterSpacing(3)};
  color: ${setColor.mainWhite};
  h1 {
    text-transform: capitalize;
    font-size: 48px;
    color: ${setColor.primarycolor};

    span {
      color: ${setColor.mainWhite};
    }
  }
  p {
    width: 85%;
    margin: 0 auto;
  }
  ${media.tablet`
  width: 70vw;
    ${setBorder({ width: "6px", color: setColor.primarycolor })};
    p {
      width: 75%;
    }
    h1 {
        ${fadeIn("100%", "-10%", "0")}
      /* animation */
    }   
    .info {
        ${fadeIn("-100%", "10%", "0")}
      /* animation */
    }
  `}
`;

export default BannerWrapper;
