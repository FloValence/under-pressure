import React from "react";

import { msToText } from "@modules/utils/msToTime";

import { VictoryImage, VictoryWrapper } from "./styled";

interface VictoryProps {
  time: number;
}

const Victory: React.FC<VictoryProps> = ({ time }) => {
  return (
    <VictoryWrapper>
      <VictoryImage src="/youcan.png" />
      <br />
      Hooo yeah !
      <br />
      {msToText(time)}
    </VictoryWrapper>
  );
};

export default Victory;
