import React from 'react'
import Codemirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'

const BackEnd = () => {
  return (
    <>
      <div className="container-dark">
        <div className='darker'>
          <div className="darker-instructions">
            <div className="darker-instructions__text">
              write a funciton that takes two integer and returns the sum
            </div>
          </div>
        </div>
        <div className='darker'>
          <Codemirror
            theme={"dark"}
            height={"90vh"}
            width={"47vw"}
            extensions={[javascript({ jsx: true })]}
          />
        </div>
      </div>
    </>
  )
}

export default BackEnd