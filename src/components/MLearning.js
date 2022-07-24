import React from 'react'

const MLearning = () => {
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

export default MLearning