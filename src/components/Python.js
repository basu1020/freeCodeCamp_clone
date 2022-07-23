import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';

const Python = () => {
  return (
    <>
    <div className="darker">
      <CodeMirror
      height='60vh'
      theme={"dark"}
      extensions={[python()]}
      />
    </div>
    </>
  )
}

export default Python