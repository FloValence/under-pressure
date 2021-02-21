import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Footer from "@components/Footer";
import { ConsoleMessage } from "src/types";

export default {
  title: "Component/Footer",
  components: Footer,

  argTypes: {
    onGo: { action: "onGo" },
  },
} as Meta;

const values: ConsoleMessage[] = [
  {
    value: "Something went wrong",
    type: "error",
  },
  {
    value: "Something to tell",
    type: "info",
  },
  {
    value: "All good!",
    type: "success",
  },
  {
    value:
      "Final challenge! Sum all the integers in a nested array, no matter how many levels deep.",
    type: "success",
  },
];

export const DefaultStory: Story<{
  onGo: () => void;
}> = ({ onGo }) => {
  return (
    <div>
      <Footer onGo={onGo} consoleValues={values} />
    </div>
  );
};
