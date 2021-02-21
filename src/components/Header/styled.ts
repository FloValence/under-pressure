import styled from "styled-components";

import { MainColor, AccentColor } from "@styles/variables";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 50px;
`;

export const HeaderImage = styled.img`
  max-height: 100px;
  /* width: 20%; */
`;

export const HeaderInfos = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderTimer = styled.div`
  font-size: 60px;
  text-align: right;
`;
export const HeaderButtons = styled.div``;

export const HeaderButton = styled.button`
  border: solid ${MainColor} 1px;
  margin-left: 10px;
  outline: none;
  padding: 5px;
  background-color: ${MainColor};
  color: #fff;
  cursor: pointer;
  transition: background-color 0.1s ease-out, color 0.1s ease-out;

  &:hover {
    border: solid ${MainColor} 1px;
    background-color: ${AccentColor};
    color: ${MainColor};
  }
`;
