import React from "react";

import {
  WelcomeButton,
  WelcomeImage,
  WelcomeRules,
  WelcomeWrapper,
} from "./styled";

interface WelcomeProps {
  onStart: () => void;
}

const Welcome: React.FC<WelcomeProps> = ({ onStart }) => {
  return (
    <WelcomeWrapper>
      <WelcomeImage src="/youcant.png" alt="Can you ?" />
      <WelcomeRules>
        Five functions to fill. One ticking clock. <b>How fast can you code?</b>
      </WelcomeRules>
      <WelcomeButton onClick={onStart}>I am ready</WelcomeButton>
    </WelcomeWrapper>
  );
};

export default Welcome;
