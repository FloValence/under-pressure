import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Exercice from "@components/Exercice";

export default {
  title: "Component/Exercice",
  components: Exercice,

  argTypes: {
    onStopTimer: { action: "onStopTimer" },
    onGoToNext: { action: "onGoToNext" },
  },
} as Meta;

const exo = {
  functionName: "doubleInteger",
  placeholder: `function doubleInteger(i) {
  
    // i will be an integer. Double it and return it.
    
    
    
    return i;
    
  }`,
  testValues: [
    { value: 2, expectedResult: 4 },
    { value: 4, expectedResult: 8 },
    { value: -10, expectedResult: -20 },
    { value: 0, expectedResult: 0 },
    { value: 100, expectedResult: 200 },
  ],
};

export const DefaultStory: Story = ({ onStopTimer, onGoToNext }) => {
  return (
    <div>
      <Exercice onGoToNext={onGoToNext} onStopTimer={onStopTimer} exo={exo} />
    </div>
  );
};
