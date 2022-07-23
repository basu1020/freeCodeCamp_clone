import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

function Javascript() {
  return (
    <div className="darker">
        <CodeMirror
          value="console.log('hello world!');"
          height="60vh"
          theme={"dark"}
          extensions={[javascript({ jsx: true })]}
        />
    </div>
  );
}

export default Javascript