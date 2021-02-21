import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Header from "@components/Header";

export default {
  title: "Component/Header",
  components: Header,

  argTypes: {
    onFacebookShare: { action: "onFacebookShare" },
    onTwitterShare: { action: "onTwitterShare" },
    time: {
      control: {
        type: "number",
      },
    },
  },
} as Meta;

export const DefaultStory: Story<{
  time: number;
  onFacebookShare: () => void;
  onTwitterShare: () => void;
}> = ({ time, onFacebookShare, onTwitterShare }) => {
  return (
    <div>
      <Header
        onFacebookShare={onFacebookShare}
        onTwitterShare={onTwitterShare}
        time={time}
      />
    </div>
  );
};

DefaultStory.args = {
  time: 15000,
};
