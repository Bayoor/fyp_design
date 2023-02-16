import React from 'react'
import "./style.css"


const SecButton = (props) => {
  return (
    <div className='sec-button'>
         <button className="sign_in-btn"> 
          {props.text}
        </button> 
    </div>
  )
}

export default SecButton;