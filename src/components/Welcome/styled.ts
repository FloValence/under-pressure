import styled from "styled-components";

import { MainColor, AccentColor } from '@styles/variables';

export const WelcomeWrapper = styled.div`
  text-align: center;
`;

export const WelcomeImage = styled.img`
  margin: 50px;
  max-width: 65%;
`;

export const WelcomeRules = styled.p``;

export const WelcomeButton = styled.button`
outline: none;
border: solid #fff 1px;
background-color: ${MainColor};
color: #fff;
padding: 50px;
cursor: pointer;
transition: background-color 0.1s ease-out, color 0.1s ease-out, box-shadow 0.1s ease-out;

&:hover {
  border: solid ${MainColor} 1px;
  background-color: ${AccentColor};
  color: ${MainColor};
  box-shadow: 0 4px 10px 0 rgb(0 0 0 / 20%);
}
`;
