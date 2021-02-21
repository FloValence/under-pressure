import styled from "styled-components";

import { MainColor, AccentColor } from "@styles/variables";

export const FooterWrapper = styled.div`
  display: flex;
  padding-top: 20px;
`;

export const FooterGoButton = styled.button`
  outline: none;
  border: solid #fff 1px;
  background-color: ${MainColor};
  color: #fff;
  padding: 50px;
  cursor: pointer;
  transition: background-color 0.1s ease-out, color 0.1s ease-out;

  &:hover {
    border: solid ${MainColor} 1px;
    background-color: ${AccentColor};
    color: ${MainColor};
  }
`;

export const FooterConsole = styled.div`
  flex-grow: 2;
  overflow-y: scroll;
  max-height: 200px;
  margin-left: 20px;
`;

interface ConsoleValueProps {
  $type: "info" | "success" | "error";
}
export const FooterConsoleValue = styled.p<ConsoleValueProps>`
  padding: 25px;
  margin: 0;

  ${({ $type }) => {
    switch ($type) {
      case "success":
        return "background: lightgreen";
      case "error":
        return "background: pink";
      case "info":
      default:
        return "background: white";
    }
  }}
`;
