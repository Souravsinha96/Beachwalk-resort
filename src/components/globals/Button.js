import styled from "styled-components";
import {
  setColor,
  setRem,
  setFont,
  setLetterSpacing,
  setBorder,
  setTransition,
} from "../../styles";

export const PrimaryBtn = styled.button`
  display: inline-block;
  background: ${setColor.primarycolor};
  color: ${setColor.mainWhite};
  text-transform: capitalize;
  font-size: ${setRem(18)};
  padding: ${setRem(17)} ${setRem(36)};
  ${setFont.main};
  letter-spacing: ${setLetterSpacing(3)};
  ${setBorder({ color: setColor.primarycolor })};
  ${setTransition()};
  text-decoration: none;
  cursor: pointer;
  ${(props) =>
    `margin:${props.t || 0} ${props.r || 0} ${props.b || 0} ${props.l || 0}`};
  &:hover {
    background: transparent;
    color: ${setColor.primarycolor};
  }
  &:focus {
    outline: none;
  }
`;
