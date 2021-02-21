import React from "react";

import AceEditor from "react-ace";
import "ace-builds/webpack-resolver";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

interface EditorProps {
  value: string;
  onChange: (value: string) => void;
}

const Editor: React.FC<EditorProps> = ({ onChange, value }) => {
  return (
    <div>
      <AceEditor
        onChange={onChange}
        value={value}
        height="250px"
        width="100%"
        theme="monokai"
        mode="javascript"
      />
    </div>
  );
};

export default Editor;
