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
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, illo. Mollitia, molestiae quod odit facere odio pariatur officiis facilis accusantium! Quaerat commodi tempora nisi, quis quam recusandae minus soluta beatae magni amet totam. Numquam.</p>
            </div>
          </div>
        </div>
        <div className='darker'>
          <Codemirror
            theme={"dark"}
            height={"60vh"}
            width={"42vw"}
            extensions={[javascript({ jsx: true })]}
          />
        </div>
      </div>
    </>
  )
}

export default BackEnd