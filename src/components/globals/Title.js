import React from "react";
import styled from "styled-components";
import { setRem, setLetterSpacing, setFont } from "../../styles";

const Title = ({ className, title }) => {
  return <h3 className={className}>{title}</h3>;
};

export default styled(Title)`
  text-transform: capitalize;
  font-size: ${setRem(36)};
  letter-spacing: ${setLetterSpacing(5)};
  ${setFont.slanted};
  text-align: ${(prop) => (prop.center ? "center" : "left")};
`;
