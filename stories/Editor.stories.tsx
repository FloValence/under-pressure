import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Editor from "@components/Editor";

export default {
  title: "Component/Editor",
  components: Editor,

  argTypes: {
    onChange: { action: "onChange" },
  },
} as Meta;

const defaultValue = `
function arraySum(i) {
    
  // i will be an array, containing integers, strings and/or arrays like itself.
  // Sum all the integers you find, anywhere in the nest of arrays.

}
`;

export const DefaultStory: Story<{
  onChange: () => void;
}> = ({ onChange }) => {
  return (
    <div>
      <Editor onChange={onChange} value={defaultValue} />
    </div>
  );
};
