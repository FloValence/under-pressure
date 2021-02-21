import React, { useEffect, useRef } from "react";
import { ConsoleMessage } from "src/types";
import {
  FooterConsole,
  FooterConsoleValue,
  FooterGoButton,
  FooterWrapper,
} from "./styled";

interface FooterProps {
  consoleValues: ConsoleMessage[];
  onGo: () => void;
}

const Footer: React.FC<FooterProps> = ({ consoleValues, onGo }) => {
  const consoleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentConsole = consoleRef.current;
    if (currentConsole) {
      currentConsole.scrollTop = currentConsole.scrollHeight;
    }
  }, [consoleValues]);

  return (
    <FooterWrapper>
      <FooterGoButton onClick={onGo}>GO</FooterGoButton>
      <FooterConsole ref={consoleRef}>
        {consoleValues.map(({ value, type }, i) => {
          return (
            <FooterConsoleValue $type={type} key={value + i}>
              {value}
            </FooterConsoleValue>
          );
        })}
      </FooterConsole>
    </FooterWrapper>
  );
};

export default Footer;
