import React from "react";

import msToTime from "@modules/utils/msToTime";

import {
  HeaderButton,
  HeaderButtons,
  HeaderImage,
  HeaderInfos,
  HeaderTimer,
  HeaderWrapper,
} from "./styled";

interface HeaderProps {
  time: number;
  onFacebookShare?: () => void;
  onTwitterShare?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  time,
  onFacebookShare,
  onTwitterShare,
}) => {
  return (
    <HeaderWrapper>
      <HeaderImage src="/youcant.png" alt="Can you ?" />
      <HeaderInfos>
        <HeaderTimer>{msToTime(time)}</HeaderTimer>
        <HeaderButtons>
          <HeaderButton onClick={onTwitterShare}>
            Tweet your progress
          </HeaderButton>
          <HeaderButton onClick={onFacebookShare}>
            Share on Facebook
          </HeaderButton>
        </HeaderButtons>
      </HeaderInfos>
    </HeaderWrapper>
  );
};

export default Header;
