import React from 'react'
import Codemirror from "@uiw/react-codemirror"
import { html } from "@codemirror/lang-html"

const Responsive = () => {
  return (
    <div className="darker">
      <Codemirror
        height='60vh'
        theme={"dark"}
        extensions={[html()]}
      />
    </div>
  )
}

export default Responsive