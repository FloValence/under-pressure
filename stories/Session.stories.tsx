import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Session from "@containers/Session";

export default {
  title: "Container/Session",
  components: Session,
} as Meta;

export const DefaultStory: Story = () => {
  return (
    <div>
      <Session />
    </div>
  );
};
