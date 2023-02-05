import React from 'react'
import "./style.css"


const SecButton = (props) => {
  return (
    <>
         <button type="button" className="btn_sign_in"> 
          {props.text}
        </button> 
    </>
  )
}

export default SecButton